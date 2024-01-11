const { User, Thought } = require('../models');

module.exports = {
    getThought(req, res) {
        Thought.find({})
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoguhtId })
            .select("-__v").then((thoguht) => !thought ? res.status(404).json({ message: "No thought found with that ID!" })
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body).then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
            .then((thought) =>
                !thought ? res.status(404).json({ message: "No user found with that ID!" })
                    : res.json(thought)
            )
            .catch((error) => res.status(500).json(err));
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true },
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteThought
}
const { User, Thought }  = require('../models');

module.exports = {
 getThought(req, res) {
    Thought.find({})
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
},
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoguhtId})
        .select("-__v").then((thoguht) => !thought ? res.status(404).json({message: "No thought found with that ID!"})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    

}
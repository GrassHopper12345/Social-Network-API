const { response } = require('express');
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleStudent(req, res) {
    User.findOne({ _id: req.params.user_id })
      .populate('thoughts')
      .populate('friends')
      .select('-__v')
      .then((user) => !user ? res.status(404).json({ message: 'No User with that ID!' })
        : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //create new user
  createUser(req, res) {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },
  //update user
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId},
      {$set: req.body},
      { runValidators: true, new: true }
    )
    .then((user) => !user ? res.status(404).json({ message: 'No User found with this ID!'})
    : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
  },

  //delete user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId})
    .then((user) => !user ? res.status(404).json({ message: 'No user found with that ID!'})
    : Thought.deleteMany({ _id: { $in: user.thoughts}})
    )
    .then(() => res.json({ message: 'User and Thoughts deleted'}))
    .catch((err) => res.status(500).json(err));
  },
  addFriend(req,res) {
    User.findOneAndUpdate(
      { _id:req.params.userId },
      { $addToSet: { friends: req.params.friendIds } },
      { runValidators: true, new:true }
    )
    .then((user) => !user ? res.status(404).json({message: " No user found with that ID!"})
    : res.json(user)) 
    .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId},
      { $pull: { friends: req.params.friendId}},
      { new: true }
      )
      .then((user) => 
      !user ? res.status(404).json({message: "No user found with that ID!"}) 
      : res.json(user)
      )
      .catch((err) => res.status(500).json({err}))
  },
};
  

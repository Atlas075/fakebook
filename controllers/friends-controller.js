const { Friend, User } = require('../models');

const friendController = {
  // add friend to a user
  addFriend({ params, body }, res) {
    console.log(params);
    Friend.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { reaction: _id } },
          { new: true }
        );
      })
      .then(dbUserData => {
        console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

//   // add reply to thought
//   addReply({ params, body }, res) {
//     Thought.findOneAndUpdate(
//       { _id: params.thoughtId },
//       { $push: { replies: body } },
//       { new: true, runValidators: true }
//     )
//       .then(dbThoughtData => {
//         if (!dbThoughtData) {
//           res.status(404).json({ message: 'No thought found with this id!' });
//           return;
//         }
//         res.json(dbThoughtData);
//       })
//       .catch(err => res.json(err));
//   },

  // remove friend
  removeFriend({ params }, res) {
    Friend.findOneAndDelete({ _id: params.friendId })
      .then(deletedFriend => {
        if (!deletedFriend) {
          return res.status(404).json({ message: 'No friend with this id!' });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { reaction: params.reactionId } },
          { new: true }
        );
      })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },
};

module.exports = friendController;

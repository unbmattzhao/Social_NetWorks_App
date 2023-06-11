// Import the User model
const User = require('../models/User');

// Define the userController object
const userController = {
  // Method to get all users
  async getAllUsers(req, res) {
    try {
      const dbUserData = await User.find({});
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to create a new user
  async createUser({ body }, res) {
    try {
      const dbUserData = await User.create(body);
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to get a single user by its _id
  async getUserById({ params }, res) {
    try {
      const dbUserData = await User.findOne({ _id: params.id });
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to update a user by its _id
  async updateUser({ params, body }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true });
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

/// Method to delete a user by its _id
// Method to delete a user by its _id
async deleteUser({ params }, res) {
  try {
    // Delete the user and their associated thoughts and reactions
    const user = await User.findOneAndDelete({ _id: params.id });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the thoughts associated with the user
    const deleteThoughts = await Thought.deleteMany({ username: user.username });

    // Delete the reactions associated with the user
    const deleteReactions = await Thought.updateMany(
      { 'reactions.username': user.username },
      { $pull: { reactions: { username: user.username } } }
    );

    // Wait for all operations to complete
    await Promise.all([deleteThoughts, deleteReactions]);

    res.json({ message: 'User and the Thoughts and reactions associated with the user deleted successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
},

  // Method to add a new friend to a user's friend list
  async addFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId } },
        { new: true, runValidators: true }
      );
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to remove a friend from a user's friend list
  async removeFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

// Export the userController object
module.exports = userController;

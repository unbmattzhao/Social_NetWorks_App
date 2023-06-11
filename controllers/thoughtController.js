// Import the Thought model
const Thought = require('../models/Thought');

// Define the thoughtController object
const thoughtController = {
  // Method to get all thoughts
  async getAllThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find({});
      res.json(dbThoughtData);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
  },

  // Method to create a new thought
  async createThought({ body }, res) {
    try {
      const dbThoughtData = await Thought.create(body);
      res.json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to get a single thought by its _id
  async getThoughtById({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOne({ _id: params.id });
      res.json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to update a thought by its _id
  async updateThought({ params, body }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true });
      res.json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to delete a thought by its _id
  async deleteThought({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndDelete({ _id: params.id });
      res.json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to create a reaction
  async createReaction({ params, body }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body } },
        { new: true, runValidators: true }
      );
      res.json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  // Method to delete a reaction
  async deleteReaction({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
      );
      res.json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

// Export the thoughtController object
module.exports = thoughtController;

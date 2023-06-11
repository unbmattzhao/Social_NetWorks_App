const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReactionSchema = require('./Reaction');

// Define the ThoughtSchema
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the Thought model using the ThoughtSchema
const Thought = mongoose.model('Thought', ThoughtSchema);

// Export the Thought model
module.exports = Thought;

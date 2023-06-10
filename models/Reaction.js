const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the ReactionSchema
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp)
  }
},
{
  toJSON: {
    getters: true
  }
});

// Export the ReactionSchema
module.exports = ReactionSchema;

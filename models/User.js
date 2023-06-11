const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the UserSchema
const UserSchema = new Schema({
  // Define username field
  username: {
    type: String, 
    unique: true, 
    required: true, 
    trim: true 
  },
  // Define email field
  email: {
    type: String, 
    required: true, 
    unique: true, 
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] // It should match a valid email format
  },
  // Define thoughts field
  thoughts: [
    {
      type: Schema.Types.ObjectId, 
      ref: 'Thought' 
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId, 
      ref: 'User' 
    }
  ]
},
{
  toJSON: {
    virtuals: true, // This is for including virtuals when document is converted to JSON
  },
  id: false 
});



// Define a virtual for friendCount
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length; 
});

// Create the User model using the UserSchema
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;

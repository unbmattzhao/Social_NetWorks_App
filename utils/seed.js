// Import the models
const User = require('../models/User');
const Thought = require('../models/Thought');

// Import the database connection
const db = require('../config/connection');

// Import the seed data
const { userData, thoughtData } = require('./data');

// Define a function to seed the database
const seedDatabase = async () => {
    try {
      // Clear the database
      await User.deleteMany({});
      await Thought.deleteMany({});
  
      // Create the User documents without the friends field
      const userDocuments = await User.create(userData.map(({ friends, ...user }) => user));
  
      // Create a map of usernames to _id values
      const userIds = userDocuments.reduce((map, user) => {
        map[user.username] = user._id;
        return map;
      }, {});
  
      // Update the friends field of each User document
      for (let user of userData) {
        const friendIds = user.friends.map(friendUsername => userIds[friendUsername]);
        await User.findByIdAndUpdate(userIds[user.username], { friends: friendIds });
      }
  
      // Create the Thought documents
      await Thought.create(thoughtData);
  
      console.log('Database seeded!');
      process.exit(0);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };
  
  // Call the seedDatabase function
  seedDatabase();
  
  
  

// Call the seedDatabase function
seedDatabase();

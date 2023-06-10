const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social_network")
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;
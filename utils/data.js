// Define some seed data
const userData = [
    {
      username: "John",
      email: "john@gmail.com",
      thoughts: [],
      friends: []
    },
    {
      username: "Emma",
      email: "emma@gmail.com",
      thoughts: [],
      friends: ["John"]
    },
    {
      username: "Oliver",
      email: "oliver@gmail.com",
      thoughts: [],
      friends: ["John", "Emma"]
    },
    {
      username: "Ava",
      email: "ava@gmail.com",
      thoughts: [],
      friends: []
    },
    {
      username: "Ethan",
      email: "ethan@gmail.com",
      thoughts: [],
      friends: ["Emma", "Oliver"]
    }
  ];
  
  const thoughtData = [
    {
      thoughtText: "Here's a cool thought...",
      username: "John",
      reactions: []
    },
    {
      thoughtText: "Here's another cool thought...",
      username: "Emma",
      reactions: [
        { reactionBody: "Great thought!", username: "John" },
        { reactionBody: "Interesting...", username: "Ava" }
      ]
    },
    {
      thoughtText: "I'm thinking about learning a new programming language.",
      username: "Oliver",
      reactions: [
        { reactionBody: "That sounds like a great idea!", username: "John" },
        { reactionBody: "What language are you considering?", username: "Emma" }
      ]
    },
    {
      thoughtText: "I love coding!",
      username: "Ava",
      reactions: []
    },
    {
      thoughtText: "I'm excited about the future of technology.",
      username: "Ethan",
      reactions: [
        { reactionBody: "Me too!", username: "John" },
        { reactionBody: "There's so much to look forward to.", username: "Emma" }
      ]
    }
  ];
  

  module.exports = { userData, thoughtData };
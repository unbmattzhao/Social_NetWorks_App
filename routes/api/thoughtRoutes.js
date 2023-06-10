// Import the necessary modules
const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// Set up GET and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up GET, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up POST and DELETE at /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction)
  .delete(deleteReaction);

// Export the router
module.exports = router;

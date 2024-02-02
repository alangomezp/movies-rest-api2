const express = require('express')
const router = express.Router()
const { getMovies, getMovieById, addNewMovie, updateMovie, deleteMovie } = require('../controllers/moviesController')

router.route('/movies')
  .get(getMovies)
  .post(addNewMovie)

router.route('/movies/:id')
  .get(getMovieById)
  .patch(updateMovie)
  .delete(deleteMovie)

module.exports = router

const movies = require('../data/movies.json')
const crypto = require('node:crypto')
const { validateObject, validatePartialObject } = require('../schemas/movieSchema')

const getMovies = (req, res) => {
  const { page } = req.query
  if (page !== undefined) {
    const start = (page - 1) * 3
    const end = start + 3
    const moviesPaged = movies.slice(start, end)
    res.json(moviesPaged)
  } else {
    res.json(movies)
  }
}

const getMovieById = (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)

  if (!movie) return res.status(404).json('Not Found')

  res.json(movie)
}

const addNewMovie = (req, res) => {
  const result = validateObject(req.body)

  if (result.error) return res.status(422).json(result.error)
  const newMovie = result.data

  movies.push({ id: crypto.randomUUID(), ...newMovie })
  res.status(201).json(movies)
}

const updateMovie = (req, res) => {
  const result = validatePartialObject(req.body)

  if (result.error) return res.status(422).json(result.error)

  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) return res.status(404).json({ message: 'Not Found' })

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = updateMovie
  res.status(200).json({ message: 'Movie updated', url: `http://localhost:3000/movies/${id}` })
}

const deleteMovie = (req, res) => {
  const { id } = req.params

  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) return res.status(404).json('Not Found')

  movies.splice(movieIndex, 1)
  res.status(200).json({ ok: true })
}

module.exports = {
  getMovies,
  getMovieById,
  addNewMovie,
  updateMovie,
  deleteMovie
}

const z = require('zod')

const movieSchema = z.object({
  title: z.string(),
  year: z.number().min(1900).max(2024),
  director: z.string(),
  duration: z.number().positive().min(60),
  poster: z.string().url(),
  genre: z.array(z.string()),
  rate: z.number().max(10).default(0)
})

function validateObject (object) {
  return movieSchema.safeParse(object)
}

function validatePartialObject (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateObject,
  validatePartialObject
}

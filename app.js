const express = require('express')
const routes = require('./routes/routes.js')
const cors = require('cors')

const app = express()
app.disable('x-powered-by')

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/', routes)

// start server
const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

const express = require('express')
const bookRoutes = require('./routes/bookRoutes')
const app = express()
const PORT = 3000

app.use('/api/books', bookRoutes)
app.use('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(PORT, () => {
  console.info(`Server listening on port: ${PORT}`)
})
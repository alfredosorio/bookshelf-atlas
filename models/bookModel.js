const mongoose = require('../db/db')
const bookSchema = mongoose.Schema({
  title: String,
  authors: [String],
  isbn: [String],
  createdAt: { type: Date, default: Date.now }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
const express = require('express')
const Book = require('../models/bookModel')
const router = express.Router()

router.get('/', (req, res) => {
  Book.find()
  .then(books => {
    res.json(books)
  })
  .catch(err => {
    res.json(err)
  })
}) 

module.exports = router
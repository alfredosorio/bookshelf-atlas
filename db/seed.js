const Book = require('../models/bookModel')

Book.create([
  {
    title: 'The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win',
    authors: ['Gene Kim', 'George Spafford', 'Kevin Behr'],
    isbn: ['0988262592', '978-0988262591']
  }
])

.then( data => {
  console.info('Successfully saved seed file, data')
})
.catch(err => {
  console.error('Error encountered, err')
})
import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({book}) => {
  return (
    <div>
      <div>
        <img src={book.bimage} alt="image"/>
      </div>
      <div>
        <Link>
        <p>{book.title}</p>
        </Link>
        <p>{book.author}</p>
      </div>
        <div>
          <p>&#8377; {book.price}</p>
        </div>
    </div>
  )
}

export default BookCard
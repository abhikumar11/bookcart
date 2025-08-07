import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({book}) => {
  return (
    <div>
      <div>
        <img src="" alt="image"/>
      </div>
      <div>
        <Link>
        <p>Book Title</p>
        </Link>
        <p>Author</p>
      </div>
        <div>
          <p>Price</p>
        </div>
    </div>
  )
}

export default BookCard
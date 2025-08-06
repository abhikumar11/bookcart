import React, { useContext } from 'react'
import BookCard from './BookCard'
import { bookStore } from '../utils/BookContext'

const Home = () => {
  const {loading,book}=useContext(bookStore);
  return (
    <div>
      <h1>Home Page</h1>
      {loading?"Loading":<BookCard book={book}/>}
    </div>
  )
}


export default Home
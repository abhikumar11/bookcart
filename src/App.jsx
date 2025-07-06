import React from 'react'
import Header from './components/Header'
import BookList from './components/BookList'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Header/>
      <BookList/>
      <Cart/>
    </div>
  )
}

export default App
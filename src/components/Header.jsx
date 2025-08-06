import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <p>ChapterOne</p>
      </div>
      <div>
        <Link><p>Order</p></Link>
        <Link><p>Login</p></Link>
        <Link><p>Cart</p></Link>
      </div>
    </div>
  )
}

export default Header
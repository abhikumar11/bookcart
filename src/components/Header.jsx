import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userStore } from '../utils/UserContext'

const Header = () => {
  const { user, handleLogout } = useContext(userStore);
  return (
    <div>
      <div>
      <Link to="/"><p>ChapterOne</p></Link>
      </div>
      <div>
        <p>{user ?`Hi! ${user.name}`: " "}</p>
        <Link to={user?"/order":"/login"}><p>Order</p></Link>
        {user ? (
          <button onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <p>Login</p>
          </Link>
        )}
        <Link><p>Cart</p></Link>
      </div>
    </div>
  )
}

export default Header
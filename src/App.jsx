import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import Order from './components/Order'
import Checkout from './components/Checkout'
import { ToastContainer } from 'react-toastify'
import { useContext } from 'react'
import { userStore } from './utils/UserContext'
import BookDetails from './components/BookDetails'
import Profile from './components/Profile'

const App = () => {
  const {user}=useContext(userStore);
  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000}/>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={user?<Order/>:<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/bookdetail/:id" element={<BookDetails/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default App
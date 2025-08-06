import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import UserProvider from './utils/UserContext.jsx'
import BookProvider from './utils/BookContext.jsx'
import CartProvider from './utils/CartContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <BookProvider>
            <App />
          </BookProvider>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)

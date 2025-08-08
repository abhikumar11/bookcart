import { useContext } from "react"
import { cartStore } from "../utils/CartContext"

const Cart = () => {
  const {cart}=useContext(cartStore);
  console.log(cart)
  return (
    <div>
        <h1>Cart</h1>
       
    </div>
  )
}

export default Cart
import React, { useContext } from 'react'
import { CartContext } from '../utils/CartContext'

const Cart = () => {
    const{bookcart,increaseQuantity,decreaseQuantity}=useContext(CartContext);
  return (
    <div>
        <h2>Cart</h2>
        {bookcart.length==0?<h3>Your Cart is Empty</h3>:bookcart.map((item)=>(
             <div key={item.book.id} style={{ border: "2px solid black", margin: "10px", padding: "10px" }}>
           <p>Title: {item.book.title}</p>
            <p>Author: {item.book.author}</p>
            <p>Price: &#8377;{item.book.price}</p>
            <div style={{display:"flex",padding:"10px"}}>
                <button onClick={() => decreaseQuantity(item.book.id)}>-</button>
                <input type="text" value={item.quantity} readOnly style={{ width: "30px", textAlign: "center" }} />
                <button onClick={() => increaseQuantity(item.book.id)}>+</button>
                </div>
            </div>
        ))}
        <div style={{ borderTop: "2px solid gray", marginTop: "20px", paddingTop: "10px", textAlign: "right" }}>
        <h3>
          Subtotal: ₹{Number.parseFloat(bookcart.reduce((sum,next)=>sum+next.book.price,0))}
        </h3>
      </div>
    </div>
  )
}

export default Cart
import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const BookCard = ({ book }) => {
     const {addToCart} = useContext(CartContext);
     return (
          <div style={{ border: "2px solid black", padding: "30px" }}>
               <img src={book.image} width="200px" />
               <h3>{book.title}</h3>
               <p>By: {book.author}</p>
               <p>&#8377;{book.price}</p>
               <button
                    onClick={() =>
                     addToCart(book)
                    }
               >
                    Add to Cart
               </button>
          </div>
     );
};

export default BookCard;

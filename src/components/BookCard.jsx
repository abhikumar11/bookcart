import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const BookCard = ({ book }) => {
     const {
          bookcart,
          addToCart,
          removeBook,
          increaseQuantity,
          decreaseQuantity,
     } = useContext(CartContext);
     let inCart = bookcart.find((item) => item.book.id === book.id);
     return (
          <div style={{ border: "2px solid black", padding: "30px" }}>
               <img src={book.image} width="200px" />
               <h3>{book.title}</h3>
               <p>By: {book.author}</p>
               <p>&#8377;{book.price}</p>
               <button
                    onClick={() =>
                         inCart ? removeBook(book.id) : addToCart(book)
                    }
               >
                    {inCart ? "Remove from Cart" : "Add to Cart"}
               </button>
          </div>
     );
};

export default BookCard;

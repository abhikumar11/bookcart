import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
     const [bookcart, setBookCart] = useState([]);
     const addToCart = (book) => {
          const exist = bookcart.find((item) => item.book.id === book.id);
          exist
               ? setBookCart((prev) =>
                    prev.map((item) =>
                         item.book.id === book.id
                              ? { ...item, book, quantity: item.quantity + 1 }
                              : item
                    )
               )
               : setBookCart((prev) => [...prev, { book, quantity: 1 }]);
     };
     const removeBook = (id) => {
          setBookCart((prev) => prev.filter((item) => item.book.id !== id));
     };
     const increaseQuantity = (id) => {
          setBookCart((prev) =>
               prev.map((item) =>
                    item.book.id === id
                         ? { ...item, quantity: item.quantity + 1 }
                         : item
               )
          );
     };
     const decreaseQuantity = (id) => {
          setBookCart((prev) =>
               prev.map((item) =>
                    item.book.id === id
                         ? { ...item, quantity: item.quantity - 1 }
                         : item
               ).filter((item)=>item.quantity>0)
          );
     };
     return (
          <CartContext.Provider
               value={{
                    bookcart,
                    addToCart,
                    removeBook,
                    increaseQuantity,
                    decreaseQuantity,
               }}
          >
               {children}
          </CartContext.Provider>
     );
};

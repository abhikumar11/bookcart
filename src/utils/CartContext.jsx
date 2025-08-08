import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const cartStore = createContext();

const CartProvider = ({ children }) => {
     const [cart, setCart] = useState([]);

     const addToCart = (book) => {
          const { item, qty } = book;
          const exist = cart.find((p) => p.id === item.id);
          if (exist) {
               const data = cart.map((p) =>
                    p.id === item.id ? { ...p, qty: p.qty + qty } : p
               );

               setCart(data);
               toast.info("Quantity updated in cart");
          } else {
               const product = { ...item, qty };
               setCart([...cart, product]);
               toast.success("Added to cart");
          }
     };

     const increaseQty = (item) => {
            
     };
     const decreaseQty = (item) => {

     };
     const deleteItem = (id) => {};

     const buySingle = async () => {};
     const buyAll = async () => {};

     return (
          <cartStore.Provider
               value={{
                    cart,
                    buySingle,
                    buyAll,
                    addToCart,
                    increaseQty,
                    decreaseQty,
                    deleteItem,
               }}
          >
               {children}
          </cartStore.Provider>
     );
};
export default CartProvider;

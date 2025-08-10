import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const cartStore = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (book) => {
    const exist = cart.find((p) => p.id === book.id);
    if (exist) {
      const updatedCart = cart.map((p) =>
        p.id === book.id ? { ...p, qty: p.qty + book.qty } : p
      );
      setCart(updatedCart);
      toast.info("Quantity updated in cart");
    } else {
      setCart([...cart, book]);
      toast.success("Added to cart");
    }
  };

  const increaseQty = (item) => {
    const updatedCart = cart.map((p) =>
      p.id === item.id ? { ...p, qty: p.qty + 1 } : p
    );
    setCart(updatedCart);
    toast.info("Quantity updated");
  };

  const decreaseQty = (item) => {
    if (item.qty === 1) return;
    const updatedCart = cart.map((p) =>
      p.id === item.id ? { ...p, qty: p.qty - 1 } : p
    );
    setCart(updatedCart);
    toast.info("Quantity updated");
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.success("Item removed");
  };

  return (
    <cartStore.Provider
      value={{
        cart,
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

import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const cartStore = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState("");
  const [checkoutItems, setCheckoutItems] = useState([]);
  const navigate = useNavigate();

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
    if (item.qty === 1) return; // avoid qty < 1
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

  const buyAll = (cartItems) => {
    setCheckoutItems(cartItems);
    navigate("/checkout");
  };

  const handlePayment = (method) => {
    setPayment(method);
  };

  const placeOrder = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!payment || checkoutItems.length === 0) {
      toast.error("Please select a payment method and have items to checkout");
      return;
    }

    try {
      const orderItems = checkoutItems.map((item) => ({
        bookid: item.id,
        qty: item.qty,
      }));

      const orderData = {
        userid: "123", // replace with real user id from auth context/localStorage
        items: orderItems,
        paymenttype: payment,
      };

      await axios.post("http://localhost:3000/orders", orderData);

      toast.success("Order placed successfully!");

      // Clear checkout and payment
      setCheckoutItems([]);
      setPayment("");

      navigate("/order"); // redirect after placing order
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order");
    }
  };

  return (
    <cartStore.Provider
      value={{
        cart,
        addToCart,
        checkoutItems,
        payment,
        increaseQty,
        decreaseQty,
        deleteItem,
        buyAll,
        handlePayment,
        placeOrder,
      }}
    >
      {children}
    </cartStore.Provider>
  );
};

export default CartProvider;

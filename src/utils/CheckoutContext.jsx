import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const checkoutStore = createContext();

const CheckoutProvider = ({ children }) => {

     const [checkOutItem, setCheckoutItem] = useState([]);
     const [payment, setPayment] = useState("");
     const navigate=useNavigate();

     const checkOutAll =(item) => {
          setCheckoutItem(item);
          navigate("/checkout");
     };

     const buySingle=(item) => {
          setCheckoutItem([item]);
          navigate("/checkout");
     };

     const handlePayment = (item) => {
          setPayment(item);
     };

     const placeOrder=()=>{
          const user=JSON.parse(localStorage.getItem("user"))
  try {
    const temp = checkOutItem.map((p) => ({
      bookid: p.id,
      title:p.title,
      qty: p.qty,
      price:p.price,
      bimage:p.bimage
    }));

    const order = {
      userid: user.id,
      items: temp,
      paymenttype: payment,
      orderdate: new Date().toISOString()
    };

     axios.post("http://localhost:3000/orders",order)
     .then(()=>{
          toast.success("Your order has been placed");
          navigate(`/order/${user.id}`)
     })
     
    
  } catch (err) {
    console.log(err);
    toast.error(`Order failed: ${err.response?.data?.message || err.message}`);
  }
};

     
     return (
          <checkoutStore.Provider
               value={{
                    checkOutAll,
                    buySingle,
                    checkOutItem,
                    payment,
                    handlePayment,
                    placeOrder,
               }}
          >
               {children}
          </checkoutStore.Provider>
     );
};
export default CheckoutProvider;

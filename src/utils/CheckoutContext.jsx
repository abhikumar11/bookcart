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
     };

     const handlePayment = (item) => {
          setPayment(item);
     };

     const placeOrder=()=>{
          const user=JSON.parse(localStorage.getItem("user"))
  try {
    const temp = checkOutItem.map((p) => ({
      bookid: p.id,
      qty: p.qty,
    }));

    const order = {
      userid: user.id,
      items: temp,
      paymenttype: payment,
    };
    console.log("Order payload:", order);

     axios.post("http://localhost:3000/usercheckout", order)
     .then(()=>{
                toast.success("Your order has been placed");
     })

   
    //setCheckoutItem([]);
    //navigate("/order");
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

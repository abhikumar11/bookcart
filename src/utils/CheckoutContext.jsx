import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const checkoutStore = createContext();

const CheckoutProvider = ({ children }) => {
     const [checkOutItem, setCheckoutItem] = useState([]);
     const [payment, setPayment] = useState("");
     const navigate=useNavigate();

     const checkOutAll = async (item) => {
          //setCheckoutItem(item);
     };

     const buySingle=(item) => {
          setCheckoutItem([item]);
     };

     const handlePayment = (item) => {
          setPayment(item);
     };

     const placeOrder = async (userid) => {
          try {
               const temp = checkOutItem.map((p) => ({
                    bookid: p.item.id,
                    qty: p.qty,
               }));

               const order = {
                    userid: userid,
                    items: temp,
                    paymenttype: payment,
               };
               console.log(temp);
               const res = await axios.post(
                    "http://localhost:3000/checkout",
                    order
               );
                 if (!res) {
        toast.error("unable to place your order");
        return;
      }
      toast.success("Your order has been placed");
      setCheckoutItem([]);
      
               //navigate("/order");
      
      
      
  } catch (err) {
    toast.error(`Unable to place your order: ${err.message}`);
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

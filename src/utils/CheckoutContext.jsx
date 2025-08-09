import { createContext, useState } from "react";

export const checkoutStore = createContext();

const CheckoutProvider = ({ children }) => {
     const [checkOutItem, setCheckoutItem] = useState([]);
     const [payment, setPayment] = useState("");

     const checkOutAll = async (item) => {
          //setCheckoutItem(item);
     };

     const buySingle = async (item) => {
          setCheckoutItem([item]);
          console.log(checkOutItem);
     };

     const handlePayment = (item) => {
          setPayment(item);
     };

     return (
          <checkoutStore.Provider
               value={{
                    checkOutAll,
                    buySingle,
                    checkOutItem,
                    payment,
                    handlePayment,
               }}
          >
               {children}
          </checkoutStore.Provider>
     );
};
export default CheckoutProvider;

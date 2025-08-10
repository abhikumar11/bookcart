import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const orderStore = createContext();

const OrderProvider = ({ children }) => {
     const [orders, setOrders] = useState([]);

     const fetchOrder = async (id) => {
        try {

            const {data}=await axios.get("http://localhost:3000/orders");
            const temp=data.filter((item)=>item.userid==id);
            console.log("temp",temp)
            setOrders(temp);

        } catch (err) {
            toast.error(`something went wrong ${err.message}`);
        }
     };
     return (
          <orderStore.Provider value={{ fetchOrder,orders }}>
               {children}
          </orderStore.Provider>
     );
};
export default OrderProvider;

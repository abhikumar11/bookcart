import { createContext, useState } from "react";

export const cartStore=createContext();

const CartProvider=({children})=>{

    const [cart,setCart]=useState([]);
    
    return(
        <userStore.Provider value={{cart}}>
            {children}
        </userStore.Provider>
    )
}
export default CartProvider;
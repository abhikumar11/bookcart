import { createContext, useState } from "react";

export const cartStore=createContext();

const CartProvider=({children})=>{

    const [cart,setCart]=useState([]);
    
    return(
        <cartStore.Provider value={{cart}}>
            {children}
        </cartStore.Provider>
    )
}
export default CartProvider;
import { createContext, useState } from "react";

export const bookStore=createContext();

const BookProvider=({children})=>{

    const [book,setBook]=useState([]);

    return(
        <bookStore.Provider value={{book}}>
            {children}
        </bookStore.Provider>
    )
}
export default BookProvider;
import { createContext, useState } from "react";

export const userStore=createContext();

const UserProvider=({children})=>{

    const [frmData,setFrmData]=useState({});

        const handleInput=(e)=>{
            const {name,value}=e.target;
            setFrmData({...frmData,[name]:value});
        }
        const handleLogin=(e)=>{
            e.preventDefault();
        }
        const handleRegister=(e)=>{
            e.preventDefault();
        }
    return(
        <userStore.Provider value={{handleInput,handleLogin,handleRegister}}>
            {children}
        </userStore.Provider>
    )
}
export default UserProvider;
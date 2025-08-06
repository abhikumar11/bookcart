import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const userStore = createContext();

const UserProvider = ({ children }) => {

  const [frmData, setFrmData] = useState({});
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFrmData({...frmData,[name]:value});
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = frmData;

    if (!email || !password) {
      toast.error("Please enter valid credentials");
      return;
    }
    try {
      const res = await axios.get("http://localhost:3000/user");
      const foundUser = res.data.find((item) => item.email === email);

      if (!foundUser) {
        toast.error("User not found");
        return;
      }

      if (foundUser.password !== password) {
        toast.error("Wrong password");
        return;
      }
      toast.success("Login successful");
      setFrmData({});
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while logging in");
    }
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = frmData;

    if (!name || !email || !password) {
      toast.error("Please enter valid credentials");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/user", frmData);

      if (!res) {
        toast.error("unable to create account");
        return;
      }
      toast.success("Signup successful");
      setFrmData({});
      navigate("/login");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while signing up");
    }
  }
  return (
    <userStore.Provider value={{ handleInput, handleLogin, handleRegister }}>
      {children}
    </userStore.Provider>
  )
}
export default UserProvider;
// http://localhost:3000/books
// http://localhost:3000/user
// http://localhost:3000/checkout
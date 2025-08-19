import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const userStore = createContext();

const UserProvider = ({ children }) => {
  const [frmData, setFrmData] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFrmData({ ...frmData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = frmData;

    if (!email || !password) {
      toast.error("Please enter valid credentials");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }
   
    try {
      const res = await axios.get("http://localhost:3000/user");
      const exist = res.data.find((item) => item.email === email);

      if (!exist) {
        toast.error("User not found");
        return;
      }

      if (exist.password !== password) {
        toast.error("Wrong password");
        return;
      }
      console.log("login");
      toast.success("Login successful");
      setFrmData({});
      setUser(exist);

      localStorage.setItem("user", JSON.stringify(exist));

      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while logging in");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = frmData;

    if (!name || !email || !password) {
      toast.error("Please enter valid credentials");
      return;
    }
    if (name.length < 3) {
      toast.error("Name must be at least 3 characters");
      return;
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
      toast.error("Name should contain only alphabets");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/user",
        frmData
      );

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
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };
  const getUser = async () => {
    const { id } = JSON.parse(localStorage.getItem("user"));

    try {
      const { data } = await axios.get(`http://localhost:3000/user/${id}`);
      if (!data) {
        toast.error("unable to fetch");
        return;
      }
      setProfile(data);
    } catch (err) {
      toast.error(`Something went wrong ${err.message}`);
    }
  }
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleProfile = async (e) => {


    try {
      e.preventDefault();
      const { id } = JSON.parse(localStorage.getItem("user"));
      const res = await axios.put(
        `http://localhost:3000/user/${id}`,
        profile
      );
      if (!res) {
        toast.error("unable to update");
        return;
      }
      toast.success("Profile Updated");
      setProfile({});
    } catch (err) {
      toast.error(`Something went wrong ${err.message}`);
    }
  };

  return (
    <userStore.Provider
      value={{
        handleInput,
        handleLogin,
        handleRegister,
        user,
        handleLogout,
        handleProfile,
        isEditing,
        setIsEditing,
        profile, getUser, handleChange
      }}
    >
      {children}
    </userStore.Provider>
  );
};

export default UserProvider;

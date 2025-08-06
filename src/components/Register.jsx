import { useContext } from "react";
import { Link } from "react-router-dom";
import { userStore } from "../utils/UserContext";

const Register = () => {
    const {handleInput,handleRegister}=useContext(userStore)
  return (
     <div>
        <p>Create account </p>
        <div>
            <form onSubmit={handleRegister}>
                 <div>
                    <label>Enter Name</label>
                    <input type="text" name="name" onChange={handleInput}/>
                </div>
                <div>
                    <label>Enter mobile number or email</label>
                    <input type="email" name="email" onChange={handleInput}/>
                </div>
                <div>
                    <label>Enter password</label>
                    <input type="password" placeholder=".........." name="password" onChange={handleInput}/>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <div>
                    <p>Alread have an account <Link to="/login">Sign In</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register;
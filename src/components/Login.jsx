import { useContext } from "react";
import { Link } from "react-router-dom";
import { userStore } from "../utils/UserContext";

const Login = () => {
    const {handleInput,handleLogin}=useContext(userStore)
  return (
    <div>
        <p>Sign in to your account </p>
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Enter mobile number or email</label>
                    <input type="email" name="email" onChange={handleInput}/>
                </div>
                <div>
                    <label>Enter password</label>
                    <input type="password" placeholder=".........." name="password" onChange={handleInput}/>
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
                <div>
                    <p>New User ? <Link to="/register">Create an Account</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
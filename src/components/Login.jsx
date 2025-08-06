import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <p>Sign in to your account </p>
        <div>
            <form>
                <div>
                    <label>Enter mobile number or email</label>
                    <input type="text" name="userid"/>
                </div>
                <div>
                    <label>Enter password</label>
                    <input type="text" placeholder=".........." name="userid"/>
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
                <div>
                    <p>New User ? <a href="#">Create an Account</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
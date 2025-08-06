import React from 'react'

const Register = () => {
  return (
     <div>
        <p>Create account </p>
        <div>
            <form>
                 <div>
                    <label>Enter Name</label>
                    <input type="text" name="name"/>
                </div>
                <div>
                    <label>Enter mobile number or email</label>
                    <input type="text" name="userid"/>
                </div>
                <div>
                    <label>Enter password</label>
                    <input type="text" placeholder=".........." name="userid"/>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <div>
                    <p>Alread have an account <a href="#">Sign In</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register
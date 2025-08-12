import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userStore } from "../utils/UserContext";
import { cartStore } from "../utils/CartContext";

const Header = () => {
  const { user, handleLogout } = useContext(userStore);
  const {cart}=useContext(cartStore);

  const cartItems=cart.reduce((sum,p)=>sum+p.qty,0);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Chapter One
        </Link>

        <div className="flex items-center space-x-6 text-gray-700">
          {user && <span className="font-medium">Hi, {user.name}</span>}

          <Link to={user ? `/order/${user.id}` : "/login"} className="hover:text-orange-600">
            Orders
          </Link>

          <Link to={user ? `/profile/${user.id}`:"/login"} className="hover:text-orange-600">
            Profile
          </Link>

         <Link to="/cart" className="relative hover:text-orange-600">
            Cart
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartItems}
              </span>
            )}
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded
               hover:bg-red-600 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700 cursor-pointer"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

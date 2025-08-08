import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userStore } from "../utils/UserContext";

const Header = () => {
  const { user, handleLogout } = useContext(userStore);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Chapter One
        </Link>

        <div className="flex items-center space-x-6 text-gray-700">
          {user && <span className="font-medium">Hi, {user.name}</span>}

          <Link to={user ? "/order" : "/login"} className="hover:text-orange-600">
            Orders
          </Link>

          <Link to={user ? `/profile/${user.id}`:"/login"} className="hover:text-orange-600">
            Profile
          </Link>

          <Link to="/cart" className="hover:text-orange-600">
            Cart
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

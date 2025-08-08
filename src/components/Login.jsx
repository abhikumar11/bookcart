import { useContext } from "react";
import { Link } from "react-router-dom";
import { userStore } from "../utils/UserContext";

const Login = () => {
  const { handleInput, handleLogin } = useContext(userStore);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign in to your account</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInput}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="••••••••"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium transition"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center mt-4 text-sm text-gray-600">
          New user?{" "}
          <Link to="/register" className="text-orange-600 hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

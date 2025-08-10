import { useContext } from "react";
import { cartStore } from "../utils/CartContext";
import { Link } from "react-router-dom";
import cartimage from '../assets/emptycart.png';
import { checkoutStore } from "../utils/CheckoutContext";



const Cart = () => {
  const { cart, increaseQty, decreaseQty, deleteItem } = useContext(cartStore);
  const { checkOutAll } = useContext(checkoutStore);



  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
   

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {cart.length === 0 ? (
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center bg-white p-10 rounded shadow-md space-y-6 md:space-y-0 md:space-x-10">
          <div className="left-section">
            <img src={cartimage} alt="Empty Cart" width="200px" />
          </div>
          <div className="right-section text-center md:text-left space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Your Chapter One Cart is empty</h2>
            <Link to="/">
              <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6 rounded shadow-md">

          <div className="md:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Shopping Cart</h1>

            {cart.map((item, index) => (
              <div key={index} className="flex gap-6 border-b pb-6">
                <div className="w-32 h-32 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
                  <img src={item.bimage} alt={item.title} className="object-contain w-full h-full" />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div className="flex justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-700 font-medium">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <button onClick={() => decreaseQty(item)}
                      disabled={item.qty === 1} className="px-2 py-1 text-white bg-orange-600 rounded hover:bg-orange-700 cursor-pointer">-</button>
                    <input
                      type="text"
                      disabled
                      value={item.qty}
                      className="w-10 text-center border rounded"
                    />
                    <button onClick={() => increaseQty(item)} className="px-2 py-1 text-white bg-orange-600 rounded hover:bg-orange-700 cursor-pointer">+</button>
                    <button onClick={() => deleteItem(item.id)} className="ml-4 text-red-600 hover:underline cursor-pointer">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-gray-300 rounded-lg p-5 shadow-sm h-fit bg-gray-50 sticky top-24 space-y-4">
            <p className="text-xl font-bold text-gray-800">
              Subtotal ({totalItems} item{totalItems > 1 ? "s" : ""}): ₹{totalPrice}
            </p>

            <button onClick={()=> checkOutAll(cart)} className="w-full bg-orange-600 text-white py-2 rounded font-semibold hover:bg-orange-700 cursor-pointer">
              Proceed to Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

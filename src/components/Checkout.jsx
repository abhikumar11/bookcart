import React, { useContext, useEffect } from "react";
import { checkoutStore } from "../utils/CheckoutContext";

const Checkout = () => {
  const {handlePayment,payment}=useContext(checkoutStore);

  useEffect(()=>{
    handlePayment("")
  },[])
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Delivering to</p>
            <p className="text-lg font-semibold">123 Main Street, City, State, 12345</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <select
              value={payment}
              onChange={(e) => handlePayment(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
            >
              <option value="" selected>Select a payment method</option>
              <option value="Credit or Debit Card">Credit or Debit Card</option>
              <option value="Net Banking">Net Banking</option>
              <option value="UPI Apps">UPI Apps</option>
              <option value="Cash on Delivery / Pay on Delivery">
                Cash on Delivery / Pay on Delivery
              </option>
            </select>
          </div>

          {/* Items List */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Items in your order</h2>
            <div className="flex gap-4 border-b pb-4 mb-4">
              <div className="w-20 h-24 bg-gray-200 rounded-lg"></div>
              <div>
                <p className="font-semibold">Book Title</p>
                <p className="text-sm text-gray-500">Author Name</p>
                <p className="text-black font-semibold">₹500</p>
                <p className="text-sm text-black">Qty: 1</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-24 bg-gray-200 rounded-lg"></div>
              <div>
                <p className="font-semibold">Another Book</p>
                <p className="text-sm text-gray-500">Author Name</p>
                <p className="text-blue-600 font-semibold">₹300</p>
                <p className="text-sm text-gray-500">Qty: 2</p>
              </div>
            </div>
          </div>
        </div>

<div className="bg-white p-6 rounded-xl shadow-md h-fit sticky top-6">
  <h2 className="text-lg font-bold mb-4">Order Summary</h2>
  
  <div className="flex justify-between mb-2">
    <span className="text-gray-600">Items</span>
    <span className="font-medium">3</span>
  </div>
  
  <div className="flex justify-between mb-2">
    <span className="text-gray-600">Subtotal</span>
    <span className="font-medium">₹1,100</span>
  </div>
  
  <div className="flex justify-between mb-4">
    <span className="text-blue-600">{payment}</span>
  </div>

  <div className="flex justify-between text-lg font-bold border-t pt-4">
    <span>Total</span>
    <span>₹1,100</span>
  </div>
  
  <button
  disabled={payment === ""}
  className={`w-full mt-6 font-semibold py-3 rounded-lg transition 
    ${payment === "" 
      ? "bg-gray-400 text-white cursor-not-allowed" 
      : "bg-orange-600 text-white hover:bg-orange-700"}`}
>
  Place Order
</button>
</div>

      </div>
    </div>
  );
};

export default Checkout;

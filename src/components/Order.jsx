import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { orderStore } from '../utils/OrderContext';

const Order = () => {
  const { id } = useParams();
  const { fetchOrder, orders } = useContext(orderStore);

  useEffect(() => {
    fetchOrder(id);
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Orders</h1>

      {!orders || orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        orders.map(order => {
          const total=order.items.reduce((sum,item)=>sum+item.price*item.qty,0);
          const totalitem=order.items.reduce((sum,p)=>sum+p.qty,0);
          return (
            <div
              key={order.id}
              className="mb-8 border rounded-md p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Order ID:</span> {order.id}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold">Payment Type:</span> {order.paymenttype}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Order Date:</span>{' '}
                    {new Date(order.orderdate).toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-blue-600">Item(s): {totalitem}</p>
                  <p className="font-semibold text-orange-600">Total: ₹{total}</p>
                </div>
              
              </div>

              {order.items && order.items.length > 0 ? (
                <ul className="space-y-4">
                  {order.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center border rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.bimage}
                          alt={`Book ${item.bookid}`}
                          className="w-16 h-20 object-cover rounded"
                        />
                        <div>
                          <p className="font-semibold text-black">
                            {item.title || `Book ID: ${item.bookid}`}
                          </p>
                          <p className="font-medium text-black">Quantity: {item.qty}</p>
                          <p className="font-medium text-black">
                            Subtotal: ₹{item.price * item.qty}
                          </p>
                        </div>
                      </div>
                      <div className="font-medium">₹{item.price}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No items found in this order.</p>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Order;

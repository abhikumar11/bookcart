import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { bookStore } from "../utils/BookContext";
import { userStore } from "../utils/UserContext";
import { ClipLoader } from "react-spinners";
import { cartStore } from "../utils/CartContext";
import { checkoutStore } from "../utils/CheckoutContext";

const BookDetails = () => {
  const { id } = useParams();

  const { singleBook, fetchBookById } = useContext(bookStore);
  const {addToCart}=useContext(cartStore);
  const {buySingle}=useContext(checkoutStore);
  const {user}=useContext(userStore)

  const [qty,setQty]=useState(1);
  const product={item:singleBook,qty:parseInt(qty)}
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookById(id);
  }, [id]);

  const handleBuyNow = () => {
      buySingle(product);
    if (user) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  if (!singleBook) {
    return <ClipLoader />;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6 rounded shadow-md">


        <div className="flex justify-center items-start">
          <img
            src={singleBook?.bimage || ""}
            alt={singleBook?.title}
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>


        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{singleBook?.title}</h1>
          <p className="text-sm text-gray-600">by {singleBook?.author}</p>
          <div className="text-gray-700">
            <p className="font-semibold">About this book:</p>
            <p>{singleBook?.description}</p>
          </div>
          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-medium">Pages:</span> {singleBook?.plength}</p>
            <p><span className="font-medium">Publisher:</span> {singleBook?.publisher}</p>
          </div>
        </div>


        <div className="border border-gray-300 rounded-lg p-5 shadow-sm sticky top-24 h-fit bg-gray-50">
          <p className="text-xl font-bold text-black-700 mb-2">₹{singleBook?.price}</p>
          <p className={`text-sm mb-4 font-medium ${singleBook?.instock > 0 ? "text-green-600" : "text-red-600"}`}>
            {singleBook?.instock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <div className="mb-4">
            <p className="block text-sm text-blue-600 mb-1">Deliver to {user?user.name:"Please login"} - Bhopal 462030‌</p>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm text-gray-600 mb-1">Quantity</label>
            <select onChange={(e)=>setQty(e.target.value)}
              id="quantity"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            >
              {[...Array(Math.min(singleBook?.instock || 0, 10)).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-3">
            <button onClick={()=>addToCart(product)}
              disabled={singleBook?.instock === 0}
             style={{
                backgroundColor: singleBook?.instock > 0 ? "#27548A" : "#D1D5DB",
                color: singleBook?.instock > 0 ? "#fff" : "#6B7280"
              }}
              className={`w-full py-2 rounded font-semibold transition ${singleBook?.instock > 0 ? "hover:opacity-90 cursor-pointer" : "cursor-not-allowed"
                }`}
            >
              Add to Cart
            </button>
           <button onClick={handleBuyNow}
              disabled={singleBook?.instock === 0}
              style={{
                backgroundColor: singleBook?.instock > 0 ? "#ea580c" : "#D1D5DB",
                color: singleBook?.instock > 0 ? "#fff" : "#6B7280"
              }}
              className={`w-full py-2 rounded font-semibold transition ${singleBook?.instock > 0 ? "hover:opacity-90 cursor-pointer" : "cursor-not-allowed"
                }`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

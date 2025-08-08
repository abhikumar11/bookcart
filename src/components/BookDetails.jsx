import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bookStore } from "../utils/BookContext";
import { ClipLoader } from "react-spinners";

const BookDetails = () => {
  const { id } = useParams();
  const { singleBook, fetchBookById } = useContext(bookStore);

  useEffect(() => {
    fetchBookById(id);
  }, [id]);

  if (!singleBook) {
    return <ClipLoader />;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white p-6 rounded shadow-md">


        <div className="flex justify-center items-start">
          <img
            src={singleBook?.bimage || "/placeholder.jpg"}
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
          <p className="text-xl font-semibold text-blue-700 mb-2">₹{singleBook?.price}</p>
          <p className={`text-sm mb-4 font-medium ${singleBook?.instock > 0 ? "text-green-600" : "text-red-600"}`}>
            {singleBook?.instock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm text-gray-600 mb-1">Delivery Address</label>
            <input
              type="text"
              id="address"
              placeholder="e.g. Delhi, India"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm text-gray-600 mb-1">Quantity</label>
            <select
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
            <button
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
            <button
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

import React, { useContext, useEffect } from "react";
import BookCard from "./BookCard";
import { bookStore } from "../utils/BookContext";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const { loading, fetchBook, book } = useContext(bookStore);

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Books For You</h1>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <ClipLoader color="#36d7b7" size={50} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {book?.map((item) => (
              <BookCard key={item.id} book={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

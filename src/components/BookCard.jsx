import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col justify-between">
      <Link to={`/bookdetail/${book.id}`}>
        <img
          src={book.bimage}
          alt={book.title}
          className="h-48 w-full object-contain mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-1">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
      
      </Link>
    </div>
  );
};

export default BookCard;

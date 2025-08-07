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
          <div>
               <h1>Home Page</h1>
               {loading ? (
                    <ClipLoader color="#36d7b7" size={50} />
               ) : (
                    <BookCard book={book} />
               )}
          </div>
     );
};

export default Home;

import React from "react";
import BookCard from "./BookCard";

const BookList = () => {
     const bookList = [
          {
               id: 1001,
               title: "Dopamine Detox",
               author: "Thibaut Meurisse",
               price: 195,
               image: "https://lnk.ink/o3kiw",
          },
          {
               id: 1002,
               title: "Do It Today",
               author: " Darius Forous",
               price: 168,
               image: "https://lnk.ink/Tb2ZJ",
          },
          {
               id: 1003,
               title: "The Art of Being Alone",
               author: " Renuka Gavrani",
               price: 184,
               image: "https://lnk.ink/QaDdQ",
          },
          {
               id: 1004,
               title: "Never Split the Difference",
               author: "Chris Voss",
               price: 428,
               image: "https://lnk.ink/PRUcO",
          },
     ];
     return (
        <div>
            <h2>Book List</h2>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
               {bookList.map((item) => (
                    <BookCard key={item.id} book={item} />
               ))}
          </div>
          </div>
     );
};

export default BookList;

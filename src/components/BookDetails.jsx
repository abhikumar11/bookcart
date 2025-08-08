import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { bookStore } from "../utils/BookContext";

const BookDetails = () => {
  const { id } = useParams();
  const {fetchBook, book } = useContext(bookStore);

  useEffect(() => {
    fetchBook(id);
  }, []);
  console.log(book);
  return (
    <div>
      <div className="left-section">
        <img src={book.bimage} alt="image" />
      </div>
      <div className="middle-section">
        <div className="mid-top-section">
          <p>{book.title}</p>
          <p>by {book.author}</p>
        </div>
        <div className="mid-center-section">
          <p>{book.description}</p>
        </div>
        <div className="mid-bottom-section">
          <div className="page-length">
            <p>{book.plength}</p>
          </div>
          <div className="publisher">
            <p>{book.publisher}</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="right-top">
          <p>&#8377;{book.price}</p>
          <p style={{ color: book.instock > 0 ? "green" : "red" }}>{book.instock > 0 ? "In stock" : "Sold Out"}</p>
        </div>
        <div className="right-center">
          <p>address</p>
          <p>quantity</p>
        </div>
        <div className="right-bottom">
          <button style={{ backgroundColor: "lightblue" }} disabled={book.instock == 0}>Add to cart</button>
          <button style={{ backgroundColor: "lightblue" }} disabled={book.instock == 0}>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
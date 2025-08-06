import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const bookStore = createContext();

const BookProvider = ({ children }) => {

    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchBook = () => {
        try {
            axios.get("http://localhost:3000/books")
                .then((res) => {
                    setBook(res.data);
                    setLoading(false);
                }
                )
                .catch(() => toast.error("Something went wrong"))
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <bookStore.Provider value={{ loading, fetchBook, book }}>
            {children}
        </bookStore.Provider>
    )
}
export default BookProvider;
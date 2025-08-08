import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const bookStore = createContext();

const BookProvider = ({ children }) => {

    const [book, setBook] = useState([]);
    const [singleBook,setSingleBook]=useState({});
    const [loading, setLoading] = useState(true);

    const fetchBook = async() => {
        try {
            const {data}=await axios.get("http://localhost:3000/books");
            if(data){
                setBook(data);
                setLoading(false);
            }
            else{
                toast.error("unable to load data");
            }
        } catch (err) {
            console.log(err);
        }
    }
    const fetchBookById = async(id) => {
           
        try {
            const {data}=await axios.get(`http://localhost:3000/books/${id}`);
            if(data){
                setSingleBook(data);
                setLoading(false);
            }
            else{
                toast.error("unable to load data");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <bookStore.Provider value={{loading, fetchBook, book,singleBook,fetchBookById }}>
            {children}
        </bookStore.Provider>
    )
}
export default BookProvider;
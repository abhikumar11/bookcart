import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const Cart = () => {
    const { bookcart, increaseQuantity, decreaseQuantity, removeBook } =
        useContext(CartContext);
    return (
        <div>
            <h2>Cart</h2>
            {bookcart.length == 0 ? (
                <h3>Your Cart is Empty</h3>
            ) : (
                bookcart.map((item) => (
                    <div
                        key={item.book.id}
                        style={{
                            border: "2px solid black",
                            margin: "10px",
                            padding: "10px",
                        }}
                    >
                        <p>Title: {item.book.title}</p>
                        <p>Author: {item.book.author}</p>
                        <p>Price: &#8377;{item.book.price}</p>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                gap: "10px",
                            }}
                        >
                            <button
                                onClick={() =>
                                    decreaseQuantity(item.book.id)
                                }
                                style={{
                                    width: "35px",
      height: "35px",
      borderRadius: "50%",
      fontSize: "18px",
      fontWeight: "bold",
      cursor: "pointer",
      border: "1px solid black",
      backgroundColor: "#f0f0f0",
                                }}
                            >
                                −
                            </button>

                            <input
                                type="text"
                                value={item.quantity}
                                readOnly
                                style={{
                                    width: "30px",
                                    textAlign: "center",
                                    fontSize: "16px",
                                }}
                            />

                            <button
                                onClick={() =>
                                    increaseQuantity(item.book.id)
                                }
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    border: "1px solid black",
                                    backgroundColor: "#f0f0f0",
                                }}
                            >
                                +
                            </button>

                            <button
                                onClick={() => removeBook(item.book.id)}
                                style={{
                                    padding: "5px 10px",
                                    fontSize: "16px",
                                    color: "blue",
                                    background: "none",
                                    border: "1px solid blue",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
            <div
                style={{
                    borderTop: "2px solid gray",
                    marginTop: "20px",
                    paddingTop: "10px",
                    textAlign: "right",
                }}
            >
                <h3>
                    Subtotal: ₹
                    {Number.parseFloat(
                        bookcart.reduce(
                            (sum, next) =>
                                sum + next.book.price * next.quantity,
                            0
                        )
                    )}
                </h3>
            </div>
        </div>
    );
};

export default Cart;

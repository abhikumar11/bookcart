import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";

const Header = () => {
     const { bookcart } = useContext(CartContext);
     return (
          <div
               style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "60px",
                    backgroundColor: "#023e8a",
                    color: "whitesmoke",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "0 20px",
                    boxSizing: "border-box",
                    zIndex: 1,
               }}
          >
               <p style={{ margin: 0 }}>Cart: {bookcart.length}</p>
          </div>
     );
};

export default Header;

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "./Logo.png";
import "./Header.css";

const Header = () => {
 
    const history = useHistory();
    const [keyword, setKeyword] = useState("");
    const { cartItems } = useSelector((state) => state.cart);
    const { isAuthenticated, user } = useSelector((state) => state.user);

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        history.push(`/products/${keyword}`);
    };


    return (
        <div className="header" >
            <div className="navigation" style={{ padding: "100px 0px 0px 0px" }}>
                <div className="nav">
                    <div className="navMenu">

                        <Link to="/" className="link">
                            <li>Home</li>
                        </Link>
                        <Link to="/products" className="link">
                            <li>Products</li>
                        </Link>
                        <Link to="/user" className="link">
                            <li>User</li>
                        </Link>
                        <Link to="/contact" className="link">
                            <li>Contact</li>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="quickLinks">
                <div className="logo" style={{ top: "-15%" }}>
                    <Link to="/">
                        <img src={logo}
                            style={{ height:"150px", right: "46%", top: "0.5%", position: "absolute" }} />
                    </Link>
                </div>

                <div className="search" style={{ padding: "0px 10px" }}>
                    <form className="searchBar" onSubmit={searchSubmitHandler} >
                        <input  style={{backgroundColor:"#4c627d"}}
                            type="text"
                            placeholder="Products search"
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="white"
                            className="bi bi-search pointer"
                            viewBox="0 0 16 16"
                            style={{ right: "8%", position: "absolute", paddingTop: "5px" }}>
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </form>
                </div>

                <div className="cart" style={{ padding: "10px" }}>
                    <div>
                        <Link to="/cart" style={{ color: "white" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </Link>
                        <div className="cart_number" style={{
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                            backgroundColor: "white",
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: "15%",
                            right: "3.9%"
                        }}>
                            <span>{cartItems.length}</span>
                        </div>
                    </div>
                </div>

                <div className="login" style={{ padding: "10px 10px" }}>
                    <Link to="/login" style={{ color: "white" }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            class="bi bi-person pxz__20 black"
                            viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                    </Link>
                </div>
            </div>


        </div>

    );
};

export default Header;
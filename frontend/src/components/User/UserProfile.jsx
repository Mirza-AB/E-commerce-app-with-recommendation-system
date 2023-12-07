import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import Footer from "../../Footer/Footer";
import Header from "../Home/Header";
import { logout } from "../../actions/UserAction";
import 'react-toastify/dist/ReactToastify.css';
import "./UserProfile.css";

//this components displays the user details if they are logged in otherwise asks to login first
const Profile = ({ history }) => {

    const { user, isAuthenticated } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (!isAuthenticated && !localUser) {
            alert("Please Login")
            history.push("/login");
        } else if (localUser) {
            dispatch({ type: "USER_LOADED", payload: localUser });
        }
    }, [dispatch, history, isAuthenticated, user]);

    function logoutUser() {
        dispatch(logout());
        localStorage.removeItem("user");
    }

    return (
        <>
            <Helmet>
                <title>User Details</title>
            </Helmet>
            <Header />
            <div>
                <div className="detailContainer">
                    <div className="accHeader">
                        <h1>Your Account</h1>
                    </div>
                </div>
                <div className="userInfoContainer">
                    <div>
                        <div className="userInfo">
                            <h4 style={{ padding: "0px 5px" }}>Account Holder Name: </h4>
                            <p style={{ padding: "5px" }} >{user.name}</p>
                        </div>
                        <div className="userInfo">
                            <h4 style={{ padding: "0px 5px" }}>Registered Email:</h4>
                            <p style={{ padding: "5px" }} >{user.email}</p>
                        </div>
                        <div className="logOut">
                            <Link onClick={logoutUser} className="logoutLink">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile
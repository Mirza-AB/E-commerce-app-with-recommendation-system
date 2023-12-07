import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { clearErrors, signUp } from "../../actions/UserAction";
import Header from "../Home/Header";
import "./login.css";

const SignUp = () => {
    const dispatch = useDispatch();  
    const history = useHistory();

    const { error, isAuthenticated } = useSelector(
        (state) => state.user
    ); 

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;

    const onSignUp = (e) => {
        e.preventDefault();
      
        if (!name || !email || !password) {
          alert("Please provide all required fields");
          return;
        }
      
        const myForm = new FormData();
      
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
      
        dispatch(signUp(myForm));
      };
      
      
    
    const registerDataChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

     
    useEffect(() => {
        if (error) {
          alert(error);
          dispatch(clearErrors());
        }
    
        if (isAuthenticated) {
          history.push("/");
          alert("successfully signed up")
        }
      }, [dispatch, error, history, isAuthenticated]);
    
    return (
        <>
        <Header />
        <Helmet>
            <title>SignUp</title>
        </Helmet>
        <div className="ls">
            <div className="lscontainer">
                <div>
                    <div className="LoginSignUp">
                        SignUp
                    </div>
                </div>

                <form className="lsForm" onSubmit={onSignUp}>
                    <div className="name">
                            <input type="text" placeholder="name" required name="name"
                            value={name}
                            onChange={registerDataChange}
                            />
                    </div>
                    <div className="email">
                            <input type="email" placeholder="email" required name="email"
                            value={email}
                            onChange={registerDataChange}
                            />
                    </div>
                    <div className="pass">
                            <input type="password" placeholder="password" required name="password"
                            value={password}
                            onChange={registerDataChange}
                            />
                    </div>
                    <input type="submit" value="SignUp" className="button" />
                    <Link className="sllink" to="/login">Login</Link>
                </form>

            </div>
        </div>
        </>
    )
}

export default SignUp;
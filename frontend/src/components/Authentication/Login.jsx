import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { clearErrors, postLogin } from "../../actions/UserAction";
import Header from "../Home/Header";
import "./login.css";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { error, isAuthenticated } = useSelector(
        (state) => state.user
    );
    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
 
 
    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(postLogin(email, password));
      };  

    useEffect(() => {
        if (error) {
          dispatch(clearErrors());
          alert(error);
        }
    
        if (isAuthenticated) {
          history.push("/");  
          alert("Login sccessful")
         }
      }, [dispatch, error, history, isAuthenticated]);


    return (
        <>
            <Header />
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="ls">
                <div className="lscontainer">
                    <div>
                        <div className="LoginSignUp">
                            Login
                        </div>
                    </div>

                    <form className="lsForm" onSubmit={loginSubmit}>
                        <div className="email">
                            <input type="email" placeholder="Email" required
                            value={email}
                            onChange={(e) => setemail(e.target.value)} 
                            />
                        </div>
                        <div className="pass">
                            <input
                                type="password"
                                placeholder="Password"
                                required
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <input type="submit" value="Login" className="button" />
                        <Link className="sllink" to="/signUp">SignUp</Link>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login;
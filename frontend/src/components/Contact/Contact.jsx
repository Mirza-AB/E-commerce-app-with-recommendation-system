import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Home/Header";
import "./Contact.css";

const Contact = () => {


    return (
        <>
            <Header />
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className="contactBox">
                <div className="contactContainer">
                    <div>
                        <div className="contactUs">
                            Contact US
                        </div>
                    </div>

                    <div>
                    <div style={{paddingBottom:"10px"}}>
                        <label style={{ fontWeight: "700",paddingLeft:"5px" }}>Contact Number: </label>
                        +44 (0)20 8223 4444
                    </div>
                    <div style={{placeItems: "center"}}>
                        <label style={{ fontWeight: "700",paddingLeft:"5px" }}>Email: </label>
                        u2095492@uel.ac.uk
                    </div>

                    <div style={{paddingLeft:"7px", paddingTop:"30px"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9933.678762581612!2d0.042772878076172006!3d51.50551586726294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a89bd79632e9%3A0xd2a1ee734c6226d0!2sUniversity%20of%20East%20London!5e0!3m2!1sen!2suk!4v1617547043818!5m2!1sen!2suk" width="750" height="300"  ></iframe> 

                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Contact;
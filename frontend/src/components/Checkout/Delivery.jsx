import React, { useState } from "react";
import "./Delivery.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/CartActions";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Home/Header";
import { Helmet } from "react-helmet";

const Shipping = ({ history }) => {
  const dispatch = useDispatch();

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [postCode, setPostCode] = useState(shippingInfo.postCode);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  let totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let cartProduct = cartItems.reduce(
    (acc, item) => acc + item.name,
    0
  );
 


  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length !== 10) {
      alert("Enter a valid phone number")
      return;
    }

    const data = {
      totalPrice,
      cartProduct
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    dispatch(saveShippingInfo({ address, postCode, state, country, phoneNo }));

    history.push("/payment");
  };

  return (
    <>

      <Header />
      <Helmet>
        <title>Checkout</title>
      </Helmet>


      <div className="delivery">
        <div className="checkoutContainer">
          <p className="formTitle">Delivery Address</p>

          <form className="detailForm" encType="multipart/form-data" onSubmit={shippingSubmit}>


            <label style={{ fontWeight: "600" }}>Mobile Number</label>
            <div className="deliveryFields">

              <input className="deliveryContent" type="tel" placeholder="Mobile Number" required maxLength="10" pattern="[0-9]*" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
            </div>
            <label style={{ fontWeight: "600" }}>Address</label>
            <div className="deliveryFields">
              <input className="deliveryContent" type="text" placeholder="Address" required value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <label style={{ fontWeight: "600" }}>Post Code</label>
            <div className="deliveryFields">
              <input className="deliveryContent" type="text" placeholder="Post Code" required value={postCode} onChange={(e) => setPostCode(e.target.value)} />
            </div>

            <label style={{ fontWeight: "600" }}>Country</label>
            <div className="deliveryFields">
              <select className="deliveryContent" required value={country} onChange={(e) => setCountry(e.target.value)}>
                <option>Country</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <label style={{ fontWeight: "600" }}>City</label>
            <div className="deliveryFields">
              <select className="deliveryContent" required value={state} onChange={(e) => setState(e.target.value)}>
                <option>City</option>
                <option>London</option>
                <option>Manchester</option>
                <option>Birmingham</option>
                <option>Glasgow</option>
              </select>
            </div>


            <input type="submit" value="Continue" className="submitBtn" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Shipping;
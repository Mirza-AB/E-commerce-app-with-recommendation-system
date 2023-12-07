import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Payment.css"; 
import Header from "../Home/Header";
import { Helmet } from "react-helmet";


const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
   
  const order = {
    user: user._id,
    shippingInfo,
    orderItems: cartItems, 
    totalPrice: orderInfo.totalPrice,
    paymentInfo: {
      cardNumber,
      expiryDate,
      cvvNumber
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    alert("Payment successful");
    history.push("/") 
    
  };
 
  return (
    <>
      <Header />
      <Helmet>
        <title>Payment</title>
      </Helmet>

      <div className="payment">
        <div className="paymentContainer">
          <p className="paymentTitle">Payment Details</p>
          <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>

            <label style={{ fontWeight: "600" }}>Card Number</label>
            <div className="paymentFields">
              <input className="paymentContent" type="text" placeholder="Card Number" required maxLength="12" pattern="[0-9]*" onChange={(e) => setCardNumber(e.target.value)} />
            </div>

            <label style={{ fontWeight: "600" }}>Expiry Date</label>
            <div className="paymentFields">
              <input className="paymentContent" type="text" placeholder="MM/YYYY" required maxLength="7" onChange={(e) => setExpiryDate(e.target.value)}/>
            </div>

            <label style={{ fontWeight: "600" }}>CVV Number</label>
            <div className="paymentFields">
              <input className="paymentContent" type="password" placeholder="CVV Number" required maxLength="3" onChange={(e) => setCvvNumber(e.target.value)}/>
            </div>

            <input
              type="submit"
              value={`Pay  £${orderInfo && orderInfo.totalPrice}`}

              className="paymentBtn"
            />
          </form>
        </div>
      </div>

    </>
  );
};

export default Payment;

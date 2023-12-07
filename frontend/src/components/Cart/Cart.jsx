import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeItemsFromCart } from "../../actions/CartActions";
import Header from "../Home/Header";
import CartViewer from "./CartViewer.js";
import { Helmet } from "react-helmet";

const Cart = ({ history }) => {
  const dispatch = useDispatch();

  const { cartItems, isAuthenticated } = useSelector((state) => state.cart);

  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let totalPrice = Price;

  const increaseQuantity = (id, quantity, stock) => {
    const qty = quantity + 1;
    if (stock <= quantity) {
      return alert("Product Stock Limited");
    }
    dispatch(addToCart(id, qty));
  };

  const decreaseQuantity = (id, quantity) => {
    const qty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addToCart(id, qty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (!isAuthenticated && !localUser) {
      alert("Please login before checkout")
      history.push("/login")
    }
    else if (localUser) {
      history.push("/shipping");
    }

  };



  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <Header />
      {cartItems.length === 0 ? (
        <div className="NoItems">
          <h3>No Products In Basket</h3>
          <p>Try adding few products</p>
        </div>
      ) : (
        <>
          <div>
            <div>
              <h2 style={{ textAlign: "center" }}>Shopping Basket</h2>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.productId}>
                  <CartViewer item={item} deleteCartItems={deleteCartItems} />
                  <div className="qnty">
                    <button onClick={() => decreaseQuantity(item.productId, item.quantity)}> - </button>
                    <input type="reset" readOnly value={item.quantity} />
                    <button onClick={() => increaseQuantity(item.productId, item.quantity, item.stock)}> + </button>
                  </div>
                  <p className="itemTotal" style={{ paddingTop: "100px" }}>Item Total: {`£${item.price * item.quantity}`}</p>
                </div>
              ))}

            <div>
              <div className="subTotal">
                <h3 style={{ paddingLeft: "380px" }}>Subtotal</h3>
                <h3 style={{ paddingRight: "380px" }}>£{totalPrice}</h3>
              </div>
              <div className="checkout" style={{ paddingRight: "380px" }}>
                <button onClick={checkoutHandler} >Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
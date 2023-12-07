import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clearErrors, getItemInfo, getRecommendItem } from "../../actions/ProductActions";
import Header from "../Home/Header";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import "./SinglePDetails.css";
import Footer from "../../Footer/Footer";
import { addToCart } from "../../actions/CartActions";

//component that displays the particular product selected along with the recommendation list
const SinglePDetails = ({ match }) => {
  const { product, error } = useSelector(
    (state) => state.itemDetails
  );
  const { suggestions } = useSelector((state) => state.recommendations);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    dispatch(getItemInfo(match.params.id));
    dispatch(getRecommendItem(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity >= product.Quantity) return alert("Sorry we have no more stock left ):");
    const quant = quantity + 1;
    setQuantity(quant);
  };

  const decrease = () => {
    if (1 >= quantity) return;
    const quant = quantity - 1;
    setQuantity(quant);
  };

  const cartHandler = () => {
    if (product.Quantity > 0) {
      dispatch(addToCart(match.params.id, quantity));
      alert("Product is added to cart");
    } else {
      alert("Product stock limited");
    }
  };


  return (
    <>
      <Helmet>
        <title>Product | View</title>
      </Helmet>

      <Header />
      <div className="itemDetails" style={{ backgroundColor: "#E8EFF1" }}>
        <div style={{ margin: "auto" }}>
          <img src={product.product_image} alt="product" style={{ width: "350px", height: "350px" }} />
        </div>

        <div className="itemInfo">
          <div className="name">
            <h2>{product.product_name}</h2>
          </div>

          <div>
            <div style={{ display: "flex" }} >
              <h1>{`£${product.retail_price}`}</h1>
            </div>
            <div style={{ display: "flex" }} >
              <p>{product.description}</p>
            </div>

            <div className="quantity">
              <span className="quantity">Quantity</span>
              <div className="quantityHandle">
                <button onClick={decrease}>-</button>
                <input type="reset" readOnly value={quantity} />
                <button onClick={increase}>+</button>
              </div>{" "}
            </div>

            <p style={{ paddingBottom: ".5vmax" }}>
              {product.Quantity < 1 ? "OutOfStock" : "InStock"}
            </p>

            <div style={{ display: "flex", alignItems: "center" }} >

              <div style={{ padding: "10px 5px", alignItems: "center", backgroundColor: "#E4EAEC" }} onClick={cartHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                </svg>
                <button className="addCartButton">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Recommendations</h2>
        <div className="Recommendations">
          {suggestions.map((suggestion) => (
            <Link style={{ color: 'black', textDecoration: 'none' }} key={suggestion._id} to={`/product/${suggestion._id}`}>
              <div>
                <img className="recImages" src={suggestion.product_image} alt="product" />
                <p style={{ fontWeight: "550", color: "black" }}>{suggestion.product_name}</p>
                <p style={{ color: "black" }}>{`£${suggestion.retail_price}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default SinglePDetails;
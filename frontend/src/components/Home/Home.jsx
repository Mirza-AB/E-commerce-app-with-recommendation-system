import React, { useEffect } from "react";
import "./Home.css";
import Header from '../Home/Header';
import Carousel from "react-material-ui-carousel";
import L2 from "./L2.jpeg";
import U1 from "./U1.jpg"
import U2 from "./U2.jpeg"
import L1 from "./L1.png"
import D1 from "./D1.png"
import D2 from "./D2.jpg"
import ProductViewer from "../Product/ProductViewer";
import { useDispatch, useSelector } from "react-redux"
import { clearErrors, getProduct } from "../../actions/ProductActions";
import { toast } from 'react-toastify';
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  const dispatch = useDispatch();
  const { products, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error])


  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Header />

      <div className="displayContainer">
        <div className="bgLeftContainer" style={{ width: "50%" }}>
          <div>
            <Carousel indicators={false}>
              <img src={L1} alt="display" className="displayImg" />
              <img src={L2} alt="display" className="displayImg" />
            </Carousel>

          </div>

        </div>
        <div className="displayRightContainer">
          <div >
            <Carousel indicators={false}>
              <img alt="display" src={D1} className="displayImg2" />
              <img alt="display" src={D2} className="displayImg2" />
            </Carousel>
          </div>
          <div>
            <Carousel indicators={false}>
              <img alt="display" src={U1} className="displayImg2" />
              <img alt="display" src={U2} className="displayImg2" />
            </Carousel>

          </div>
        </div>
      </div>

      <h2 className="homeHeading" style={{ textAlign: "center" }}>Top Picks</h2>
      <div className="container" style={{ padding: "0px 0px 10px" }} id="container">
        {products && products.map((product) => (
          <ProductViewer key={product._id} product={product} />
        ))}

      </div>
      <Footer />
    </>
  );
};

export default Home;
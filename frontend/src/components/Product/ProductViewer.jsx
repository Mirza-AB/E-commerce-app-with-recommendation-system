import React from "react";
import { Link } from "react-router-dom";

//component that displays the details of the products after fetching from the backend database
const ProductViewer = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <div style={{ width: "33%", height: "500px", float: "left", alignContent: "center", backgroundColor: "#E8EFF1" }}>
          <img style={{ height: "290px", width: "290px", padding: "70px 0px 0px 80px" }} src={product.product_image} alt="item_Image" className="ProductImg" />


          <div style={{ fontWeight: "550", paddingLeft: "80px", color: "black" }}> {product.product_name} </div>

          <div style={{ padding: "25px 5px" }}>
            <div style={{ fontWeight: "550", paddingLeft: "80px", color: "black" }}> {`£${product.retail_price}`} </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductViewer;
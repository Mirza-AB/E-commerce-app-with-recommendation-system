import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../Home/Header";
import { useSelector, useDispatch } from "react-redux";
import ProductViewer from "./ProductViewer";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Pagination from "react-js-pagination";
import "./Product.css";
import { Helmet } from "react-helmet";

//component that displays the products list
const Products = ({ match }) => {
    const dispatch = useDispatch();

    const [currentPage, setPage] = useState(1);
    const {
        products,
        error,
        productsCount,
        resultPerPage,
    } = useSelector((state) => state.products);

    const query = match.params.keyword;
    const setOnPage = (e) => {
        setPage(e);
    };

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors())
        }
        dispatch(getProduct(query, currentPage));
    }, [dispatch, query, currentPage, alert, error]);

    return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>

            <Header />
            <div>
                <div style={{ display: "flex", flex: 1 }}>
                    <div className="products">
                        {products &&
                            products.map((product) => (
                                <ProductViewer key={product._id} product={product} />
                            ))}
                    </div>
                </div> 

                <div style={{ display: "flex", justifyContent: "center",alignItems: "center" }}>
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCount}
                        onChange={setOnPage}
                        itemClass="pagecontent"
                        linkClass="pageConnect"
                        activeClass="currentPage"/>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;
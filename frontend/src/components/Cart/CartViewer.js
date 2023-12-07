import React from 'react';
import { Link } from 'react-router-dom';
import "./CartViewer.css";

const CartItemCard = ({ item, deleteCartItems }) => {
    return (
        <div className='CartContainer'>
            <img className='cartImg' src={item.image} alt="product" />
            <div className='cartData'>
                <p><Link style={{ color: "black" }} to={`/product/${item.productId}`}>{item.name}</Link></p>
                <p className="stock" style={{ paddingBottom: ".5vmax" }}>
                    {item.stock < 1 ? "OutOfStock" : "InStock"}
                </p>
                <span style={{ paddingRight: "5px", borderRight: "2px solid #99999942" }}>{`Price: £${item.price}`}</span>
                <button onClick={() => deleteCartItems(item.productId)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItemCard

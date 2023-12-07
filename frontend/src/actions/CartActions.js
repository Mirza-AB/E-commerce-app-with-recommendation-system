import axios from "axios";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";

  const { data } = await axios.get(`http://localhost:3500/product/${id}`);

  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: {
      productId: data.product._id,
      name: data.product.product_name,
      price: data.product.retail_price,
      image: data.product.product_image,
      stock: data.product.Quantity,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART ---Product
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";

  dispatch({
    type: DELETE_ITEM_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


// SAVE SHIPPING INFO 
export const saveShippingInfo = (data) => async (dispatch) => {
  const SAVE_DELIVERY_DATA = "SAVE_DELIVERY_DATA";

  dispatch({
    type: SAVE_DELIVERY_DATA,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
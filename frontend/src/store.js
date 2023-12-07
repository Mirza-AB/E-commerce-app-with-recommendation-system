import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, productViewerReducer } from "./reducers/ProductReducer";
import { userReducer } from "./reducers/UserReducer";
import { cartReducer } from "./reducers/CartReducer"; 
import { recommendationsReducer } from "./reducers/RecommendationReducer";

//managing all the states so that it can be used as required 
const reducer = combineReducers({
    products: productsReducer,
    itemDetails: productViewerReducer,
    user: userReducer,
    cart: cartReducer,
    recommendations: recommendationsReducer,
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],

        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
    user: {
        user: localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : [],
    }

};

const middleWare = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
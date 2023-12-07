//reducer for handling the cart

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
    const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
    const SAVE_DELIVERY_DATA = "SAVE_DELIVERY_DATA";

    switch (action.type) {
        case ADD_ITEM_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find(
                (i) => i.productId === item.productId
            );

            if (isItemExist) {
                return {
                    ...state, cartItems: state.cartItems.map((i) =>
                        i.productId === isItemExist.productId ? item : i
                    ),
                };
            } else {
                return {
                    ...state, cartItems: [...state.cartItems, item],
                };
            }

        case DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.productId !== action.payload),
            };

        case SAVE_DELIVERY_DATA:
            return { ...state, shippingInfo: action.payload };
        default:
            return state;

    }
};


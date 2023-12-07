//reducer for handling the products

export const productsReducer = (state = { products: [] }, action) => {
    const ITEM_FETCHING = "ITEM_FETCHING";
    const ITEM_SUCCESS = "ITEM_SUCCESS";
    const ITEM_FAIL = "ITEM_FAIL";
    const CLEAR_ERRORS = "CLEAR_ERRORS";

    switch (action.type) {
        case ITEM_FETCHING:
            return { loading: true, products: [] };

        case ITEM_SUCCESS:
            return {
                loading: false, 
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
            };

        case ITEM_FAIL:
            return { loading: false, error: action.payload };

        case CLEAR_ERRORS:
            return { state, error: null };

        default:
            return state;
    }
};

export const productViewerReducer = (state = { product: {} }, action) => {
    const ITEM_VIEW_FETCHING = "ITEM_VIEW_FETCHING";
    const ITEM_VIEW_SUCCESS = "ITEM_VIEW_SUCCESS";
    const ITEM_VIEW_FAIL = "ITEM_VIEW_FAIL";
    const CLEAR_ERRORS = "CLEAR_ERRORS";

    switch (action.type) {
        case ITEM_VIEW_FETCHING:
            return { loading: true, ...state };

        case ITEM_VIEW_SUCCESS:
            return { loading: false, product: action.payload };

        case ITEM_VIEW_FAIL:
            return { loading: false, error: action.payload };

        case CLEAR_ERRORS:
            return { ...state, error: null };

        default:
            return state;
    }
};
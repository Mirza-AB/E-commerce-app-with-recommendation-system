import axios from "axios";

export const getProduct = (keyword=" ",currentPage=1) => async (dispatch) => {
    const ITEM_FETCHING = "ITEM_FETCHING";
    const ITEM_SUCCESS = "ITEM_SUCCESS";
    const ITEM_FAIL = "ITEM_FAIL";

    try {
        dispatch({ type: ITEM_FETCHING });

        let link = `http://localhost:3500/products?page=${currentPage}&keyword=${keyword}`;

         
        const { data } = await axios.get(link);

        dispatch({ type: ITEM_SUCCESS, payload: data })
    } catch (error) {
        console.error(error);

        dispatch({ type: ITEM_FAIL, payload: error.response.data.message })
    }
};

// Get All Products Details
export const getItemInfo = (id) => async (dispatch) => {
    const ITEM_VIEW_FETCHING = "ITEM_VIEW_FETCHING";
    const ITEM_VIEW_SUCCESS = "ITEM_VIEW_SUCCESS";
    const ITEM_VIEW_FAIL = "ITEM_VIEW_FAIL";
     
    try {
        dispatch({ type: ITEM_VIEW_FETCHING });
        const { data } = await axios.get(`http://localhost:3500/product/${id}`);
        dispatch({ type: ITEM_VIEW_SUCCESS, payload: data.product });
    } catch (error) {
        dispatch({ type: ITEM_VIEW_FAIL, payload: error.response.message });
    }
    
};

export const getRecommendItem = (itemName) => async (dispatch) => {
    const RECOMMENDATION_FETCHING = "RECOMMENDATION_FETCHING";
    const RECOMMENDATION_SUCCESS = "RECOMMENDATION_SUCCESS";
    const RECOMMENDATION_FAIL = "RECOMMENDATION_FAIL"; 

    try {
        dispatch({ type: RECOMMENDATION_FETCHING }); 
        const { data } = await axios.get(`http://localhost:4500/recommend?_id=${itemName}`);
        dispatch({ type: RECOMMENDATION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: RECOMMENDATION_FAIL, payload: error.response.message });
    }
}

export const clearErrors = () => async (dispatch) => {
    const CLEAR_ERRORS = "CLEAR_ERRORS";
    dispatch({ type: CLEAR_ERRORS })
}


//reducer for handling the recommendations

export const recommendationsReducer = (state = { suggestions: [] }, action) => {
    const RECOMMENDATION_FETCHING = "RECOMMENDATION_FETCHING";
    const RECOMMENDATION_SUCCESS = "RECOMMENDATION_SUCCESS";
    const RECOMMENDATION_FAIL = "RECOMMENDATION_FAIL";
    const CLEAR_ERRORS = "CLEAR_ERRORS";

    switch (action.type) {
        case RECOMMENDATION_FETCHING:
            return { loading: true, suggestions: [] };
            
        case RECOMMENDATION_SUCCESS:
            return { loading: false, suggestions: action.payload };
        
        case RECOMMENDATION_FAIL:
            return { loading: false, error: action.payload };
    
        case CLEAR_ERRORS:
            return { state, error: null };

        default:
            return state;
    }
};
//reducer for handling the user

export const userReducer = (state = { user: {} }, action) => {
    const LOGIN_REQUEST = "LOGIN_REQUEST";
    const SIGNUP_REQUEST = "SIGNUP_REQUEST";
    const USER_FETCHING = "USER_FETCHING";

    const LOGIN_SUCCESS = "LOGIN_SUCCESS";
    const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
    const USER_SUCCESS = "USER_SUCCESS";
    const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

    const LOGIN_FAIL = "LOGIN_FAIL";
    const SIGNUP_FAIL = "SIGNUP_FAIL";
    const USER_FAIL = "USER_FAIL";
    const LOGOUT_FAIL = "LOGOUT_FAIL"

    const CLEAR_ERRORS = "CLEAR_ERRORS";


    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
        case USER_FETCHING:
            return { loading: true, isAuthenticated: false };

        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
        case USER_SUCCESS:
            return { ...state, loading: false, isAuthenticated: true, user: action.payload };


        case LOGOUT_SUCCESS:
            return {
                loading: false,
                user: null,
                isAuthenticated: false,
            };

        case LOGIN_FAIL:
        case SIGNUP_FAIL:
            return { ...state, loading: false, isAuthenticated: false, user: null, error: action.payload };

        case USER_FAIL:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return { ...state, error: null };

        default:
            return state;
    }
};
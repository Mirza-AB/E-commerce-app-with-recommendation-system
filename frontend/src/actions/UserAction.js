import axios from "axios";

export const postLogin = (email, password) => async (dispatch) => {
  const LOGIN_REQUEST = "LOGIN_REQUEST";
  const LOGIN_SUCCESS = "LOGIN_SUCCESS";
  const LOGIN_FAIL = "LOGIN_FAIL";

  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`http://localhost:3500/login`, { email, password }, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// Register
export const signUp = (userInfo) => async (dispatch) => {
  const SIGNUP_REQUEST = "SIGNUP_REQUEST";
  const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
  const SIGNUP_FAIL = "SIGNUP_FAIL";
  try {
    dispatch({ type: SIGNUP_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`http://localhost:3500/signUp`, userInfo, config);

    dispatch({ type: SIGNUP_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data.user));

    console.log(data)
  } catch (error) {
    dispatch({ type: SIGNUP_FAIL, payload: error.response.data.message });
  }
};

// Load User
export const loadUser = () => async (dispatch, getState) => {
  const USER_FETCHING = "USER_FETCHING";
  const USER_SUCCESS = "USER_SUCCESS";
  const USER_FAIL = "USER_FAIL";

  try {
    dispatch({ type: USER_FETCHING });

    const { data } = await axios.get(`http://localhost:3500/user`);

    dispatch({ type: USER_SUCCESS, payload: data.user });
    localStorage.setItem("user", JSON.stringify(getState().user.user));

  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data.message });
  }
}

// Log out user
export const logout = () => async (dispatch) => {
  const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
  const LOGOUT_FAIL = "LOGOUT_FAIL"

  try {
    await axios.get(`http://localhost:3500/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
    alert("Your shopping session is deleted")

    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    localStorage.clear(cartItems)

  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
}

export const clearErrors = () => async (dispatch) => {
  const CLEAR_ERRORS = "CLEAR_ERRORS";
  dispatch({ type: CLEAR_ERRORS })
}
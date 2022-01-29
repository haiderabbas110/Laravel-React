import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_DATA,
    LOGOUT,
  } from "../actions/type";
  
  const state = {
    auth: JSON.parse(localStorage.getItem("user")),
  };
  
  const initialState = state.auth
    ? { isLoggedIn: true, state }
    : { isLoggedIn: false, state: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case USER_DATA:
        return {
          ...state,
          isLoggedIn: true,
          userData: payload.user,
        };
      default:
        return state;
    }
  }
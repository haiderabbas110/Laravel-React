import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_DATA,
  UPDATE_USER,
  SET_MESSAGE,
} from "./type";

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      const message = {
        text: "LoggedIn Success.",
        variant: "success"
      }

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.resolve();
    },
    (error) => {
      const messageResponse =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      const message = {
        text: messageResponse,
        variant: "danger"
      }

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const LoggedInUser = (data) => (dispatch) => {
  dispatch({
    type: USER_DATA,
    payload: { user: data },
  });
};

export const UpdateUser = (data) => (dispatch) => {
  return UserService.setUserProfile(data).then(
    (response) => {
      dispatch({
        type: UPDATE_USER,
        payload: { user: response },
      })
      const message = {
        text: response.message,
        variant: "success"
      }

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });


      return Promise.resolve();

    },
    (error) => {
      const _content =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
// console.log(error.response.data['profile_image'][0]);
        const message = {
          text: _content,
          variant: "danger"
        }
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

      return _content;
    }
  );
  /* dispatch({
    type: UPDATE_USER,
    payload: { user: data },
  }); */
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
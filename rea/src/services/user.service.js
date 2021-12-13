import axios from "axios";
import authHeader from "./auth-header";

import { path_server, request_delay } from "../Constants";
const API_URL = path_server+"/api/";

const getUserBoard = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const getUserProfile = () => {
  const UserService = axios.get(API_URL + "user", { headers: authHeader() });

  UserService.then(
    (response) => {
      //setUser(response.data.user);
      console.log(response);
      return response;
    },
    (error) => {
      const _content =
        (error.response && error.response.data) ||
        error.message ||
        error.toString();
        //setUser(_content);
        return _content;
    }
  );
};

const getSearchUsers = (searchVal) => {
  return axios.get(API_URL + "searchUser?search_keyword="+searchVal, { headers: authHeader() });
};

export default {
  getUserBoard,
  getUserProfile,
  getSearchUsers,
};
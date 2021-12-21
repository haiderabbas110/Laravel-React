import axios from "axios";
import authHeader from "./auth-header";

import { path_server, request_delay } from "../Constants";
const API_URL = path_server+"/api/";

const getUserBoard = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const getUserProfile = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const setUserProfile = (data) => {
  return axios
    .patch(API_URL + "user/update", {
      data,
    })
   /*  .then((response) => {
      return response.data;
    });
 */
};

const getSearchUsers = (searchVal) => {
  return axios.get(API_URL + "searchUser?search_keyword="+searchVal, { headers: authHeader() });
};

export default {
  getUserBoard,
  getUserProfile,
  setUserProfile,
  getSearchUsers,
};
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "athlete", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "nutritionist", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "coach", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

import axios from "axios";

const API_URL = "http://localhost:8001/api/auth/";

const register = (user) => {
  return axios.post(API_URL + "signup", user);
};

const login = (user) => {
  return axios.post(API_URL + "signin", user).then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};

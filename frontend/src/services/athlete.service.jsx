import axios from "axios";
import authHeader from "./auth-header";

const updateUser = (id, user) => {
  return axios
    .put(`http://localhost:8001/api/update/${id}`, user, {
      headers: authHeader(),
    })
    .then((response) => {
      if (response.data.accessToken) {
      }

      return response.data;
    });
};
export default { updateUser };

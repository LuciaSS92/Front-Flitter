import axios from "axios";

const BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default {
  getAllFleets() {
    return axiosInstance.get("/api/fleets");
  },
  signUp(
    email: string,
    name: string,
    password: string,
    avatar: string,
    role: string
  ) {
    const user = { email, name, password, avatar, role };
    return axios.post(BASE_URL + "/users/", user);
  },
};

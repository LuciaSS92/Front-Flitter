import axios from "axios";
import store from "@/store";
const BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default {
  async getAllFleets() {
    return await axiosInstance.get("/api/fleets?sort=-createdAt");
  },
  async getAllPrivateFleets() {
    return await axiosInstance.get("/api/fleets/private?sort=-createdAt&limit=100",  {
      headers: {
        'Authorization': 'Bearer ' + store.getters.getToken,
  }
    });
  },

  async searchFleets(text: string) {
    return await axiosInstance.get("/api/fleets?text=" + text);
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

import axios from "axios";

const BASE_URL = "http://192.168.0.109:3000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default {
  async getAllFleets() {
    return await axiosInstance.get("/api/fleets?sort=-createdAt");
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

import {User} from "@/models/user"
import flitterApi from './api'
import axios from "axios";
import store from "@/store";

const BASE_URL = "http://localhost:3000";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});


export default {
  async getAllFleets() {
    return await flitterApi.get("/api/fleets?sort=-createdAt");
  },
  async getAllPrivateFleets() {
    return await axiosInstance.get("/api/fleets/private?sort=-createdAt&limit=100",  {
      headers: {
        'Authorization': 'Bearer ' + store.getters.getToken,
  }
    });
  },

  async searchFleets(text: string) {
    return await flitterApi.get("/api/fleets?text=" + text);
  },
  async getUserFromName(name:string):Promise<User>{
    const response = await flitterApi.get("/users?name=" + name);
    return response.data.user;
  },
  async getCurrentUser():Promise<User>{
    const response = await flitterApi.get("/users/current");
    return response.data.user;
  },
  async followUser(userId:string){
    await flitterApi.post("/api/follows", {userId});
  },
  async unfollowUser(userId:string){
    await flitterApi.delete("/api/follows", {data:{userId}});
  },
  async addKudos(fleetId:string){
    await flitterApi.post("/api/kudos", {fleetId});
  },
  async removeKudos(fleetId:string){
    await flitterApi.delete("/api/kudos", {data:{fleetId}});
  },
  signUp(
    email: string,
    name: string,
    password: string,
    avatar: string,
    role: string
  ) {
    const user = { email, name, password, avatar, role };
    return flitterApi.post("/users/", user);
  },
  async getUserFleets(userName: string) {
    return await flitterApi.get("/api/fleets?userName=" + userName);
  },
  async deleteUser(userId: string) {
    return await flitterApi.delete("/users/" + userId);
  },
};

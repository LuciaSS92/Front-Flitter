import {User} from "@/models/user"
import flitterApi from './api'

export default {
  async getAllFleets() {
    return await flitterApi.get("/api/fleets?sort=-createdAt");
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
};

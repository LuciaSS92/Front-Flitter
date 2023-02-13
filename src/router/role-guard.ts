/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";
import store from "@/store";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
  if (store.getters.getToken) {
    next();
  } else {
    alert("You cannot see more until you login");
    next({ name: "login" });
  }
};

export default haveRoleGuard;

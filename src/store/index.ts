import { createStore } from "vuex";
import auth from "@/api/auth";
import { Fleet } from "@/models/fleet";

interface State {
  fleets: Fleet[];
  token: string;
}
export default createStore<State>({
  state: {
    fleets: [] as Fleet[],
    token: '' as string
  },
  getters: {
    getFleets(state: { fleets: Fleet[] }) {
      console.log("GETTERS", console.log(state.fleets));
      return state.fleets;
    },
    getToken(state: { token: string }) {
      return state.token;
    },
  },
  mutations: {
    setFleets(state, fleets) {
      console.log("SETEANDO", fleets);
      state.fleets = fleets;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async requestFleets({ commit }) {
      auth.getAllFleets().then((response) => {
        console.log("This is the response", response.data)
        commit("setFleets", response.data);
      });
    },
    async requestPrivateFleets({ commit }) {
      auth.getAllPrivateFleets().then((response) => {
        console.log("This is the response", response.data)
        commit("setFleets", response.data);
      });
    },
    async searchFleets({ commit }, { search }) {
      const response = await auth.searchFleets(search)
      commit("setFleets", response.data);
    },
    async getUserFleets({ commit }, { userName }) {
      const response = await auth.getUserFleets(userName)
      commit("setFleets", response.data)
    },
  },
});

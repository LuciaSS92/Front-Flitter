import { createStore } from "vuex";
import auth from "@/api/auth";
import { Fleet } from "@/models/fleet";

interface State {
  fleets: Fleet[];
}
export default createStore<State>({
  state: {
    fleets: [] as Fleet[],
  },
  getters: {
    getFleets(state: { fleets: Fleet[] }) {
      console.log("GETTERS", console.log(state.fleets));
      return state.fleets;
    },
  },
  mutations: {
    setFleets(state, fleets) {
      console.log("SETEANDO", fleets);
      state.fleets = fleets;
    },
  },
  actions: {
    async requestFleets({ commit }) {
      auth.getAllFleets().then((response) => {
        commit("setFleets", response.data.text);
      });
    },
    async searchFleets({ commit }, { search }) {
      const response = await auth.searchFleets(search)
      commit("setFleets", response.data);
    },
  },
});

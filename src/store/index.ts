import { createStore } from 'vuex';
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
    getFleets(state: {fleets: Fleet[] }) {
    return state.fleets;
    }
  },
  mutations: {
    setFleets(state, fleets) {
      state.fleets = fleets;
    }
  },
  actions: {
    async requestFleets({ commit }) {
      auth.getAllFleets().then((response) => {
        console.log("Response of ALL FLEETS", response.data);
        commit("setFleets", response.data);
      });
    },
  },
});

import axios from "axios";

const mod1 = {
  namespaced: true,
  state: {
    dd: {
      qqq: { name: "siri" },
      zzz: { name: "cortana" }
    },
    coinData: {}
  },
  getters: {
    getName: state => aigirls => {
      let name;
      if (aigirls === "xxx") {
        name = state.dd.qqq.name;
      } else if (aigirls === "yyy") {
        name = state.dd.zzz.name;
      }
      return name;
    }
  },
  mutations: {
    getApi(state, response) {
      state.coinData = response;
    }
  },
  actions: {
    actionGetData({ commit }) {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => commit("getApi", response.data))
        .catch(error => {
          commit("getError", { flag: true, error: error });
        });
    }
  }
};
export default mod1;

const mod1 = {
  namespaced: true,
  state: {
    dd: {
      qqq: { name: "siri" },
      zzz: { name: "cortana" }
    }
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
  mutations: {},
  actions: {}
};
export default mod1;

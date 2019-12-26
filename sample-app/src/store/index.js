import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    backgroundcolor: "navy",
    isShowModal: false,
    imgSrcUrl:
      "https://cdn.pixabay.com/photo/2019/11/12/15/47/aesthetic-4621334_1280.jpg",
    info: null,
    isErrored: false,
    errormessage: "",
    inputData: []
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    colorChageNavy(state) {
      state.backgroundcolor = "navy";
    },
    colorChageCrimson(state) {
      state.backgroundcolor = "crimson";
    },
    showModal(state) {
      state.isShowModal = true;
    },
    closeModal(state) {
      state.isShowModal = false;
    },
    changeImage(state, currentSrc) {
      state.imgSrcUrl = currentSrc;
    },
    getApi(state, response) {
      state.info = response;
    },
    getError(state, error) {
      state.isErrored = error;
    },
    setInputData(state, inputData) {
      state.inputData.push(inputData);
    },
    setLocalStorage(state, inputData) {
      state.inputData.push(inputData);
      localStorage.setItem("localstrage", JSON.stringify(state.inputData));
    }
  },
  actions: {
    actionIncrement({ commit }) {
      commit("increment");
    },
    actionDecrement({ commit }) {
      commit("decrement");
    },
    actionIncrementOnesecondlater({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    actionColorChageNavy({ commit }) {
      commit("colorChageNavy");
    },
    actionColorChageCrimson({ commit }) {
      commit("colorChageCrimson");
    },
    actionShowModal({ commit }) {
      commit("showModal");
    },
    actionCloseModal({ commit }) {
      commit("closeModal");
    },
    actionchangeImage({ commit }, currentSrc) {
      commit("changeImage", currentSrc);
    },
    actionGetApi({ commit }) {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => {
          commit("getApi", response.data);
        })
        .catch(error => {
          commit("getError", { flag: true, error: error });
        });
    },
    actionSetInputData({ commit }, inputData) {
      commit("setInputData", inputData);
    },
    actionSetLocalStorage({ commit }, inputData) {
      commit("setLocalStorage", inputData);
    },
    actionDeleteLocalStorage({ commit }, id) {
      const localstorage = JSON.parse(localStorage.getItem("localstrage"));

      const deletedlocalstorage = localstorage.filter(data => data.ID !== id);
      /*  eslint-disable */
      console.log(id, 444);
      console.log(commit);
      console.log(localstorage, 234);
      console.log(deletedlocalstorage, 989);
      /*  eslint-disable */
      localStorage.setItem("localstrage", JSON.stringify(deletedlocalstorage));
    }
  }
});

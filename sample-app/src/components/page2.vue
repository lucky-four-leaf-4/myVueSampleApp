<template>
  <section :class="$style.page2" :style="{backgroundColor:backgroundColor}">
    <h1>page2</h1>
    <p>count : {{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOnesecondlater">One second +</button>
    </p>
    <button @click="changenavy">change background color navy</button>
    <button @click="changecrimson">change background color crimson</button>

    <section>
      <button @click="showModal">show modal !</button>

      <modal v-if="flagShowModal">
        <header slot="modalHeader">Custom Header :{{count}}</header>
        <section slot="modalContent">background color {{ backgroundColor }}</section>
        <footer slot="modalFooter">Custom Footer</footer>
      </modal>
    </section>
    <Prefecture v-bind:prefectures="prefectures" />
  </section>
</template>

<script>
import modal from "./modal.vue";
import Prefecture from "./prefecture";

export default {
  name: "page2",
  components: {
    modal,
    Prefecture
  },
  data: function() {
    return {
      prefectures: [
        { id: 1, name: "Tokyo", isCapital: true, area: "Kanto" },
        { id: 2, name: "Chiba", isCapital: false, area: "Kanto" },
        { id: 3, name: "Kanagawa", isCapital: false, area: "Kanto" },
        { id: 4, name: "Hokkaido", isCapital: false, area: "Hokkaido" },
        { id: 5, name: "Fukuoka", isCapital: false, area: "Kyusyu" }
      ]
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    backgroundColor() {
      return this.$store.state.backgroundcolor;
    },
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    },
    flagShowModal() {
      return this.$store.state.isShowModal;
    }
  },
  methods: {
    increment() {
      this.$store.dispatch("actionIncrement");
    },
    decrement() {
      this.$store.dispatch("actionDecrement");
    },
    incrementOnesecondlater() {
      this.$store.dispatch("actionIncrementOnesecondlater");
    },
    changenavy() {
      this.$store.dispatch("actionColorChageNavy");
    },
    changecrimson() {
      this.$store.dispatch("actionColorChageCrimson");
    },
    showModal() {
      this.$store.dispatch("actionShowModal");
    }
  }
};
</script>

<style module>
.page2 {
  min-height: 100vh;
  height: 100%;
  background-color: #fff;
}
</style>
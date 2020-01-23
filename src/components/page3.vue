<template>
  <section>
    <pageHeader>
      <p slot="comment">Page 3ではaxiosについて練習する</p>
    </pageHeader>
    <button v-on:click="getApiclick">Get API !</button>
    <section v-if="isErrored">
      <p>{{ displayErrorMessage }}</p>
    </section>
    <currency v-bind:currencys="computedcurrencyinfo" />
  </section>
</template>

<script>
import pageHeader from "@/components/pageHeader";
import currency from "@/components/currency";

export default {
  name: "page3",
  components: {
    pageHeader,
    currency
  },
  data: function() {
    return { currencyinfo: this.$store.state.info };
  },
  mounted: function() {
    if (this.$store.state.info === null) {
      this.$store.dispatch("actionGetApi");
    }
    this.$store.dispatch("mod1/actionGetData");
  },
  computed: {
    computedcurrencyinfo() {
      return this.$store.state.info;
    },
    isErrored() {
      return this.$store.state.isErrored.flag;
    },
    displayErrorMessage() {
      return this.$store.state.isErrored.error;
    }
  },
  methods: {
    getApiclick() {
      this.$store.dispatch("actionGetApi");
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
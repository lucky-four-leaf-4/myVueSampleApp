<template>
  <section>
    <pageHeader>
      <p slot="comment">Page 4ではFormについて練習する</p>
    </pageHeader>
    <section class="switchbutton">
      <router-link v-bind:to="{name:'noticelists'}" exact>お知らせ一覧</router-link>
      <router-link v-bind:to="{name:'addnotice'}">新規登録</router-link>
    </section>
    <router-view />
    <!-- <sampleform /> -->
  </section>
</template>

<script>
import pageHeader from "@/components/pageHeader";
// import sampleform from "@/components/sampleform";

export default {
  name: "page4",
  components: {
    pageHeader
    // sampleform
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.switchbutton {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
section > a {
  text-decoration: none;
  display: block;
  max-width: 15rem;
  width: 100%;
  border: 1px solid crimson;
}
.router-link-active {
  background-color: crimson;
}
</style>
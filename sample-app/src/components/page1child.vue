<template>
  <section>
    <p>動的コンポーネント</p>
    <keep-alive>
      <component :is="currentChildBody"></component>
    </keep-alive>
  </section>
</template>

<script>
import child1 from "./page1childChild1.vue";
import child2 from "./page1childChild2.vue";
import child3 from "./page1childChild3.vue";

export default {
  name: "page1child",
  props: ["currentChildBody"],
  components: {
    child1: child1,
    child2: child2,
    child3: child3
  },
  data: function() {
    return {
      message: "message from child"
    };
  },
  mounted() {
    this.$emit("parentMethod", this.message);
  }
};
</script>

<style scoped>
</style>
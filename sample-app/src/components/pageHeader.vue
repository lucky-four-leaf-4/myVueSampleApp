<template>
  <section>
    <h1>{{displaytitle}}</h1>
    <slot name="comment">default comment</slot>
  </section>
</template>

<script>
export default {
  name: "PageHeader",
  computed: {
    displaytitle() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style scope>
.header {
  font-size: 2rem;
}
</style>
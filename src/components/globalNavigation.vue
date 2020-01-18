<template>
  <nav>
    <ul>
      <li v-for="(page,index) in pages" :key="page.id">
        <router-link
          v-bind:to="{name: page.name,params: page.params }"
        >{{index + 1}} : {{page.title}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "globalNavigation",
  data: function() {
    return {
      pages: [
        { id: 1, title: "Home", name: "Home" },
        { id: 2, title: "page1", name: "page1" },
        { id: 3, title: "page2", name: "page2" },
        { id: 4, title: "page3", name: "page3" },
        { id: 5, title: "page4", name: "noticelists" },
        {
          id: 99,
          title: "User",
          name: "Userhome",
          params: {
            userName: "kojima",
            userID: 123
          }
        }
      ]
    };
  },
  computed: {}
};
</script>

<style scoped>
header {
  background-color: #efefef;
}
nav ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
<template>
  <section id="app">
    <globalHeader />
    <globalNavigation />
    <router-view />
    <globalFooter />
  </section>
</template>

<script>
import globalHeader from './components/globalHeader.vue'
import globalFooter from './components/globalFooter.vue'
import globalNavigation from './components/globalNavigation.vue'

export default {
  name: 'app',
  components: {
    globalHeader,
    globalFooter,
    globalNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0px;
}
</style>

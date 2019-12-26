<template>
<section class="home">
    <img src="@/assets/logo.png" alt="Vue.js logo">
    <h1>{{ text }}</h1>
</section>
</template>

<script>
export default{
    name:"home",
    props:['text']
}
</script>

<style scoped>
.home{
    background-color:#fff;
}
</style>
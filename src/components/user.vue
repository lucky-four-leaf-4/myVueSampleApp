<template>
<section class="userpage">
    <h1>ID : {{userID}} / Name : {{userName}}</h1>
    <p>{{ text }}</p>
    <section class="linkarea">
        <router-link :to="{ name:'Userhome' }" exact>user home</router-link>
        <router-link :to="{ name:'userprofile' }">Profile : {{userName}}</router-link>
        <router-link :to="{ name:'userposts',params:{postID:999}}">Post : {{userName}}</router-link>
    </section>
<router-view></router-view>
</section>
</template>

<script>
export default{
    name:"user",
    props:['userID','userName'],
    data:function(){
        return{
            text:"my page",
        }
    }
}
</script>

<style scoped>
.userpage{
    background-color:#fff;
}
.userpage .linkarea{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.router-link-active{
    background-color:crimson;
}
</style>
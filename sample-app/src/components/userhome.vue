<template>
<section>
<h1>{{pagename}} / {{reversedPagename}} : {{userName}} / ID:{{userID}}</h1>
<p>{{text}}</p>
</section>
</template>

<script>
export default{
    name:"userhome",
    props:['userName','userID'],
    data:function(){
        return{
            pagename: this.$route.name,
            text:"home base"
        }
    },
    computed:{
        reversedPagename: function () {
            return this.pagename.split('').reverse().join('')
            }
        }
}
</script>

<style scoped>
.content{
    background-color:#fff;
}
</style>
<template>
<header>
<h1>sample-app</h1>
</header>
</template>

<script>
export default{
    name:"globalHeader",
    data:function(){
        return {
            pages: [
                { id:1,title: 'Home', path: '/' },
                { id:2,title: 'page1', path: '/page1' },
                { id:3,title: 'page2', path: '/page2' }
                ]
            }
        }
}
</script>

<style scoped>
header{
    overflow:auto;
    background-color:#efefef;
}
nav ul{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
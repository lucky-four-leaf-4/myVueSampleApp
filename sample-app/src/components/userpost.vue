<template>
<section>
<h1> title : {{title}}</h1>
<dl>
    <div><dt>author by </dt><dd>{{userName}}</dd></div>
    <div><dt>post date : </dt><dd>{{date}}</dd></div>
    <div><dt>post ID : </dt><dd>{{postID}}</dd></div>
</dl>
<p>{{text}}</p>
</section>
</template>

<script>
export default{
    name:"userpost",
    props:['userName','userID','postID'],
    data:function(){
        return{
            title:"titleAAA",
            date:"2019-01-01",
            text:"user post",
        }
    }
}
</script>

<style scoped>
.content{
    background-color:#fff;
}
dl{
    max-width: 10rem;
    width:100%;
    margin-left:auto;
    font-size: 0.5rem;
    display:flex;
    flex-direction: column;
}
dl > div{
    display: flex;
    flex-direction: row;
}
</style>
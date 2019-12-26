<template>
<button v-on:click="$emit('condense-text')">Condense Text</button>
</template>

<script>
export default{
    name:"btnCondense",
    props:[''],
    data:function(){
        return{
        }
    },
}
</script>

<style scoped>

</style>
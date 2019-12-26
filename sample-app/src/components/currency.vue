<template>
  <section v-if="currencys">
    <h1>{{ currencys.chartName}}</h1>
    <p>{{currencys.disclaimer}}</p>
    <dl class="time">
      <dt>Time</dt>
      <dd v-for="(time,timekey,index) in currencys.time" v-bind:key="index">{{timekey}} : {{time}}</dd>
    </dl>
    <section class="currencys">
      <dl v-for="(currency,key,index) in currencys.bpi" v-bind:key="index" class="currency">
        <dt>{{key}}</dt>
        <div class="definitiondescriptions">
          <dd v-for="(each,eachkey,index) in currency" v-bind:key="index">{{eachkey}} : {{each}}</dd>
        </div>
      </dl>
    </section>
  </section>
</template>

<script>
export default {
  name: "currencys",
  props: ["currencys"],
  computed: {}
};
</script>
<style scope>
.currencys {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: 100%;
}
.currency {
  max-width: 15rem;
  width: 100%;
  background-color: bisque;
}
.definitiondescriptions > dd {
  margin: 0;
}
</style>
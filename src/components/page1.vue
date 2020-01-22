<template>
  <section :style="{fontSize:postFontSize + 'em'}">
    <h1>{{$route.name}}</h1>
    <p>{{ text1 }}</p>
    <p>{{message}}</p>
    <p>count : {{ count }}</p>
    <btnEnlarge v-on:enlarge-text="enlargeText" />
    <btnCondense v-on:condense-text="postFontSize -= 1" />
    <section>
      <button v-for="(child,index) in childs" :key="index" @click="currentChild = child">{{ child }}</button>
      <page1child @parentMethod="updateMessage" :currentChildBody="currentChild" />
    </section>
    <imagegallery />
    <calendar />
  </section>
</template>

<script>
import btnEnlarge from "@/components/btnEnlarge.vue";
import btnCondense from "@/components/btnCondense.vue";
import page1child from "@/components/page1child.vue";
import imagegallery from "@/components/imageGallery.vue";
import calendar from "@/components/calendar";

export default {
  name: "page1",
  props: ["text1"],
  components: {
    btnEnlarge,
    btnCondense,
    page1child,
    imagegallery,
    calendar
  },
  data: function() {
    return {
      text: "message page1",
      postFontSize: 1,
      message: "",
      currentChild: "child3",
      childs: ["child1", "child2", "child3"]
    };
  },
  methods: {
    updateMessage(message) {
      this.message = message;
    },
    enlargeText(array) {
      for (let value of array) {
        // eslint-disable-next-line no-console
        console.log(value);
      }

      this.postFontSize += array[2].plusFontSize;
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style scoped>
</style>
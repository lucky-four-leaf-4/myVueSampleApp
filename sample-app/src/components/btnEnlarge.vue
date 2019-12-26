<template>
  <button v-on:click="enlargeText">Enlarge Text</button>
</template>

<script>
export default {
  name: "btnEnlarge",
  props: [""],
  data: function() {
    return {
      num1: 1,
      num2: 0.6,
      bloodtype: "AB"
    };
  },
  computed: {
    sumfontsize() {
      return { plusFontSize: this.num1 + this.num2 };
    }
  },
  methods: {
    enlargeText() {
      const array = new Array();
      array.push(event.currentTarget, event.target.tagName, this.sumfontsize, {
        bloodtype: this.bloodtype
      });

      this.$emit("enlarge-text", array);
    }
  }
};
</script>

<style scoped>
</style>
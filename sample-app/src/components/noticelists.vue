<template>
  <ul class="noticelists_area">
    <li v-for="(notice,index) in noticeListsDatas" v-bind:key="index" class="noticelist">
      <noticedetail v-bind:notice="notice" v-bind:noticeindex="index" />
    </li>
  </ul>
</template>
<script>
import noticedetail from "@/components/noticedetail.vue";
export default {
  name: "NoticeLists",
  components: { noticedetail },
  props: {},
  data: function() {
    return { noticeListsDatas: this.noticeListsDatas };
  },
  computed: {
    displaytitle() {
      return this.$route.meta.title;
    }
  },
  mounted: function() {
    this.noticeListsDatas = JSON.parse(localStorage.getItem("localstrage"));
    /* eslint-disable */
    // console.log(noticeListsDatas);
    /* eslint-disable */
  }
};
</script>
<style scoped>
.noticelists_area {
  padding: 0;
  margin: 0;
  overflow: auto;
}
.noticelist {
  list-style-type: none;
  overflow: auto;
}
</style>
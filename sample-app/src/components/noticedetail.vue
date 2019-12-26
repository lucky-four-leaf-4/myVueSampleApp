<template>
  <section>
    <dl class="notice_detail">
      <div class="notice_detail_groupe">
        <dt class="notice_detail_text">No.{{notice.ID}} 掲載開始：</dt>
        <dd class="notice_detail_publishstartdate">{{ notice.publishstartdate }}</dd>
      </div>
      <div class="notice_detail_groupe">
        <dt class="notice_detail_text">掲載終了：</dt>
        <dd class="notice_detail_publishenddate">{{ notice.publishenddate }}</dd>
      </div>
      <div class="notice_detail_groupe">
        <dt class="notice_detail_text">お知らせ内容：</dt>
        <dd class="notice_detail_noticetext">{{ notice.noticetext }}</dd>
      </div>
      <div class="notice_detail_groupe">
        <dt class="notice_detail_text">公開範囲：</dt>
        <dd class="notice_detail_publisharea">{{ notice.publisharea }}</dd>
      </div>
    </dl>
    <button v-on:click="deleteNotice(notice.ID)">Delete</button>
  </section>
</template>

<script>
export default {
  name: "NoticeDetail",
  props: {
    notice: {
      type: Object,
      default: () => {
        return {};
      }
    },
    noticeindex: { type: Number }
  },
  computed: {
    displayNumber() {
      return this.noticeindex + 1;
    }
  },
  methods: {
    deleteNotice(id) {
      /*  eslint-disable */
      console.log(id, 777);
      /*  eslint-disable */

      this.$store.dispatch("actionDeleteLocalStorage", id);
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.notice_detail {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.notice_detail_groupe {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.notice_detail_groupe dd {
  margin: 0;
}
</style>

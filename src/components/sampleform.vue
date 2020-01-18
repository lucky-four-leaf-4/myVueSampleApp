<template>
  <section>
    <h1>お知らせ新規登録</h1>
    {{display}}
    <fieldset>
      <legend>日付入力</legend>
      <div>
        <label for="publishstartdate">掲載開始</label>
        <input v-model="inputData.publishstartdate" id="publishstartdate" type="date" />
      </div>
      <div>
        <label for="publishenddate">掲載終了</label>
        <input v-model="inputData.publishenddate" id="publishenddate" type="date" />
      </div>
    </fieldset>
    <fieldset>
      <legend>公開範囲</legend>
      <input
        v-model="inputData.publisharea"
        type="radio"
        name="publisharea"
        id="publishareacommon"
        value="common"
      />
      <label for="publishareacommon">Common</label>
      <input
        v-model="inputData.publisharea"
        type="radio"
        name="publisharea"
        id="publishareacustomer"
        value="customer"
      />
      <label for="publishareacustomer">Customer</label>
      <input
        v-model="inputData.publisharea"
        type="radio"
        name="publisharea"
        id="publishareaclient"
        value="client"
      />
      <label for="publishareaclient">Client</label>
    </fieldset>
    <fieldset>
      <legend>お知らせ内容</legend>
      <textarea
        v-model="inputData.noticetext"
        maxlength="200"
        placeholder="内容を記載してください"
        rows="10"
        cols="30"
      ></textarea>
    </fieldset>
    <fieldset>
      <legend>HTMLタグ</legend>
      <input v-model="inputData.ischeckhtmltag" type="checkbox" id="ischeckhtmltag" />
      <label for="ischeckhtmltag">有効</label>
    </fieldset>
    <!-- <button v-on:click="submitform">set state</button> -->
    <button v-on:click="savelocalstrage">set local strage</button>
  </section>
</template>

<script>
export default {
  name: "sampleform",
  components: {},
  data: function() {
    return {
      inputData: {
        publishstartdate: "",
        publishenddate: "",
        publisharea: "common",
        noticetext: "",
        ischeckhtmltag: false
      },
      arrayinputData: []
    };
  },
  computed: {
    display() {
      return this.inputData;
    }
  },
  methods: {
    submitform() {
      this.$store.dispatch("actionSetInputData", this.inputData);
    },
    savelocalstrage() {
      const newinputdata = {
        ID: this.$store.state.inputData.length + 1,
        noticetext: this.inputData.noticetext,
        publishstartdate: this.inputData.publishstartdate,
        publishenddate: this.inputData.publishenddate,
        publisharea: this.inputData.publisharea,
        ischeckhtmltag: this.inputData.ischeckhtmltag
      };

      this.$store.dispatch("actionSetLocalStorage", newinputdata);
      // this.arrayinputData.push(newinputdata);
      // localStorage.setItem("localstrage", JSON.stringify(this.arrayinputData));
    }
  }
};
</script>

<style module>
textarea:invalid {
  border-color: crimson;
}
</style>
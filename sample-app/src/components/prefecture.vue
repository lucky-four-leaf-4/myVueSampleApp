<template>
  <section>
    <button
      v-for="(prefectureArea, index) in prefectureAreas"
      v-bind:key="index"
      v-bind:value="prefectureAreas[index]"
      v-on:click="changePrefecture"
    >
      {{ prefectureArea }}
    </button>
    <p>{{ currentPrefecture }}</p>
    <ul class="prefectures">
      <li
        class="prefectures_list"
        v-bind:prefectures="prefectures"
        v-for="prefecture in filteredPrefectures"
        v-bind:key="prefecture.id"
        v-bind:class="{ capital: prefecture.isCapital }"
      >
        <span>{{ prefecture.id }} : </span>
        <span>{{ prefecture.name }}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(kyusyu, index) in kyusyuarea" v-bind:key="index">
        {{ kyusyu.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "prefectures",
  props: ["prefectures"],
  data: function() {
    return {
      currentPrefecture: "ALL"
    };
  },
  computed: {
    prefectureAreas() {
      const prefectureAreas = this.prefectures.map(
        prefecture => prefecture.area
      );
      prefectureAreas.unshift("ALL");
      return [...new Set(prefectureAreas)];
    },
    kyusyuarea() {
      const kyusyuonly = this.prefectures.filter(
        prefecture => prefecture.area === "Kyusyu"
      );
      return kyusyuonly;
    },
    filteredPrefectures() {
      if (this.currentPrefecture === 'ALL') {
        return this.prefectures;
      } else {
        const areaFilter = this.prefectures.filter(
          prefecture => prefecture.area === this.currentPrefecture
        );
        // eslint-disable-next-line no-console
        console.log(areaFilter, 123);
        return areaFilter;
      }
    }
  },
  methods: {
    changePrefecture(e) {
      // eslint-disable-next-line no-console
      console.log(e.target.value, 999);
      this.currentPrefecture = e.target.value;
    }
  }
};
</script>
>
<style scoped>
.capital {
  color: crimson;
}
.capital::after {
  content: "首都";
  background-color: palegoldenrod;
}
.prefectures_list {
  list-style: none;
  margin: 1rem 0;
  background-color: rgba(255, 255, 255, 0.9);
}
.prefectures {
  margin: 0;
  padding: 0;
  overflow: auto;
  background-image: repeating-linear-gradient(
    90deg,
    #064a89,
    #064a89 5px,
    white 5px,
    white 10px,
    #f7b41d 10px,
    #f7b41d 15px,
    white 15px,
    white 20px
  );
}</style
>>

<template>
  <section class="calendar">
    <h1>calendar</h1>
    <section>
      <ul class="day_of_week">
        <li v-for="(day, index) in dayOfWeek" :key="index">{{day}}</li>
      </ul>
    </section>
    <ul class="days" :class="shiftDay">
      <li v-for="(i,index) in allDays" :key="index">{{i}}</li>
    </ul>
    <table>
      <thead></thead>
      <tbody>
        <tr v-for="(week,index) in separeteWeek" :key="index">
          <td v-for="(day,index) in week" :key="index">{{day}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "calendar",
  data() {
    return {
      dayOfWeek: ["日", "月", "火", "水", "木", "金", "土"],
      date: new Date()
    };
  },
  computed: {
    getFullYear() {
      //   return this.date.getFullYear();
      return 2020;
    },
    getMonth() {
      //monthは0から始まるため+1する
      let month = this.date.getMonth() + 1;
      return month;
    },
    getDay() {
      return this.date.getDay();
    },
    firstDateDay() {
      const firstDateDay = new Date(this.getFullYear, this.getMonth - 1, 1);
      return firstDateDay.getDay();
    },
    firstDay() {
      const firstDay = new Date(this.getFullYear, this.getMonth - 1, 1);
      return firstDay.getDate();
    },
    lastDay() {
      const lastDay = new Date(this.getFullYear, this.getMonth, 0);
      return lastDay.getDate();
    },
    allMonths() {
      let allMonths = [];
      for (let i = 0; i < 12; i++) {
        allMonths[i] = new Date(this.getFullYear, [i]);
      }
      return allMonths;
    },
    allDays() {
      let allDays = [];
      for (let i = 0; i < this.lastDay; i++) {
        allDays[i] = new Date(this.getFullYear, this.getMonth - 1, [i + 1]);
      }
      return allDays;
    },
    shiftDay() {
      const firstDateDay = this.firstDateDay;
      const shiftDay = `shit_${firstDateDay + 1}`;
      return shiftDay;
    },
    separeteWeek() {
      const allDays = this.allDays;
      const sevendays = 7;
      let separeteWeek = [];
      // const blanks = "";

      for (let i = 0; i < this.firstDateDay; i++) {
        // eslint-disable-next-line no-console
        console.log(beforefirstDay);
        let beforefirstDay = new Date(this.getFullYear, this.getMonth - 1, -i);
        allDays.unshift(beforefirstDay);
      }
      const i = 0;
      while (i < allDays.length) {
        separeteWeek.push(allDays.splice(i, i + sevendays));
      }
      return separeteWeek;
    },
    format() {
      const formatDate = new Intl.DateTimeFormat("ja-JP", {
        year: "numeric",
        month: "narrow",
        day: "numeric",
        weekday: "long"
      }).format(this.date);
      return formatDate;
    }
  },
  methods: {}
};
</script>

<style scoped>
.calendar {
  width: 100%;
}
ul {
  list-style: none;
}
ul li {
  display: block;
}
.day_of_week {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
.shit_1 li:first-child {
  grid-column: 1;
}
.shit_2 li:first-child {
  grid-column: 2;
}
.shit_3 li:first-child {
  grid-column: 3;
}
.shit_4 li:first-child {
  grid-column: 4;
}
.shit_5 li:first-child {
  grid-column: 5;
}
.shit_6 li:first-child {
  grid-column: 6;
}
.shit_7 li:first-child {
  grid-column: 7;
}
</style>
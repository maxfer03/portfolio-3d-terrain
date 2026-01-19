<template>
  <div class="text-container">
    <h2>Working experience</h2>
    <div class="roadmap-data">
      <div class="roadmap-data-item" v-for="(item, idx) in items" :key="idx">
        <span class="item-title"> {{ item.title }}</span>
        <span class="item-dates" v-if="item.sub"> {{ item.sub }}</span>
        <span class="item-dates" v-if="item.dates"> {{ item.dates }} </span>
        <div class="wire"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Technical Mentor & TA",
          sub: "Henry Bootcamp",
          dates: "July 2021 - June 2022",
        },
        {
          title: "Full Stack Developer",
          sub: "WIPIT Board",
          dates: "August 2021",
        },
        {
          title: "Software Engineer",
          sub: "Frontend Developer for STRUCK (via NicaSource)",
          dates: "October 2021 - May 2024",
        },
        {
          title: "Process Engineer",
          sub: "Megafy",
          dates: "May 2024 - January 2025",
        },
        {
          title: "Lead Software Developer",
          sub: "Megafy",
          dates: "January 2025 - Present",
        },
        {
          title: "Present Day",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.text-container {
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  .roadmap-data {
    text-align: center;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &-item {
      width: 80%;
      display: flex;
      align-items: center;
      flex-direction: column;
      .item-title {
        margin: 0px 0px 5px 0px;
      }
      .item-dates {
        font-size: 1.5rem;
      }
      &:last-child {
        .wire {
          display: none;
        }
      }
    }
    .wire {
      margin: 10px 0px;
      width: 1px;
      height: 50px;
    }
  }
}
</style>

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
          title: "Graduated Highschool",
          sub: "Bachelor of Social Studies",
          dates: "December 2020",
        },
        {
          title: "Teaching assistant at Henry",
          sub: "Internship",
          dates: "July 2021 - October 2021",
        },
        {
          title: "Fullstack Developer at Wipit Board",
          sub: "Henry Final Project",
          dates: "August 2021",
        },
        {
          title: "Graduated Henry",
          dates: "May 2021 - August 2021",
        },
        {
          title: "Software Engineer at Nicasource",
          sub: "FE Developer for STRUCK",
          dates: "October 2021 - Present",
        },
        {
          title: "Teaching assistant at Henry",
          dates: "January 2022 - June 2022",
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
      height: 100px;
    }
  }
}
</style>
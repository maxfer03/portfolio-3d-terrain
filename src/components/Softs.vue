<template>
  <div class="text-container">
    <h2>Soft</h2>
    <div class="soft-container">
      <div class="soft-items" v-for="(item, idx) in soft" :key="idx">
        <h3>{{ item.title }}</h3>
        <span> - {{ item.text }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      soft: [
        {
          title: "Tutor",
          text: "Experience guiding +15 sized teams at Henry Bootcamp",
        },
        {
          title: "Public Speaker",
          text: "Gave lectures and monologues at several county and university-level UN Simulations in front of hundreds of people",
        },
        {
          title: "Critical Thinking",
          text: "I'm always open to other opinions, and my experiences debating and programming with different people in high-pressure environments helped me cement this mentality.",
        },
        {
          title: "Flexible/Adaptable",
          text: "I'm a highly adaptable individual. I believe a solid framework suited to adapt to different situations is almost always better than a strict and rigorous plan.",
        },
        {
          title: "Leadership",
          text: "I enjoy taking the initiative.",
        },
        {
          title: "Team Player",
          text: "I try to surround myself with people smarter than me. I thrive working with diverse, passionate teams. And the truth is, this way is just more fun!",
        },
        {
          title: "Quick Learner",
          text: "Graduating from Henry prepared me to be always ready to learn something new. In just 5 months of study, I was able to apply to mid-level positions thanks to the intensive mental exercise.",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
.text-container {
  .soft-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .soft-items {
      h3 {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
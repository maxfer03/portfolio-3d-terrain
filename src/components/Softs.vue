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
          title: "Mentorship",
          text: "Hands-on experience mentoring developers in both bootcamp and professional environments, supporting technical growth, autonomy, and confidence.",
        },
        {
          title: "Clear Communication",
          text: "Comfortable explaining complex technical concepts to both technical and non-technical stakeholders, including clients and product teams.",
        },
        {
          title: "Critical Thinking",
          text: "Strong habit of questioning assumptions, evaluating trade-offs, and making pragmatic decisions under real-world constraints.",
        },
        {
          title: "Adaptability",
          text: "Able to operate effectively in changing environments, balancing structure with flexibility as project scope and priorities evolve.",
        },
        {
          title: "Leadership",
          text: "Proactive leadership style focused on ownership, accountability, and enabling teams to deliver high-quality results.",
        },
        {
          title: "Collaboration",
          text: "Enjoy working with diverse teams, valuing different perspectives and fostering constructive, low-ego collaboration.",
        },
        {
          title: "Continuous Learning",
          text: "Consistently learning new tools, platforms, and patterns to stay effective in fast-moving technical environments.",
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

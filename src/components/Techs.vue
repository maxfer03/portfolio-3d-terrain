<template>
  <div class="text-container">
    <h2>Tech Stack</h2>

    <div class="tech-grid">
      <div
        class="tech-block"
        v-for="(group, idx) in techs"
        :key="idx"
      >
        <h3>{{ group.category }}</h3>
        <ul>
          <li
            v-for="item in group.items"
            :key="item.name"
            :style="{ color: item.color }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techs: [
        {
          category: "Languages",
          items: [
            { name: "JavaScript", color: "#f0db4f" },
            { name: "TypeScript", color: "#3178c6" },
            { name: "Python", color: "#4b8bbe" },
            { name: "SQL", color: "#e38c00" },
          ],
        },
        {
          category: "Frontend",
          items: [
            { name: "React", color: "#61dbfb" },
            { name: "Vue", color: "#41b883" },
            { name: "Tailwind CSS", color: "#38bdf8" },
            { name: "Three.js", color: "#ffffff" },
          ],
        },
        {
          category: "Backend",
          items: [
            { name: "Node.js", color: "#3c873a" },
            { name: "Express", color: "#68a063" },
            { name: "Flask", color: "#ffffff" },
            { name: "REST APIs", color: "#cccccc" },
            { name: "Web Scraping", color: "#40b5a4" },
          ],
        },
        {
          category: "Databases",
          items: [
            { name: "PostgreSQL", color: "#0064a5" },
            { name: "MySQL", color: "#00758f" },
            { name: "MongoDB", color: "#4db33d" },
          ],
        },
        {
          category: "Cloud & Infrastructure",
          items: [
            { name: "AWS (Lambda, S3, RDS)", color: "#ff9900" },
            { name: "Docker", color: "#0db7ed" },
            { name: "CI/CD Pipelines", color: "#cccccc" },
          ],
        },
        {
          category: "Data & Visualization",
          items: [
            { name: "SQL Analytics", color: "#e38c00" },
            { name: "BI Dashboards", color: "#9ca3af" },
            { name: "Data Pipelines", color: "#9ca3af" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text-container {
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .tech-block {
    h3 {
      margin-bottom: 8px;
      font-weight: 600;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 1.4rem;
        line-height: 1.6;
        opacity: 0.9;
      }
    }
  }
}
</style>

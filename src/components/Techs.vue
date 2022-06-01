<template>
  <div class="text-container">
    <h2>Techs</h2>
    <div class="tech-section-container">
      <div class="techs">
        <div v-for="element in techs" :key="element">
          <h3>{{ element.category }}</h3>
          <ul>
            <li
              v-for="child in element.children"
              :key="child.id"
              :id="child.id"
              @mouseenter="hoveredId(child.img)"
              @mouseleave="selectId('')"
            >
              -
              <span
                :style="{
                  color: child.color,
                }"
                >{{ child.name }}</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="tech-image">
        <img :src="active" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      hasHovered: false,
      techs: [
        {
          category: "Lenguages",
          children: [
            {
              name: "Javascript",
              id: "js",
              color: "#f0db4f",
              img: "/logos/js.png",
            },
            {
              name: "Python",
              id: "py",
              color: "#4b8bbe",
              img: "/logos/py.png",
            },
            // {
            //   name: "Solidity",
            //   id: "sol",
            //   color: "#1be6e7",
            //   img: "/logos/sol.svg",
            // },
          ],
        },
        {
          category: "Front",
          children: [
            {
              name: "React",
              id: "react",
              color: "#61dbfb",
              img: "/logos/react.png",
            },
            {
              name: "vue",
              id: "vue",
              color: "#41b883",
              img: "/logos/vue.png",
            },
            {
              name: "three",
              id: "three",
              color: "white",
              img: "/logos/three.png",
            },
          ],
        },
        {
          category: "Back",
          children: [
            {
              name: "node",
              id: "node",
              color: "#3c873a",
              img: "/logos/node.png",
            },
            {
              name: "express",
              id: "xprs",
              color: "#68a063",
              img: "/logos/xprs.png",
            },
            {
              name: "sequelize",
              id: "sqlz",
              color: "#01afef",
              img: "/logos/sqlz.png",
            },
          ],
        },
        {
          category: "DB",
          children: [
            {
              name: "mongoDB",
              id: "mongo",
              color: "#4db33d",
              img: "/logos/mongo.png",
            },
            {
              name: "postgreSQL",
              id: "psql",
              color: "#0064a5",
              img: "/logos/psql.svg",
            },
            {
              name: "sequelize",
              id: "sqlz",
              color: "#01afef",
              img: "/logos/sqlz.png",
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectId(id) {
      this.active = id;
    },
    hoveredId(id) {
      this.active = id;
      this.hasHovered = true;
    },
    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
  },
  computed: {
    techImgs() {
      let imgArray = [];
      for (let el of this.techs) {
        for (let tech of el.children) {
          imgArray.push(tech.img);
        }
      }
      return imgArray;
    },
  },
  async created() {
    while (!this.hasHovered) {
      let random = Math.floor(Math.random() * this.techImgs.length);
      this.selectId(this.techImgs[random]);
      await this.delay(2000);
    }
  },
};
</script>

<style lang='scss' scoped>
.text-container {
  .tech-section-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .techs {
      display: flex;
      flex-direction: column;
      gap: 10px;
      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-left: 5px;
        span {
          text-transform: capitalize;
        }
      }
    }
    .tech-image {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 0px;
      img {
        object-fit: contain;
        width: 15vw;
        max-width: 300px;
      }
    }
  }
}
</style>
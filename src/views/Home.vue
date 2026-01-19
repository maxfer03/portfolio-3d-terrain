<template>
  <div class="home">
    <div class="hero" id="hero">
      <div class="hero-content">
        <div class="hero-content-left">
          <Presentation />
        </div>
        <div class="hero-content-right">
          <Ascii />
        </div>
      </div>
      <div class="hero-scroll">
        <AutoScroll />
      </div>
    </div>

    <div id="projects-section">
      <ProjCarousell />
    </div>

    <div class="info">
      <div class="info-content-left">
        <div class="text-container">
          <h2>About Me</h2>

          <p>
            I'm Max, a software developer based in Argentina, currently working as a
            Lead Software Developer at a B2B-focused company delivering systems across
            healthcare and finance.
          </p>

          <p>
            My work sits at the intersection of backend, cloud, and full-stack
            development. I spend most of my time designing and building scalable
            systems, mentoring developers, and making pragmatic technical decisions
            under real-world constraints.
          </p>

          <p>
            Outside of work, I enjoy studying new technologies, playing music, and
            reading fiction and history.
          </p>

          <p>
            When I’m not building software, I’m usually learning something new,
            playing guitar, reading, or unwinding with videogames.
          </p>
        </div>

        <Career />
      </div>

      <div class="info-content-right">
        <Techs />
        <Softs />
      </div>
    </div>

    <div class="contact">
      <div class="text-container">
        <h2>Want to reach me?</h2>
        <ul>
          <li>
            <h3>- Email me at sandsferdinand@gmail.com</h3>
          </li>
          <li>
            <h3>
              - Reach out on
              <a
                href="https://www.linkedin.com/in/maxfarenas/"
                target="_blank"
                class="link"
              >
                LinkedIn
              </a>
            </h3>
          </li>
          <li>
            <h3>
              - Check my work on
              <a
                href="https://github.com/maxfer03"
                target="_blank"
                class="link"
              >
                GitHub
              </a>
            </h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Presentation from "@/components/Presentation.vue";
import Ascii from "@/components/Ascii.vue";
import AutoScroll from "@/components/AutoScroll.vue";
import ProjCarousell from "@/components/ProjCarousell.vue";
import Techs from "@/components/Techs.vue";
import Career from "@/components/Career.vue";
import Softs from "@/components/Softs.vue";

export default {
  name: "Home",
  components: {
    Presentation,
    Ascii,
    AutoScroll,
    ProjCarousell,
    Techs,
    Career,
    Softs,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.home {
  padding-bottom: 25vh;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &-content {
    width: 100%;
    flex: 1 1 0px;
    display: flex;
    justify-content: space-between;

    &-left,
    &-right {
      display: flex;
      align-items: center;
      width: 50%;
    }

    &-left {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-right {
      justify-content: center;

      @media screen and (max-width: 1361px) {
        display: none;
      }
    }
  }

  @include mobile() {
    &-content {
      &-left {
        width: 100%;

        .title-container {
          margin-bottom: 200px;
        }
      }
    }
  }
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0px;

  &-content-left,
  &-content-right {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &-content-left {
    flex: 1 1 0px;
  }

  &-content-right {
    min-width: 40%;
    max-width: 50%;
  }

  @include mobile {
    flex-direction: column;
    align-items: center;

    &-content-left,
    &-content-right {
      max-width: none;
      width: 100%;
    }
  }
}
</style>

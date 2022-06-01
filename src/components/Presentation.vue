<template>
  <div class="title-container">
            <h1 class="title-container-title">Max Fernandez</h1>
            <div class="title-container-subtitle" >
              <span> > </span>
              <p class="title-container-subtitle-text" @click="decodeEffect">Web developer</p>
            </div>
          </div>
</template>

<script>
import { adjustLetters } from '@/scripts/decodeText.js'
export default {
  name: 'Presentation',
  methods: {
    decodeEffect () {
      const subtitleContainer = document.querySelector('.title-container-subtitle-text')
      adjustLetters(subtitleContainer)
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.title-container{

  p{
    margin: 0px;
  }
  &-subtitle {
    display: flex;
    user-select: none;
    span {
      width: 25px;
    }
    &-text {
      width: 100%;
      cursor: pointer;
      transition: 0.5s;
      min-height: 40px;
    }
  }
}

</style>

<template>
  <button @click="scrollTo"  class="autoscroll">
      (↓)
  </button>
</template>

<script>
export default {
  name: 'AutoScroll',
  methods: {
    scrollTo () {
      const h = document.getElementById('hero').clientHeight
      console.log(h)
      window.scrollTo({
        top: h,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
.autoscroll{
  border: none;
  font-size: 3rem;
  background: none;
  color: white;
  font-family: "Space Mono", monospace;
  margin: 0px 0px 40px 0px;
  cursor: pointer;
}
</style>

<template>
  <div @click="scrollTo"  class="autoscroll">
      (scroll)
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

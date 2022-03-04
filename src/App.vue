<template>
  <section>
    <Navbar/>
    <router-view/>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Space Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:white;

  button{
    color: white;
    border: none;
    background: none;
    cursor: pointer;
    font-family: "Space Mono", monospace;
    font-size: 3rem;
  }

}
</style>

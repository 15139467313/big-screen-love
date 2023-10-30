<template>
  <div id="app">
    <div id="particles-js"></div>
    <router-view/>
  </div>
</template>
<script>
import particles from 'particles.js'
export default {
  data() {
    return {};
  },
  mounted() {
    particlesJS("particles-js",require('../public/particles.json'));
  },
};
</script>
<style lang="scss" scoped>
#particles-js{
  position: absolute;
  top: 0;
  left: 0;
  //z-index: 2;
  width: 100%;
  height: 100%;
  //background-position: 50% 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  overflow: hidden;
  position: relative;
}
</style>

<template>
  <div id="app">
    <background/>
    <main-title/>
    <router-view class="router"/>

  </div>
</template>

<script>
  import Background from "./components/Background";
  import MainTitle from "./components/MainTitle";

  export default {
    name: 'App',
    components: {MainTitle, Background}
  }
</script>

<style lang="scss" scoped>

  #app {
    color: white;
    text-align: center;
  }

  .router {
    position: absolute;
    left: 10vw;
    width: 80vw;

  }

</style>

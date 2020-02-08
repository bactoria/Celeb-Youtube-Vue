<template>
  <div id="app">
    <background/>
    <main-title/>
    <router-view class="router"/>
    <app-footer/>
  </div>
</template>

<script>
  import Background from "./components/Background";
  import MainTitle from "./components/MainTitle";
  import AppFooter from "./components/AppFooter";

  export default {
    name: 'App',
    components: {AppFooter, MainTitle, Background}
  }
</script>

<style lang="scss" scoped>

  #app {
    color: white;
    text-align: center;
  }

  .router {
    left: 10vw;
    width: 80vw;
    margin: auto;
  }

</style>

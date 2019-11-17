<template>
  <div class="root" align="center">
    <router-link to="/">
      <img class="title-img" src="../assets/title.png" style="width: 40%">
      <typed-text/>
    </router-link>
  </div>
</template>

<script>
  import TypedText from "./TypedText";
  export default {
    name: "MainTitle",
    components: {TypedText}
  }
</script>

<style lang="scss" scoped>

  .root {
    padding: 2vh 0;
  }

  @media (max-width: 991px) {
    .title-img{
      width: 90%;
    } }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .title-img{
      width: 70%;
    }
  }



</style>

<template>
  <div class="root" align="center">
    <router-link to="/">
    <img  class="title-img" src="../assets/coo5.png">
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "MainTitle"
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

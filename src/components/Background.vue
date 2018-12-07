<template>
<div class="root"></div>
</template>

<script>
  export default {
    name: "Background"
  }
</script>

<style lang="scss" scoped>
  .root {
    position: fixed;
    background-color: $background-color;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

</style>

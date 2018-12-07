<template>
  <div class="root Hanna">
    <data-table/>
  <my-footer/>
  </div>
</template>

<script>

  import DataTable from "./DataTable";
  import MyFooter from "./myFooter";
  export default {
    name: "Index",
    components: {MyFooter, DataTable},
  }
</script>

<style lang="scss" scoped>
  @import "../assets/HannaFont";
  .root {
  }

</style>

<template>
  <div class="root">
    <data-table/>
    <my-footer/>
  </div>
</template>

<script>
  import DataTable from "@/components/DataTable";
  import MyFooter from "@/components/myFooter";
  export default {
    name: "Index",
    components: {MyFooter, DataTable},
  }
</script>

<style lang="scss" scoped>
  .root {
  }
</style>

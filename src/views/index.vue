<template>
  <div class="root">
    <data-table/>
  </div>
</template>

<script>
  import DataTable from "@/components/DataTable";
  export default {
    name: "Index",
    components: {DataTable},
  }
</script>

<style lang="scss" scoped>
  .root {
  }
</style>

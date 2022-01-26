<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "AppContainer"
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";

  .container {
    max-width: $containerExtraLarge;
    margin: auto;
    padding: 0 spacing(8);
  }
</style>

<template>
  <svg class="svg-icon">
    <use :xlink:href="iconPath"></use>
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "SvgIcon",
    props: {
      icon: {
        type: String,
        required: true,
      },
    },
    computed: {
      iconPath() {
        return `/icons.svg#${this.icon}`;
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";

  .svg-icon {
    width: $iconSizeDefault;
    height: $iconSizeDefault;
  }
</style>

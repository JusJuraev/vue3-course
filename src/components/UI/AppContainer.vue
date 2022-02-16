<template>
  <div class="container" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";

  export default defineComponent({
    name: "AppContainer",
    props: {
      size: {
        type: String,
        default: "xl",
        validator(value: string): boolean {
          return ["sm", "md", "lg", "xl"].includes(value);
        },
      },
    },
    setup: (props: Record<string, any>) => {
      const classes = computed(() => ({
        "container-sm": props.size === "sm",
        "container-md": props.size === "md",
        "container-lg": props.size === "lg",
        "container-xl": props.size === "xl",
      }));

      return {
        classes,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";

  .container {
    margin: auto;
    padding: 0 spacing(8);

    &.container-sm {
      max-width: $containerSmall;
    }

    &.container-md {
      max-width: $containerMedium;
    }

    &.container-lg {
      max-width: $containerLarge;
    }

    &.container-xl {
      max-width: $containerExtraLarge;
    }
  }
</style>

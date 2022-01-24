<template>
  <jus-container>
    <div class="wrapper">
      <div class="wrapper__buttons">
        <jus-button size="lg">Large Button</jus-button>
        <jus-button size="md">Default Button</jus-button>
        <jus-button size="sm">Small Button</jus-button>
      </div>
      <div class="wrapper__buttons">
        <jus-button size="lg" variant-color="primary">Large Button</jus-button>
        <jus-button size="md" variant-color="primary"
          >Default Button</jus-button
        >
        <jus-button size="sm" variant-color="primary">Small Button</jus-button>
      </div>
      <div class="wrapper__buttons">
        <jus-button size="lg" variant-color="secondary"
          >Large Button</jus-button
        >
        <jus-button size="md" variant-color="secondary"
          >Default Button</jus-button
        >
        <jus-button size="sm" variant-color="secondary"
          >Small Button</jus-button
        >
      </div>
    </div>
  </jus-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import JusContainer from "@/components/UI/JusContainer.vue"

  export default defineComponent({
    name: "Main",
    components: { JusContainer }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";
  @import "src/scss/typography";
  @import "src/scss/mixins";

  .wrapper {
    @include postfix(display, grid);
    grid-gap: spacing(6);

    &__buttons {
      @include flex();
      column-gap: spacing(4);
    }
  }
</style>

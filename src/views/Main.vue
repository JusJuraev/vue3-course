<template>
  <app-container>
    <div class="wrapper">
      <div class="wrapper__buttons">
        <app-button size="lg">Large Button</app-button>
        <app-button size="md">Default Button</app-button>
        <app-button size="sm">Small Button</app-button>
      </div>
      <div class="wrapper__buttons">
        <app-button size="lg" variant-color="primary">Large Button</app-button>
        <app-button size="md" variant-color="primary"
          >Default Button</app-button
        >
        <app-button size="sm" variant-color="primary">Small Button</app-button>
      </div>
      <div class="wrapper__buttons">
        <app-button size="lg" variant-color="secondary"
          >Large Button</app-button
        >
        <app-button size="md" variant-color="secondary"
          >Default Button</app-button
        >
        <app-button size="sm" variant-color="secondary"
          >Small Button</app-button
        >
      </div>
    </div>
  </app-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "Main"
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

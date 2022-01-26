<template>
  <div class="form-control" :class="{ invalid: invalid }">
    <slot></slot>
  </div>
</template>

<script>
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "FormControl",
    props: {
      invalid: {
        type: Boolean,
        default: false
      }
    }
  })
</script>

<style lang="scss">
  @import "src/scss/functions";
  @import "src/scss/variables";

  .form-control {
    margin-bottom: spacing(4);

    &.invalid {
      & label {
        color: $colorDanger;
      }

      & input {
        border-color: $colorDanger;
      }
    }
  }
</style>

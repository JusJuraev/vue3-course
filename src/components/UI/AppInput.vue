<template>
  <form-control>
    <label v-if="label" :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </form-control>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import FormControl from "@/components/UI/FormControl.vue"

  export default defineComponent({
    name: "AppInput",
    components: {
      FormControl
    },
    emits: ["update:modelValue"],
    props: {
      modelValue: {
        type: [String, Number]
      },
      label: {
        type: String
      },
      name: {
        type: String
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";
  @import "src/scss/typography";
  @import "src/scss/mixins";

  label {
    display: block;
  }

  input {
    @include transitionDefault();
    border: 1px solid $colorNeutral5;
    border-radius: $roundedDefault;
    display: block;
    font: inherit;
    padding: spacing(3) spacing(4);
    outline: none;
    height: spacing(12);
    width: 100%;

    &:focus {
      border-color: $colorPrimary;
    }
  }
</style>

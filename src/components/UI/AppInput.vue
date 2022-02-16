<template>
  <app-field
    :label="label"
    :empty="isEmpty"
    :invalid="invalid"
    :focused="isFocused"
    :disabled="$attrs.disabled"
    @click="$refs.input.focus()"
  >
    <template #prefix>
      <slot name="prefix" />
    </template>

    <template #infix>
      <input
        ref="input"
        class="input"
        v-bind="$attrs"
        :value="modelValue"
        @input="handleInput($event)"
        @focusin="handleFocusIn"
        @focusout="handleFocusOut"
      />
    </template>

    <template #suffix>
      <slot name="suffix" />
    </template>

    <template #error>
      <slot name="error" />
    </template>

    <template #hint>
      <slot name="hint" />
    </template>
  </app-field>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AppInput",

    inheritAttrs: false,

    props: {
      modelValue: {
        type: [String, Number],
        required: false,
      },
      label: {
        type: String,
        required: false,
        default: "",
      },
      invalid: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    emits: {
      "update:modelValue": null,
    },

    data() {
      return {
        isFocused: false,
      };
    },

    computed: {
      isEmpty() {
        return !String(this.modelValue).trim();
      },
    },

    methods: {
      handleInput(event: InputEvent) {
        this.$emit(
          "update:modelValue",
          (event?.target as HTMLInputElement)?.value
        );
      },

      handleFocusIn() {
        this.isFocused = true;
      },

      handleFocusOut() {
        this.isFocused = false;
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/typography";

  .input {
    border: none;
    font-family: inherit;
    outline: none;
    width: 100%;

    @include fontBody();

    color: $colorNeutral1;
    background-color: transparent;

    &::placeholder {
      color: $colorNeutral3;
    }
  }
</style>

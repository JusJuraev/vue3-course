<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent, ref, PropType } from "vue"

  export default defineComponent({
    name: "JusButton",
    props: {
      size: {
        type: String as PropType<string>,
        default: "md",
        validator(value: string): boolean {
          return ["sm", "md", "lg"].includes(value)
        }
      },
      variant: {
        type: String as PropType<string>,
        default: "solid",
        validator(value: string): boolean {
          return ["solid", "ghost", "outline"].includes(value)
        }
      },
      variantColor: {
        type: String as PropType<string>,
        default: "default",
        validator(value: string): boolean {
          return ["default", "primary", "secondary"].includes(value)
        }
      }
    },
    setup: (props: Record<string, any>) => {
      const className = ref(["button"])

      const sizeClassesMap: Record<string, string> = {
        sm: "button-small",
        lg: "button-large"
      }

      const variantClassesMap: Record<string, string> = {
        solid: "",
        ghost: "",
        outline: ""
      }

      const colorClassesMap: Record<string, string> = {
        default: "button-default",
        primary: "button-primary",
        secondary: "button-secondary"
      }

      className.value.push(sizeClassesMap[props.size])
      className.value.push(variantClassesMap[props.variant])
      className.value.push(colorClassesMap[props.variantColor])

      return {
        className: className.value.filter(Boolean).join(" ")
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";
  @import "src/scss/mixins";
  @import "src/scss/typography";

  @mixin buttonState($color, $colorHover, $colorPressed) {
    background: $color;

    &:hover:not(:disabled):not(:active) {
      background: $colorHover;
    }

    &:active {
      background: $colorPressed;
    }
  }

  .button {
    border: 1px solid transparent;
    cursor: pointer;
    height: spacing(10);
    outline: none;
    padding: spacing(2) spacing(4);
    @include prefix(border-radius, $roundedDefault);
    @include transitionDefault(background);
    @include fontCallout;

    &:disabled {
      color: $colorNeutral5;
      pointer-events: none;
    }
  }

  .button-default {
    color: black;
    border-color: currentColor;
    @include buttonState(white, rgba(black, 0.07), rgba(black, 0.1));

    &:disabled {
      background: white;
    }
  }

  .button-primary {
    color: white;
    @include buttonState(
      $colorPrimary,
      $colorPrimaryHover,
      $colorPrimaryPressed
    );
  }

  .button-secondary {
    color: white;
    @include buttonState(
      $colorSecondary,
      $colorSecondaryHover,
      $colorSecondaryPressed
    );
  }

  .button-small {
    height: spacing(8);
    padding: spacing(1) spacing(3);
  }

  .button-large {
    @include fontTitle3;
    height: spacing(12);
  }

  .button-primary,
  .button-secondary {
    &:disabled {
      background: $backgroundNeutral;
    }
  }
</style>

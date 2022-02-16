<template>
  <button class="button" :class="classes">
    <span class="button__icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </span>

    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue";

  type ButtonSizes = "sm" | "md" | "lg";
  type ButtonVariants = "filled" | "stroke" | "noBg";
  type ButtonVariantColors = "black" | "primary" | "secondary";

  export default defineComponent({
    name: "AppButton",
    props: {
      size: {
        type: String as PropType<ButtonSizes>,
        default: "md",
      },
      variant: {
        type: String as PropType<ButtonVariants>,
        default: "filled",
      },
      variantColor: {
        type: String as PropType<ButtonVariantColors>,
        default: "black",
      },
      fullWidth: {
        type: Boolean,
        default: false,
      },
    },
    setup: (props, { slots }) => {
      const classes = computed(() => ({
        "button--small": props.size === "sm",
        "button--large": props.size === "lg",

        "button--black": props.variantColor === "black",
        "button--primary": props.variantColor === "primary",
        "button--secondary": props.variantColor === "secondary",

        "button--filled": props.variant === "filled",
        "button--stroke": props.variant === "stroke",
        "button--no-bg": props.variant === "noBg",

        "button--icon-only": !slots.default && slots.icon,
        "button--full-width": props.fullWidth,
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
  @import "src/scss/mixins";
  @import "src/scss/typography";

  @mixin buttonState($color, $colorHover, $colorPressed) {
    background: $color;

    &:hover:not(:disabled):not(:active) {
      background: $colorHover;
    }

    &:active,
    &:focus {
      background: $colorPressed;
    }
  }

  .button {
    border: none;
    border-radius: $roundedDefault;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    height: spacing(10);
    outline: none;
    padding: spacing(2) spacing(4);
    @include transitionDefault(background);
    @include fontCallout;

    &--full-width {
      width: 100%;
    }

    &__icon :slotted(.svg-icon) {
      display: block;
    }

    &:not(&--icon-only) &__icon {
      align-self: center;
      margin-right: spacing(2);
    }

    &:disabled {
      color: $colorNeutral5;
      pointer-events: none;
    }
  }

  // variant filled
  .button--filled {
    &.button--black:not(:disabled) {
      @include buttonState(
        $backgroundNeutral,
        $backgroundNeutralDark,
        $backgroundNeutralDark
      );
    }

    &.button--primary:not(:disabled) {
      color: white;
      @include buttonState(
        $colorPrimary,
        $colorPrimaryHover,
        $colorPrimaryPressed
      );
    }

    &.button--secondary:not(:disabled) {
      color: white;
      @include buttonState(
        $colorSecondary,
        $colorSecondaryHover,
        $colorSecondaryPressed
      );
    }

    &:disabled {
      background: $backgroundNeutral;
    }
  }

  // variant stroke
  .button--stroke {
    background: transparent;
    border: $borderWidthDefault solid;

    &.button--black:not(:disabled) {
      @include buttonState(inherit, $backgroundNeutral, $backgroundNeutralDark);
    }

    &.button--primary:not(:disabled) {
      @include buttonState(inherit, $backgroundPrimary, $backgroundPrimaryDark);
      color: $colorPrimary;
    }

    &.button--secondary:not(:disabled) {
      @include buttonState(
        inherit,
        $backgroundSecondary,
        $backgroundSecondaryDark
      );
      color: $colorSecondary;
    }

    &:disabled {
      border-color: $backgroundNeutral;
    }
  }

  // variant no-bg
  .button--no-bg {
    background: transparent;

    &.button--black:not(:disabled) {
      @include buttonState(inherit, $backgroundNeutral, $backgroundNeutralDark);
    }

    &.button--primary:not(:disabled) {
      @include buttonState(inherit, $backgroundPrimary, $backgroundPrimaryDark);
      color: $colorPrimary;
    }

    &.button--secondary:not(:disabled) {
      @include buttonState(
        inherit,
        $backgroundSecondary,
        $backgroundSecondaryDark
      );
      color: $colorSecondary;
    }
  }

  // icon button
  .button--icon-only {
    align-content: center;
    justify-content: center;
    padding: spacing(2);

    &.button--large {
      padding: spacing(3);
    }

    &.button--small {
      padding: spacing(1);
    }
  }

  // size
  .button--small {
    height: spacing(8);
    padding: spacing(1) spacing(3);
  }

  .button--large {
    @include fontTitle3;
    height: spacing(12);
  }
</style>

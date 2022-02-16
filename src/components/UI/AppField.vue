<template>
  <div class="field-wrapper">
    <div class="field" :class="fieldClasses">
      <div class="field__prefix" @click.stop>
        <slot name="prefix" />
      </div>

      <div class="field__content">
        <label v-if="label" class="field__label">
          {{ label }}
        </label>

        <div class="field__infix">
          <slot name="infix" />
        </div>
      </div>

      <div class="field__suffix" @click.stop>
        <slot name="suffix" />
      </div>
    </div>

    <p v-if="invalid" class="error">
      <slot name="error" />
    </p>

    <p v-else-if="!disabled" class="hint">
      <slot name="hint" />
    </p>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";

  export default defineComponent({
    name: "AppField",

    props: {
      label: {
        type: String,
        required: false,
      },
      empty: {
        type: Boolean,
        required: true,
      },
      focused: {
        type: Boolean,
        required: true,
      },
      invalid: {
        type: Boolean,
        required: false,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    setup(props) {
      const fieldClasses = computed(() => ({
        "field--empty": props.empty,
        "field--focused": props.focused,
        "field--invalid": props.invalid,
        "field--disabled": props.disabled,
      }));

      return {
        fieldClasses,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";
  @import "src/scss/mixins";
  @import "src/scss/typography";

  .field {
    background-color: transparent;
    border-radius: $roundedDefault;
    border: $borderWidthDefault solid $colorNeutral5;
    padding: calc(#{spacing(3)} - #{$borderWidthDefault}) spacing(2)
      calc(#{spacing(3)} - #{$borderWidthDefault})
      calc(#{spacing(4)} - #{$borderWidthDefault});

    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-template-columns: min-content auto min-content;

    @include transitionDefault(border-color);

    &:hover:not(&--disabled):not(&--invalid):not(&--focused) {
      border-color: $colorNeutral4;
    }

    &--focused:not(&--disabled):not(&--invalid) {
      border-color: $colorPrimary;
    }

    &--invalid:not(&--disabled) {
      border-color: $colorDanger;
    }

    &--disabled {
      pointer-events: none;
      border-color: $backgroundDisabled;
      background-color: $backgroundDisabled;
    }

    &__prefix {
      justify-self: flex-start;

      &:not(&:empty) {
        margin-right: spacing(2);
      }
    }

    &__content {
      position: relative;
    }

    &__infix {
      display: flex;
    }

    &--empty:not(&--focused) &__label ~ &__infix {
      opacity: 0;
    }

    &__suffix {
      justify-self: flex-end;

      &:not(&:empty) {
        margin-left: spacing(2);
        padding-right: calc(#{spacing(1)} - #{$borderWidthDefault});
      }
    }

    &__label {
      @include fontBody();
      @include transitionFast(transform);

      position: absolute;
      transform: translate(0, 0);

      pointer-events: none;
      color: $colorNeutral3;
    }

    &--focused &__label,
    &:not(&--empty) &__label {
      @include fontCaption1();

      transform: translate(
        spacing(-2),
        calc(#{spacing(-5)} + #{$borderWidthDefault})
      );

      padding: 0 spacing(2);
      border-radius: $roundedDefault;

      background-color: $colorNeutral8;
    }

    &--focused:not(&--invalid) &__label,
    &:not(&--empty):not(&--invalid) &__label {
      color: $colorPrimary;
    }

    &--invalid &__label {
      color: $colorDanger;
    }

    &--disabled &__label {
      color: $colorNeutral1;
    }
  }

  .error {
    @include fontCaption1();
    color: $colorDanger;

    &:not(&:empty) {
      margin-top: spacing(1);
    }
  }

  .hint {
    @include fontCaption1();
    color: $colorNeutral3;

    &:not(&:empty) {
      margin-top: spacing(1);
    }
  }
</style>

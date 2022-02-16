<template>
  <div class="toggle-container">
    <label class="toggle-wrapper">
      <input
        type="checkbox"
        class="toggle"
        v-bind="$attrs"
        :checked="isChecked"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <span>
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AppCheckbox",
    inheritAttrs: false,
    emits: {
      "update:modelValue": null,
    },
    props: {
      modelValue: {
        type: Boolean,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    computed: {
      isChecked() {
        return this.modelValue;
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/toggles";

  input {
    border-radius: $roundedDefault;
    left: calculateRippleLeftPos($checkboxSize);

    // checked, indeterminate
    &:checked,
    &:indeterminate {
      background-color: $colorPrimary;

      & + span:before {
        border-color: $colorPrimary;
        background-color: $colorPrimary;
      }

      & + span:after {
        border-color: $colorNeutral8;
      }
    }

    &:indeterminate + span:after {
      border-left: none;
      transform: translate(4px, 3px);
    }

    // active
    &:active:checked + span:before {
      border-color: transparent;
      background-color: $colorPrimary;
    }

    // disabled
    &:disabled {
      & + span {
        cursor: initial;

        &:before {
          border-color: $backgroundNeutralDark;
        }
      }

      &:checked,
      &:indeterminate {
        & + span:before {
          background-color: $backgroundPrimaryDark;
          border-color: transparent;
        }
      }
    }
  }

  span {
    align-items: center;
    display: flex;
    width: 100%;
    cursor: pointer;

    // box
    &:before {
      content: "";
      display: block;
      box-sizing: border-box;
      margin-right: spacing(5);
      border-width: $checkboxBorderWidth;
      border-style: solid;
      border-color: $colorNeutral1;
      border-radius: $checkboxRadius;
      width: $checkboxSize;
      height: $checkboxSize;
      @include transitionDefault(border-color, background-color);
    }

    // checkmark
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 3px;
      left: 0;
      width: 10px;
      height: 5px;
      border: solid 2px transparent;
      border-right: none;
      border-top: none;
      transform: translate(3px, 4px) rotate(-45deg);
    }
  }
</style>

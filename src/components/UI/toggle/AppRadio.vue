<template>
  <div class="toggle-container">
    <label class="toggle-wrapper">
      <input
        type="radio"
        class="toggle"
        v-bind="$attrs"
        :value="value"
        :checked="isChecked"
        @change="$emit('update:modelValue', $event.target.value)"
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
    name: "AppRadio",
    inheritAttrs: false,
    emits: {
      "update:modelValue": null,
    },
    props: {
      modelValue: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
    computed: {
      isChecked() {
        return this.value === this.modelValue;
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/toggles";

  @function radioMarkTransform($scale) {
    @return translate(-50%, 50%) scale($scale);
  }

  input {
    border-radius: 50%;
    left: calculateRippleLeftPos($radioSize);

    // checked
    &:checked {
      background-color: $colorPrimary;

      & + span:before {
        border-color: $colorPrimary;
      }

      & + span:after {
        transform: radioMarkTransform(1);
      }
    }

    // disabled
    &:disabled {
      & + span {
        cursor: initial;

        &:before {
          border-color: $backgroundNeutral;
        }

        &:after {
          background-color: $backgroundPrimaryDark;
        }
      }

      &:checked + span:before {
        border-color: $backgroundPrimaryDark;
      }
    }
  }

  span {
    align-items: center;
    display: inline-flex;
    width: 100%;
    cursor: pointer;

    // circle
    &:before {
      content: "";
      display: inline-flex;
      box-sizing: border-box;
      margin-right: spacing(5);
      border-width: $checkboxBorderWidth;
      border-style: solid;
      border-color: $colorNeutral1;
      border-radius: 50%;
      width: $radioSize;
      height: $radioSize;
      @include transitionDefault(border-color);
    }

    // check
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 2px;
      left: calc(#{$radioSize} / 2);
      border-radius: 50%;
      width: calc(#{$radioSize} / 2);
      height: calc(#{$radioSize} / 2);
      background-color: $colorPrimary;
      transform: radioMarkTransform(0);
      @include transitionDefault(transform);
    }
  }
</style>

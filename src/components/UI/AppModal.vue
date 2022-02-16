<template>
  <teleport to="body">
    <vue-final-modal
      v-slot="{ params, close }"
      v-bind="$attrs"
      :content-class="contentClasses"
      classes="modal-root"
      overlay-class="modal-overlay"
    >
      <span class="modal__title">
        <slot name="title"></slot>
      </span>

      <div class="modal__content">
        <slot :params="params"></slot>
      </div>

      <div class="modal__action">
        <slot name="action" :close="close"></slot>
      </div>

      <app-button class="modal__close" size="sm" variant="noBg" @click="close">
        <template #icon>
          <svg-icon icon="close"></svg-icon>
        </template>
      </app-button>
    </vue-final-modal>
  </teleport>
</template>

<script lang="ts">
  import { computed, defineComponent, PropType } from "vue";

  type ModalSizes = "sm" | "md" | "lg";

  export default defineComponent({
    name: "AppModal",
    inheritAttrs: false,
    emits: {
      confirm: null,
      cancel: null,
    },
    props: {
      size: {
        type: String as PropType<ModalSizes>,
        default: "sm",
      },
    },
    setup: (props, { emit }) => {
      const confirm = (close: Function) => {
        emit("confirm", close);
      };

      const cancel = (close: Function) => {
        emit("cancel", close);
      };

      const contentClasses = computed(() => ({
        "modal-container": true,
        "modal-container--sm": props.size === "sm",
        "modal-container--md": props.size === "md",
        "modal-container--lg": props.size === "lg",
      }));

      return {
        cancel,
        confirm,
        contentClasses,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";
  @import "src/scss/typography";

  ::v-deep(.modal-overlay) {
    backdrop-filter: $backdropFilterModal;
  }

  ::v-deep(.modal-root) {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: spacing(8) 0;
  }

  ::v-deep(.modal-container) {
    border-radius: $rounded2xl;
    background: $keyBackgroundDark;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    margin: 0 spacing(6);
    position: relative;

    &.modal-container--sm {
      width: $modalSizeSmall;
    }

    &.modal-container--md {
      width: $modalSizeMedium;
    }

    &.modal-container--lg {
      width: $modalSizeLarge;
    }
  }

  .modal__title {
    border-bottom: $borderWidthDefault solid $backgroundNeutral;
    padding: spacing(12);
    @include fontTitleLarge;
  }

  .modal__content {
    flex-grow: 1;
    overflow-y: auto;
    padding: spacing(12);
  }

  .modal__action {
    align-items: center;
    border-top: $borderWidthDefault solid $backgroundNeutral;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    padding: spacing(12);
  }

  .modal__close {
    position: absolute;
    top: spacing(4);
    right: spacing(4);
  }
</style>

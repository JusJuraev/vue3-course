<template>
  <app-container>
    <div class="wrapper">
      <div class="wrapper__buttons">
        <app-button @click="showToast">
          {{ $i18n.t("button_show_toast") }}
        </app-button>
        <app-button>{{ $i18n.t("button_test") }}</app-button>
        <app-button variant-color="primary">
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button variant-color="secondary">
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button variant-color="primary" disabled>
          {{ $i18n.t("button_test") }}
        </app-button>
      </div>

      <div class="wrapper__buttons">
        <app-button variant-color="primary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button variant-color="secondary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button>
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button disabled>
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
          {{ $i18n.t("button_test") }}
        </app-button>
      </div>

      <div class="wrapper__buttons">
        <app-button variant="stroke">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button variant="stroke" variant-color="primary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button variant="stroke" variant-color="secondary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button variant="stroke" variant-color="primary" disabled>
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
          {{ $i18n.t("button_test") }}
        </app-button>
      </div>

      <div class="wrapper__buttons">
        <app-button variant="noBg">{{ $i18n.t("button_test") }}</app-button>
        <app-button variant="noBg" variant-color="primary">
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button variant="noBg" variant-color="secondary">
          {{ $i18n.t("button_test") }}
        </app-button>
        <app-button variant="noBg" variant-color="primary" disabled>
          {{ $i18n.t("button_test") }}
        </app-button>
      </div>

      <div class="wrapper__buttons">
        <app-button>
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant-color="primary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant-color="secondary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant-color="primary" disabled>
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
      </div>

      <div class="wrapper__buttons">
        <app-button variant="stroke">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant="stroke" variant-color="primary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant="stroke" variant-color="secondary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant="stroke" variant-color="primary" disabled>
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
      </div>

      <div class="wrapper__buttons">
        <app-button variant="noBg">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant="noBg" variant-color="primary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant="noBg" variant-color="secondary">
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
        <app-button variant="noBg" variant-color="primary" disabled>
          <template #icon>
            <svg-icon icon="favorite_border"></svg-icon>
          </template>
        </app-button>
      </div>
    </div>
  </app-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useToast } from "vue-toastification";
  import AppToast from "@/components/UI/AppToast.vue";

  export default defineComponent({
    name: "Main",

    setup: () => {
      const toast = useToast();

      const showToast = () => {
        toast.success({
          component: AppToast,
          props: { message: "Hello" },
        });
      };

      return {
        showToast,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";
  @import "src/scss/typography";
  @import "src/scss/mixins";

  .wrapper {
    @include postfix(display, grid);
    grid-gap: spacing(6);
    margin-top: spacing(16);

    &__buttons {
      display: flex;
      column-gap: spacing(4);
    }
  }
</style>

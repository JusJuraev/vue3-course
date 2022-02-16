<template>
  <app-container>
    <app-button @click="onOpenModal">
      {{ $i18n.t("modal_open_button") }}
    </app-button>

    <app-modal v-model="showModal" @confirm="onConfirm" @cancel="onCancel">
      <template #title>{{ $i18n.t("modal_title") }}</template>

      {{ $i18n.t("modal_content") }}

      <template #action="{ close }">
        <app-button
          class="action-button"
          size="lg"
          variantColor="primary"
          full-width
          @click="close"
        >
          {{ $i18n.t("modal_save_button") }}
        </app-button>
      </template>
    </app-modal>
  </app-container>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import AppModal from "@/components/UI/AppModal.vue";

  export default defineComponent({
    name: "Modal",
    components: { AppModal },

    setup: () => {
      const showModal = ref(false);

      const onOpenModal = () => {
        showModal.value = true;
      };

      const onConfirm = (close: Function) => {
        // some code...
        close();
      };

      const onCancel = (close: Function) => {
        // some code...
        close();
      };

      return {
        showModal,
        onOpenModal,
        onConfirm,
        onCancel,
      };
    },
  });
</script>

<style lang="scss" scoped></style>

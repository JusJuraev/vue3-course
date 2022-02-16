<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AppToast",
    props: {
      message: {
        type: String,
        required: true,
      },
    },
  });
</script>

<style lang="scss" scoped></style>

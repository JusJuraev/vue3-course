<template>
  <app-container>
    <app-input
      name="firstName"
      placeholder="First Name"
      v-model="firstName"
    ></app-input>

    <app-input
      name="lastName"
      placeholder="Last Name"
      v-model="lastName"
    ></app-input>
  </app-container>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Inputs",
    setup: () => {
      const firstName = ref("");
      const lastName = ref("");

      return {
        firstName,
        lastName,
      };
    },
  });
</script>

<style lang="scss" scoped></style>

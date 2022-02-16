<template>
  <app-container>
    <app-checkbox name="test1" v-model="test1">Check me!</app-checkbox>

    <div class="radio-wrap">
      <app-radio value="hello" name="test2" v-model="test2">
        Radio 1
      </app-radio>

      <app-radio value="world" name="test2" v-model="test2">
        Radio 2
      </app-radio>
    </div>

    <div>Checkbox value: {{ test1 }}</div>
    <div>Radio button value: {{ test2 }}</div>
  </app-container>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Checkboxes",
    setup: () => {
      const test1 = ref(true);
      const test2 = ref("hello");

      return {
        test1,
        test2,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/functions";

  .radio-wrap {
    display: flex;
    column-gap: spacing(4);
  }
</style>

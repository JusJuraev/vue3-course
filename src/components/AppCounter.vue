<template>
  <app-container size="sm" class="counter">
    <div class="counter__buttons">
      <app-button @click="decrement">Decrement</app-button>
      <div class="counter__value">
        <div>Counter: {{ counter }}</div>
        <div>Double Counter: {{ doubleCounter }}</div>
      </div>
      <app-button @click="increment">Increment</app-button>
    </div>
  </app-container>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue"
  import { useStore } from "@/store"

  export default defineComponent({
    name: "AppCounter",
    setup: () => {
      const store = useStore()

      const increment = () => store.dispatch("counter/increment")
      const decrement = () => store.dispatch("counter/decrement")
      const counter = computed(() => store.getters["counter/counter"])
      const doubleCounter = computed(
        () => store.getters["counter/doubleCounter"]
      )

      return {
        counter,
        doubleCounter,
        increment,
        decrement
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/mixins";
  @import "src/scss/typography";

  .counter {
    &__value {
      @include fontHeadline;
      text-align: center;
    }

    &__buttons {
      @include flex(center, space-between);
    }
  }
</style>

<template>
  <div class="post">
    <div class="post__title">
      {{ title }}
    </div>
    <div class="post__body">
      {{ body }}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue"

  export default defineComponent({
    name: "Post",
    props: {
      title: String as PropType<string>,
      body: String as PropType<string>
    }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/typography";
  @import "src/scss/mixins";

  .post {
    border-radius: $roundedDefault;
    border: 2px solid $colorSecondary;
    padding: spacing(4) spacing(5);

    &__title {
      @include fontTitle3;
      @include linesCount(1);
      margin-bottom: spacing(1);
    }

    &__body {
      @include linesCount(2);
    }
  }
</style>

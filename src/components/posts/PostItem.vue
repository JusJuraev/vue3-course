<template>
  <div class="post">
    <div class="post__title">
      <router-link :to="postDetailLink">
        {{ title }}
      </router-link>
    </div>
    <div class="post__body">
      {{ body }}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Post",
    props: {
      id: Number,
      title: String,
      body: String,
    },
    computed: {
      postDetailLink() {
        return {
          name: "PostDetail",
          params: { id: this.id },
        };
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/typography";
  @import "src/scss/mixins";

  .post {
    border-radius: $roundedDefault;
    border: $borderWidthDefault solid $colorSecondary;
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

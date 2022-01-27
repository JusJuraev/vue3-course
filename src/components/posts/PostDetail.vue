<template>
  <app-container size="sm">
    <p v-if="loading">Loading post...</p>

    <template v-else>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </template>
  </app-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { usePostDetail } from "@/hooks/usePostDetail"

  export default defineComponent({
    name: "PostDetail",
    setup: () => {
      const { post, loading } = usePostDetail()

      return {
        post,
        loading
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/functions";

  h1 {
    margin-bottom: spacing(4);
  }
</style>

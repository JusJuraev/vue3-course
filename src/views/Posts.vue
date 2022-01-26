<template>
  <app-container class="custom-container">
    <div v-if="loading">Loading...</div>
    <div v-else class="posts">
      <post-item
        :key="post.id"
        v-for="post of posts"
        :title="post.title"
        :body="post.body"
      />
    </div>

    <the-pagination v-if="!loading" :total="total" />
  </app-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { usePosts } from "@/hooks/usePosts"
  import ThePagination from "@/components/ThePagination.vue"
  import PostItem from "@/components/posts/PostItem.vue"

  export default defineComponent({
    name: "Posts",
    components: {
      ThePagination,
      PostItem
    },

    setup: () => {
      const { posts, loading, total } = usePosts()

      return {
        posts,
        loading,
        total
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";

  .custom-container {
    max-width: $containerMedium;
  }

  .posts {
    display: grid;
    grid-gap: spacing(4);
    grid-template-columns: repeat(2, 1fr);
  }
</style>

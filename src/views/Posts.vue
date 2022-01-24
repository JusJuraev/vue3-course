<template>
  <jus-container class="custom-container">
    <div v-if="loading">Loading...</div>
    <div v-else class="posts">
      <post
        :key="post.id"
        v-for="post of posts"
        :title="post.title"
        :body="post.body"
      />
    </div>

    <pagination v-if="!loading" :total="total" />
  </jus-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { usePosts } from "@/hooks/usePosts"
  import Pagination from "@/components/Pagination.vue"
  import Post from "@/components/Post.vue"

  export default defineComponent({
    name: "Posts",
    components: {
      Pagination,
      Post
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

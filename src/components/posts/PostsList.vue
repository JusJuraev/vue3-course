<template>
  <app-container size="md">
    <div v-if="postsData.loading">Loading...</div>
    <div v-else class="posts">
      <post-item
        v-for="post of postsData.data"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :body="post.body"
      />
    </div>

    <the-pagination :total="postsData.total" />
  </app-container>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { usePosts } from "@/hooks/usePosts"
  import ThePagination from "@/components/ThePagination.vue"
  import PostItem from "@/components/posts/PostItem.vue"

  export default defineComponent({
    name: "PostsList",
    components: {
      ThePagination,
      PostItem
    },
    setup: () => {
      const postsData = usePosts()

      return {
        postsData
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";

  .posts {
    display: grid;
    grid-gap: spacing(4);
    grid-template-columns: repeat(2, 1fr);
  }
</style>

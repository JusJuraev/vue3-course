import { computed, onMounted, watch, ComputedRef } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "@/store"
import { PostItem } from "@/types/posts"
import { ListDataGetter } from "@/types/vuex"

export function usePosts(): ComputedRef<ListDataGetter<PostItem>> {
  const store = useStore()
  const route = useRoute()
  const listData = computed(() => store.getters["posts/postListData"])

  function fetchPosts(page: string) {
    store.dispatch("posts/fetchPostList", { _limit: 10, _page: page })
  }

  onMounted(() => {
    fetchPosts(route.query.page as string)
  })

  watch(
    () => route.query.page,
    (page) => {
      page && fetchPosts(page as string)
    }
  )

  return listData
}

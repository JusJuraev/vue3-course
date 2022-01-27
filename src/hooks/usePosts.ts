import { onMounted, Ref, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useRequest } from "@/hooks/useRequest"
import { PostItem } from "@/types/posts"

interface UsePosts {
  posts: Ref<PostItem[]>
  loading: Ref<boolean>
  total: Ref<number>
}

export function usePosts(): UsePosts {
  const route = useRoute()
  const posts = ref<PostItem[]>([])
  const loading = ref(false)
  const total = ref(0)

  const request = useRequest()

  function getPosts(page: string) {
    loading.value = true
    request
      .get<PostItem[]>(`/posts`, { _limit: 10, _page: page })
      .then((resp) => {
        posts.value = resp.data
        total.value = +resp.headers["x-total-count"]
      })
      .finally(() => {
        loading.value = false
      })
  }

  onMounted(() => {
    getPosts(route.query.page as string)
  })

  watch(
    () => route.query.page,
    (page) => {
      page && getPosts(page as string)
    }
  )

  return {
    posts,
    loading,
    total
  }
}

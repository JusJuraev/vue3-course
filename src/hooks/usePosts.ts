import { onMounted, Ref, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { injectStrict } from "@/helpers/injectStrict"
import { AxiosKey } from "@/constants/symbols"
import { Posts } from "@/types/posts"
import { POST_LIST } from "@/constants/endpoints"

interface UsePosts {
  posts: Ref<Posts[]>
  loading: Ref<boolean>
  total: Ref<number>
}

export function usePosts(): UsePosts {
  const route = useRoute()
  const request = injectStrict(AxiosKey)
  const posts = ref<Posts[]>([])
  const loading = ref(false)
  const total = ref(0)

  function getPosts(page: string) {
    loading.value = true
    request
      .get<Posts[]>(POST_LIST, {
        params: { _limit: 10, _page: page }
      })
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
      getPosts(page as string)
    }
  )

  return {
    posts,
    loading,
    total
  }
}

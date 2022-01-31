import { PostsGetters } from "@/store/posts/types"

const getters: PostsGetters = {
  postListData: (state) => {
    return { ...state.list }
  }
}

export default getters

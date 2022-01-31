import { AxiosError } from "axios"
import { PostsActions, PostsMutationTypes } from "@/store/posts/types"
import request from "@/helpers/request"
import { PostItem } from "@/types/posts"

const actions: PostsActions = {
  fetchPostList: ({ commit }, params) => {
    commit(PostsMutationTypes.POST_LIST_PENDING, undefined)

    request
      .get<PostItem[]>("/posts", { params })
      .then((response) => {
        const total = +response.headers["x-total-count"]
        commit(PostsMutationTypes.POST_LIST_FULFILLED, {
          data: response.data,
          total
        })
      })
      .catch((error: AxiosError) => {
        commit(PostsMutationTypes.POST_LIST_REJECTED, error.message)
      })
  }
}

export default actions

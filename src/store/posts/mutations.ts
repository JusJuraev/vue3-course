import { PostsMutations } from "@/store/posts/types"

const mutations: PostsMutations = {
  postListPending: (state) => {
    state.list.loading = true
    state.list.error = null
  },
  postListFulfilled: (state, payload) => {
    state.list.data = payload.data
    state.list.total = payload.total
    state.list.loading = false
    state.list.error = null
  },
  postListRejected: (state, payload) => {
    state.list.loading = false
    state.list.data = []
    state.list.error = payload
    state.list.total = 0
  }
}

export default mutations

import { PostsMutations, PostsMutationTypes } from "@/store/posts/types";

const mutations: PostsMutations = {
  [PostsMutationTypes.POST_LIST_PENDING]: (state) => {
    state.list.loading = true;
    state.list.error = null;
  },
  [PostsMutationTypes.POST_LIST_FULFILLED]: (state, payload) => {
    state.list.data = payload.data;
    state.list.total = payload.total;
    state.list.loading = false;
    state.list.error = null;
  },
  [PostsMutationTypes.POST_LIST_REJECTED]: (state, payload) => {
    state.list.loading = false;
    state.list.data = [];
    state.list.error = payload;
    state.list.total = 0;
  },
};

export default mutations;

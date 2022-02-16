import { PostsGetters, PostsGetterTypes } from "@/store/posts/types";

const getters: PostsGetters = {
  [PostsGetterTypes.POST_LIST_DATA]: (state) => {
    return { ...state.list };
  },
};

export default getters;

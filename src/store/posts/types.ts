import { ActionTree, GetterTree, MutationTree } from "vuex"
import { AugmentedActionContext, RootState } from "@/store/types"
import { PostItem } from "@/types/posts"
import { ListDataGetter } from "@/types/vuex"

export interface PostsState {
  list: ListDataGetter<PostItem>
}

export enum PostsActionTypes {
  FETCH_POST_LIST = "fetchPostList"
}

export enum PostsMutationTypes {
  POST_LIST_PENDING = "postListPending",
  POST_LIST_FULFILLED = "postListFulfilled",
  POST_LIST_REJECTED = "postListRejected"
}

export interface PostsMutations extends MutationTree<PostsState> {
  [PostsMutationTypes.POST_LIST_PENDING](state: PostsState): void
  [PostsMutationTypes.POST_LIST_FULFILLED](
    state: PostsState,
    payload: {
      data: PostItem[]
      total: number
    }
  ): void
  [PostsMutationTypes.POST_LIST_REJECTED](
    state: PostsState,
    payload: string
  ): void
}

export type PostsActionContext = AugmentedActionContext<
  PostsMutations,
  PostsState
>

export interface PostsActions extends ActionTree<PostsState, RootState> {
  [PostsActionTypes.FETCH_POST_LIST](
    context: PostsActionContext,
    params?: Record<string, any>
  ): void
}

export interface PostsGetters extends GetterTree<PostsState, RootState> {
  postListData(state: PostsState): ListDataGetter<PostItem>
}

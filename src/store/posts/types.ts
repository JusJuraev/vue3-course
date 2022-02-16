import { ActionTree, DispatchOptions, GetterTree, MutationTree } from "vuex";
import {
  AugmentedActionContext,
  ModuleCommit,
  ModuleGetters,
  ModuleVuexStore,
  RootState,
} from "@/store/types";
import { PostItem } from "@/types/posts";
import { ListDataGetter, DetailDataGetter } from "@/types/vuex";

export type PostsState = {
  list: ListDataGetter<PostItem>;
  item: DetailDataGetter<PostItem | null>;
};

export enum PostsActionTypes {
  FETCH_POST_LIST = "fetchPostList",
  FETCH_POST_DETAIL = "fetchPostDetail",
}

export enum PostsMutationTypes {
  POST_LIST_PENDING = "postListPending",
  POST_LIST_FULFILLED = "postListFulfilled",
  POST_LIST_REJECTED = "postListRejected",
}

export enum PostsGetterTypes {
  POST_LIST_DATA = "postListData",
}

export interface PostsMutations extends MutationTree<PostsState> {
  [PostsMutationTypes.POST_LIST_PENDING](state: PostsState): void;
  [PostsMutationTypes.POST_LIST_FULFILLED](
    state: PostsState,
    payload: {
      data: PostItem[];
      total: number;
    }
  ): void;
  [PostsMutationTypes.POST_LIST_REJECTED](
    state: PostsState,
    payload: string
  ): void;
}

export type PostsActionContext = AugmentedActionContext<
  PostsMutations,
  PostsState
>;

type Actions = {
  [PostsActionTypes.FETCH_POST_LIST](
    context: PostsActionContext,
    payload: Record<string, any>
  ): void;
  [PostsActionTypes.FETCH_POST_DETAIL](context: PostsActionContext): void;
};

export type PostsActions = Actions & ActionTree<PostsState, RootState>;

export interface PostsGetters extends GetterTree<PostsState, RootState> {
  [PostsGetterTypes.POST_LIST_DATA](
    state: PostsState
  ): ListDataGetter<PostItem>;
}

export interface PostsStore<S>
  extends ModuleVuexStore<S>,
    ModuleCommit<PostsState, PostsMutations>,
    ModuleGetters<PostsState, PostsGetters> {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
}

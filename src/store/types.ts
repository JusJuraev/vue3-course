import { ActionContext } from "vuex"
import { CounterState } from "@/store/counter/types"
import { PostsState } from "@/store/posts/types"

export interface RootState {
  counter: CounterState
  posts: PostsState
}

export interface AugmentedActionContext<
  Mutations extends Record<string, any>,
  State
> extends Omit<ActionContext<State, RootState>, "commit"> {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

import { ActionContext } from "vuex"
import { CounterState } from "./counter/types"

export interface RootState {
  counter: CounterState
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

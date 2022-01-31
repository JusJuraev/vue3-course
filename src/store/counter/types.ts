import { ActionTree, MutationTree } from "vuex"
import { AugmentedActionContext, RootState } from "@/store/types"

export interface CounterState {
  counter: number
}

export enum CounterActionTypes {
  INCREMENT = "increment",
  DECREMENT = "decrement"
}

export enum CounterMutationTypes {
  SET_COUNTER = "setCounter"
}

export type CounterActionContext = AugmentedActionContext<
  CounterMutations,
  CounterState
>

export interface CounterMutations extends MutationTree<CounterState> {
  [CounterMutationTypes.SET_COUNTER](state: CounterState, payload: number): void
}

export interface CounterActions extends ActionTree<CounterState, RootState> {
  [CounterActionTypes.INCREMENT](context: CounterActionContext): void
  [CounterActionTypes.DECREMENT](context: CounterActionContext): void
}

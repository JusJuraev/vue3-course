import { CounterActions, CounterMutationTypes } from "@/store/counter/types"

const actions: CounterActions = {
  increment: ({ commit, state }) => {
    commit(CounterMutationTypes.SET_COUNTER, state.counter + 1)
  },
  decrement: ({ commit, state }) => {
    commit(CounterMutationTypes.SET_COUNTER, state.counter - 1)
  }
}

export default actions

import { CounterMutations } from "@/store/counter/types"

const mutations: CounterMutations = {
  setCounter: (state, payload: number) => {
    state.counter = payload
  }
}

export default mutations

import { CounterMutations } from "@/store/counter/types"

const mutationsSimple: CounterMutations = {
  setCounter: (state, payload: number) => {
    state.counter = payload
  }
}

export default mutationsSimple

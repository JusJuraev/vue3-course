import { GetterTree } from "vuex"
import { RootState } from "@/store/types"
import { CounterState } from "@/store/counter/types"

const getters: GetterTree<CounterState, RootState> = {
  counter: (state) => {
    return state.counter
  },
  doubleCounter: (state) => {
    return state.counter * 2
  }
}

export default getters

import { Module } from "vuex"
import { RootState } from "@/store/types"
import { CounterState } from "./types"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

const counterModule: Module<CounterState, RootState> = {
  namespaced: true,
  state: () => ({
    counter: 0
  }),
  actions,
  getters,
  mutations
}

export default counterModule

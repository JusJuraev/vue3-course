import { Module } from "vuex"
import { RootState } from "@/store/types"
import { PostsState } from "./types"
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

const counterModule: Module<PostsState, RootState> = {
  namespaced: true,
  state: () => ({
    list: {
      data: [],
      loading: false,
      error: null,
      total: 0
    }
  }),
  actions,
  getters,
  mutations
}

export default counterModule

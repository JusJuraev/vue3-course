import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from "vuex"
import { RootState } from "./types"

import counter from "./counter"
import posts from "./posts"

export const store = createStore({
  modules: {
    counter,
    posts
  }
})

export const key: InjectionKey<Store<RootState>> = Symbol()

export function useStore() {
  return baseUseStore(key)
}

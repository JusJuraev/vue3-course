import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { RootState, RootStore } from "./types";
import posts from "./posts";

export const store = createStore({
  modules: {
    posts,
  },
});

export const key: InjectionKey<Store<RootState>> = Symbol();

export function useStore(): RootStore {
  return baseUseStore(key);
}

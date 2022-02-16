import { computed, ComputedRef, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import { PostItem } from "@/types/posts";
import { ListDataGetter } from "@/types/vuex";
import { PostsActionTypes, PostsGetterTypes } from "@/store/posts/types";

export function usePosts(): ComputedRef<ListDataGetter<PostItem>> {
  const store = useStore();
  const route = useRoute();
  const listData = computed(
    () => store.getters[PostsGetterTypes.POST_LIST_DATA]
  );

  function fetchPosts(page: string) {
    store.dispatch(PostsActionTypes.FETCH_POST_LIST, {
      _limit: 10,
      _page: page,
    });
  }

  onMounted(() => {
    fetchPosts(route.query.page as string);
  });

  watch(
    () => route.query.page,
    (page) => {
      page && fetchPosts(page as string);
    }
  );

  return listData;
}

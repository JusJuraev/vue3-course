import { useRoute } from "vue-router";
import { onMounted, Ref, ref, watch } from "vue";
import { useRequest } from "@/hooks/useRequest";
import { PostItem } from "@/types/posts";

interface UsePostDetail {
  post: Ref<PostItem>;
  loading: Ref<boolean>;
}

export function usePostDetail(): UsePostDetail {
  const route = useRoute();
  const post = ref<PostItem>({} as PostItem);
  const loading = ref(false);
  const request = useRequest();

  function getPost(id: string) {
    loading.value = true;
    request
      .get<PostItem>(`/posts/${id}`)
      .then((resp) => {
        post.value = resp.data;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  onMounted(() => {
    getPost(route.params.id as string);
  });

  watch(
    () => route.params.id,
    (id) => {
      id && getPost(id as string);
    }
  );

  return {
    post,
    loading,
  };
}

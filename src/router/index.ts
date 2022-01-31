import { createRouter, createWebHistory } from "vue-router"
import Main from "@/views/Main.vue"
import Inputs from "@/views/Inputs.vue"
import Posts from "@/views/Posts.vue"
import PostsList from "@/components/posts/PostsList.vue"
import PostDetail from "@/components/posts/PostDetail.vue"

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/posts",
      component: Posts,
      children: [
        {
          path: "",
          name: "Posts",
          component: PostsList
        },
        {
          path: ":id",
          name: "PostDetail",
          component: PostDetail
        }
      ]
    },
    {
      path: "/inputs",
      name: "Inputs",
      component: Inputs
    }
  ]
})

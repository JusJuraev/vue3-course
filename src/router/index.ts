import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Main from "@/views/Main.vue"
import Posts from "@/views/Posts.vue"
import Inputs from "@/views/Inputs.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/inputs",
    name: "Inputs",
    component: Inputs
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

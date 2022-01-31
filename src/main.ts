import { createApp } from "vue"
import VueFeather from "vue-feather"

import App from "./App.vue"
import request from "@/helpers/request"
import { AxiosKey } from "@/constants/symbols"
import { router } from "@/router"
import { store, key } from "@/store"
import UIComponents from "@/components/UI"

const app = createApp(App)

// initialize custom UI components globally
UIComponents.forEach((component) => {
  app.component(component.name, component)
})

// initialize feather icons
app.component(VueFeather.name as string, VueFeather)

app.use(router)
app.use(store, key)
app.provide(AxiosKey, request)
app.mount("#app")

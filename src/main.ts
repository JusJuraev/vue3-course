import { createApp } from "vue";
import VueFinalModal from "vue-final-modal";
import Toast from "vue-toastification";

import "@/scss/toaster.scss";
import App from "@/App.vue";
import request from "@/helpers/request";
import { AxiosKey } from "@/constants/symbols";
import { toastOptions } from "@/constants/toastOptions";
import i18n from "@/locales/i18n";
import { router } from "@/router";
import { key, store } from "@/store";
import UIComponents from "@/components/UI";

const app = createApp(App);

// initialize custom UI components globally
UIComponents.forEach((component) => {
  app.component(component.name, component);
});

// initialize modal
app.use(VueFinalModal);

// initialize toaster
app.use(Toast, toastOptions);

// initialize i18n
app.use(i18n);

app.use(router);
app.use(store, key);
app.provide(AxiosKey, request);
app.mount("#app");

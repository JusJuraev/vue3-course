import { Router } from "vue-router";
import { RootStore } from "@/store/types";

export interface InstalledPlugins {
  $store: RootStore;
  $router: Router;
}

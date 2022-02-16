import { RootStore } from "@/store/types";
import { Logger } from "@/services/logger";
import { ErrorHandler } from "@/services/errorHandler";
import { AppConfig } from "@/services/appConfig";
import { InstalledPlugins } from "@/vue-component-types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties extends InstalledPlugins {
    // services
    $logger: Logger;
    $errorHandler: ErrorHandler;
    $appConfig: AppConfig;

    // provide typings for `this.$store`
    $store: RootStore;
  }
}

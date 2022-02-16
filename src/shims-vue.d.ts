import DependencyContainer from "tsyringe/dist/typings/types/dependency-container";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare global {
  interface Window {
    $container: DependencyContainer;
  }
}

<template>
  <nav class="navbar">
    <app-container>
      <div class="navbar__items">
        <router-link to="/">Home</router-link>
        <router-link to="/inputs">Inputs</router-link>
        <router-link to="/posts">Posts</router-link>
      </div>
    </app-container>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "Navbar",
    components: {}
  })
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";
  @import "src/scss/mixins";
  @import "src/scss/typography";

  .navbar {
    @include flex(center);
    background: $colorPrimary;
    color: white;
    height: spacing(18);

    &__items {
      @include flex(center, center);
      column-gap: spacing(3);

      a {
        color: inherit;
        font-weight: $fontMedium;
        text-decoration: none;

        &.router-link-active {
          color: $colorSecondary;
        }
      }
    }
  }
</style>

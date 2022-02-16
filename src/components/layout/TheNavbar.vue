<template>
  <nav class="navbar">
    <app-container>
      <div class="navbar__items">
        <router-link :to="{ name: 'Main' }">Home</router-link>
        <router-link :to="{ name: 'Inputs' }">Inputs</router-link>
        <router-link :to="{ name: 'Modal' }">Modal</router-link>
        <router-link :to="{ name: 'Checkboxes' }">Checkboxes</router-link>
        <router-link :to="{ name: 'Posts' }">Posts</router-link>
      </div>
    </app-container>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Navbar",
  });
</script>

<style lang="scss" scoped>
  @import "src/scss/variables";
  @import "src/scss/functions";
  @import "src/scss/mixins";
  @import "src/scss/typography";

  .navbar {
    align-items: center;
    background: $colorPrimary;
    color: $colorNeutral8;
    display: flex;
    height: spacing(18);

    &__items {
      align-items: center;
      column-gap: spacing(3);
      display: flex;
      justify-content: center;

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

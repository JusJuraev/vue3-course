<template>
  <the-navbar />

  <div class="content">
    <router-view />
  </div>
</template>

<script>
  import TheNavbar from "@/components/layout/TheNavbar";

  export default {
    name: "App",
    components: { TheNavbar },
  };
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap");
  @import "scss/variables";
  @import "scss/functions";
  @import "scss/typography";
  @import "scss/mixins";

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    @include fontBody;
    font-family: "Inter", sans-serif;
    height: 100%;
    width: 100%;
  }

  a {
    @include transitionDefault(color);
    color: $colorPrimary;
    text-decoration: none;

    &:hover,
    &:active {
      text-decoration: underline;
    }

    &:active {
      color: $colorPrimaryHover;
    }

    &:focus {
      color: $colorPrimaryPressed;
      outline: none;
    }
  }

  h1 {
    @include fontTitleLarge;
  }

  h2 {
    @include fontTitle1;
  }

  h3 {
    @include fontTitle2;
  }

  .content {
    padding: spacing(6) 0;
  }
</style>

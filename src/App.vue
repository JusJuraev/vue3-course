<template>
  <navbar />

  <div class="content">
    <router-view />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar"
  export default {
    name: "App",
    components: { Navbar }
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap");
  @import "scss/functions";
  @import "scss/typography";

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

  .content {
    padding: spacing(6) 0;
  }
</style>

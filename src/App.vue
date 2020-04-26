<template>
  <div id="app">
    <div class="loader">
      <div class="loader-inner">
        <svg
          width="120"
          height="220"
          viewbox="0 0 100 100"
          class="loading-spinner"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="spinner"
            cx="50"
            cy="50"
            r="21"
            fill="#ffffff"
            stroke-width="3"
          />
        </svg>
      </div>
    </div>
    <div class="wrapper">
      <NavBar></NavBar>
      <router-view />
      <div class="col-12" style="height:50px"></div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/webfonts/fonts.scss";
@import "@/assets/style/my.scss";
@import "~bootstrap/scss/bootstrap.scss";
@import "@/assets/style/main.scss";
</style>
<script>
export default {
  name: "App",
  mounted() {
    this.loader();
  },
  methods: {
    loader: () => {
      window.$(window).on("load", function() {
        window.$(".loader-inner").fadeOut();
        window
          .$(".loader")
          .delay(200)
          .fadeOut("slow");
      });
    }
  }
};
</script>

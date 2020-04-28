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
      <NavBar />
      <router-view />
      <div class="col-12 my-1"></div>
      <Footer v-if="viewFooter" />
      <a class="scroll-to-top scroll" href="#" @click="upClick">
        <span class=" fas fa-arrow-up top-icon "></span>
      </a>
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
import smoothScroll from "jquery-smooth-scroll";
window.$ = smoothScroll;

export default {
  name: "App",
  data() {
    return {
      viewFooter: true
    };
  },
  mounted() {
    this.loader();
    this.loaderFooter();
    this.scrollLink();
  },
  updated() {
    this.loaderFooter();
    this.scrollLink();
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
      window.$("a.scroll").smoothScroll({
        speed: 800,
        offset: -71,
        scrollTarget: "#wrapper"
      });
    },
    loaderFooter() {
      var pathname = window.location.pathname;
      console.log("pathname: " + pathname);
      if (pathname == "/maps" || pathname == "/") {
        this.viewFooter = false;
      } else {
        this.viewFooter = true;
      }
    },
    scrollLink() {
      window.$(window).scroll(function() {
        if (window.$(this).scrollTop() > 100) {
          window.$(".scroll-to-top").addClass("active");
        } else {
          window.$(".scroll-to-top").removeClass("active");
        }
      });
    },
    upClick() {
      window.$.smoothScroll("-=" + window.$(window).height());
    }
  }
};
</script>

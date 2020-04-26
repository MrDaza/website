<template>
  <header class="header default border-bottom bg-primary border-primary">
    <div class="header-section">
      <div class="container ">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <div class="d-inline-flex">
              <router-link to="/" class="nav-link">
                <img
                  src="@/assets/images/CovidDataProject_100x100.png"
                  width="60"
                  height="60"
                  class="d-inline-block"
                  alt="CovidDataProject"
                />
              </router-link>
              <div class="d-flex flex-column">
                <a
                  href="/"
                  class="nav-link font-weight-bold display-6 text-white"
                >
                  The Covid-19
                  <br />
                  Colombia Project
                </a>
              </div>
              <button
                class="navbar-toggler text-white"
                type="button"
                data-toggle="collapse"
                data-target="#navBarMobile"
                aria-controls="navBarMobile"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon fa fa-align-justify"></span>
              </button>
            </div>
          </a>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navBarMobile"
          >
            <ul class="navbar-nav">
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/"
                  href="#"
                  class="nav-link font-weight-bold text-white"
                  exact
                >
                  Home
                </router-link>
              </li>
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/notices"
                  href="#"
                  class="nav-link font-weight-bold text-white"
                  exact
                >
                  Notices
                </router-link>
              </li>
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/about"
                  href="#"
                  class="nav-link font-weight-bold text-white"
                  exact
                >
                  About Us
                </router-link>
              </li>
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/team"
                  href="#"
                  class="nav-link font-weight-bold text-white"
                  exact
                >
                  Our Team
                </router-link>
              </li>
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/proposes"
                  href="#"
                  class="nav-link font-weight-bold text-white"
                  exact
                >
                  Our Proposes
                </router-link>
              </li>
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/contribution"
                  href="#"
                  class="nav-link font-weight-bold text-white"
                  exact
                >
                  How to Contribution
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  mounted() {
    this.clickMenu();
  },
  methods: {
    clickMenu() {
      /*
      var URLactual = window.location;
      console.log("URLactual: " + URLactual);
      URLactual = window.location.href;
      console.log("URLactual: " + URLactual);
      var pathname = window.location.pathname;
      console.log("pathname: " + pathname);
      var URLdomain = window.location.host;
      console.log("URLdomain: " + URLdomain);
      var URLhash = window.location.hash;
      console.log("URLhash: " + URLhash);
      */
      //var pathname = window.location.pathname;
      //console.log("pathname: " + pathname);
      /*if (
        pathname == "/proposes" ||
        pathname == "/proposes/novel_coronavirus" ||
        pathname == "/proposes/app_covid19" ||
        pathname == "/proposes/novel_causal_analysis" ||
        pathname == "/proposes/visual_dashboard"
      ) {
        window.$("#navbarDropdown").addClass("active-secondary");
      } else {
        window.$("#navbarDropdown").removeClass("active-secondary");
      }*/
      window.$("#navBarMobile").collapse("hide");
    }
  }
};
</script>

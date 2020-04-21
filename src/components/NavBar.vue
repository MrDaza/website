<template>
  <header class="header default border-bottom">
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
                  class="d-inline-block align-top"
                  alt="CovidDataProject"
                />
              </router-link>
              <div class="d-flex flex-column">
                <router-link to="/" class="nav-link">
                  The Covid-19
                  <br />
                  Colombia Project
                </router-link>
              </div>
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navBarMobile"
            aria-controls="navBarMobile"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon fa fa-align-justify"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navBarMobile"
          >
            <ul class="navbar-nav">
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/"
                  href="#"
                  class="nav-link font-weight-bold"
                  exact
                >
                  Home
                </router-link>
              </li>
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/about"
                  href="#"
                  class="nav-link font-weight-bold"
                  exact
                >
                  About Us
                </router-link>
              </li>
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/team"
                  href="#"
                  class="nav-link font-weight-bold"
                  exact
                >
                  Who is our team?
                </router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle font-weight-bold"
                  href="/proposes"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Proposes
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  v-on:click="clickMenu"
                >
                  <router-link
                    to="/proposes/novel_coronavirus"
                    class="dropdown-item"
                    href="#"
                  >
                    <span>Novel Coronavirus (2019-nCoV) </span>
                    <span class="d-none d-sm-inline">Data Repository</span>
                  </router-link>
                  <router-link
                    to="/proposes/app_covid19"
                    class="dropdown-item"
                    href="#"
                  >
                    App Covid19 Colombia
                  </router-link>
                  <router-link
                    to="/proposes/novel_causal_analysis"
                    class="dropdown-item"
                    href="#"
                  >
                    <span>A novel causal analysis of Colombia </span>
                    <span class="d-none d-sm-inline">COVID-19 deaths</span>
                  </router-link>
                  <router-link
                    to="/proposes/visual_dashboard"
                    class="dropdown-item"
                    href="#"
                  >
                    COVID-19 Colombia Visual Dashboard
                  </router-link>
                  <div class="dropdown-divider"></div>
                  <router-link
                    to="/proposes"
                    href="#"
                    class="dropdown-item"
                    exact
                  >
                    Our Proposes
                  </router-link>
                </div>
              </li>
              <li class="nav-item" v-on:click="clickMenu">
                <router-link
                  to="/contribution"
                  href="#"
                  class="nav-link font-weight-bold"
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
      var pathname = window.location.pathname;
      console.log("pathname: " + pathname);
      if (
        pathname == "/proposes" ||
        pathname == "/proposes/novel_coronavirus" ||
        pathname == "/proposes/app_covid19" ||
        pathname == "/proposes/novel_causal_analysis" ||
        pathname == "/proposes/visual_dashboard"
      ) {
        window.$("#navbarDropdown").addClass("active-secondary");
      } else {
        window.$("#navbarDropdown").removeClass("active-secondary");
      }
      window.$("#navBarMobile").collapse("hide");
    }
  }
};
</script>

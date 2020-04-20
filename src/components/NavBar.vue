<template>
  <header class="header default border-bottom" >
    <div class="header-section">
      <div class="container ">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <div class="d-inline-flex">
              <img
                src="@/assets/images/CovidDataProject_100x100.png"
                width="60"
                height="60"
                class="d-inline-block align-top"
                alt="CovidDataProject"
              />
              <div class="d-flex flex-column">
                <span>
                  The Covid-19
                </span>
                <span>
                  Colombia Project
                </span>
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
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navBarMobile"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/" class="nav-link" href="#">
                  Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link" href="#">
                  About Us
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/team" class="nav-link" href="#">
                  Who is our team?
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/proposes" class="nav-link" href="#">
                  Our Proposes
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contribution" class="nav-link" href="#">
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
  name: "NavBar"
};
</script>

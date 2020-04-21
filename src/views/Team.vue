<template>
  <section class="spacer-double-lg none-v">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mt-1">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              Who is our team?
            </h2>
            <p class="lead">
              We want to thank all those organizations and professionals who
              helped with
              <strong class="font-weight-bold">
                The COVID-19 Colombia Project
              </strong>
              .
            </p>
            <p class="lead">
              Their names and contact address are listed below.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-1 mb-lg-0">
          <User01></User01>
        </div>
        <div class="col-md-6 col-lg-4 mb-1 mb-lg-0">
          <User02></User02>
        </div>
        <div class="col-md-6 col-lg-4 mb-1 mb-lg-0">
          <User03></User03>
        </div>
      </div>
      <div class="row">
        <div class="col mt-3 text-center">
          <router-link
            to="/contribution"
            class="mr-2 btn btn-primary btn-radius-bottom-left mb-lg-0"
            href="#"
          >
            <span class="mn-top">How to Contribution</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import User01 from "@/components/User01";
import User02 from "@/components/User02";
import User03 from "@/components/User03";
export default {
  name: "Team",
  components: {
    User01,
    User02,
    User03
  },
  mounted() {
    this.loader();
  },
  methods: {
    loader: () => {
      window.$("section").fadeIn();
    }
  }
};
</script>
<style lang="scss">
.badge-lg {
  padding: 1.25em;
  font-size: 1rem;
  border-radius: 1rem 0.25rem 1rem 0.25rem;
  bottom: -20px;
  right: -60px;
  font-weight: 600;
}
.edge-shape-bottom {
  right: 0;
  bottom: 0;
  left: 0;
}
.edge-shape-bottom > * {
  -webkit-transform-origin: top center;
  transform-origin: top center;
}
</style>

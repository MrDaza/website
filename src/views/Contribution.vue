<template>
  <section class="spacer-double-lg mt-5 none-v">
    <div class="bg-checkerboard d-none d-sm-block mt-md-5 mt-0"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mb-sm-5 pb-sm-5 mt-1">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              How to Contribution
            </h2>
            <p class="lead">
              If you want to contribute to GitHub repository: Welcome, it is a
              great pleasure for us to have your support!
            </p>
            <p class="lead">
              Now, please contact us and tell us how you want to collaborate, or
              what you would like to do in The COVID-19 Colombia Project team.
            </p>
            <p class="lead">
              Moreover, thank you, from all of us on the project, for caring
              about this work.
            </p>
          </div>
        </div>
        <div class="col text-white">
          <Info></Info>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Info from "@/components/Info";
export default {
  name: "Contribution",
  components: {
    Info
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
@media (min-width: 769px) {
  .bg-checkerboard {
    background-image: url(~@/assets/images/checkerboard.png);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: auto;
    left: 0;
  }
}
.rounded-circle {
  border-radius: 50% !important;
}
.bg-soft-white {
  background-color: #000000 !important;
}
</style>

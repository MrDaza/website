<template>
  <section class="contribution my-5 pt-5 none-v">
    <div class="bg-checkerboard d-none d-sm-block mt-md-5 mt-0"></div>
    <div class="container">
      <div class="row mt-5">
        <div class="col">
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
          <Info class="d-none d-sm-block" />
        </div>
        <div class="col text-white">
          <div class="card border-0 shadow-soft p-2 bg-primary">
            <div class="row text-center p-sm-3">
              <FormInfo />
            </div>
          </div>
        </div>
        <Info class="d-sm-none" />
      </div>
    </div>
  </section>
</template>

<script>
import Info from "@/components/Info";
import FormInfo from "@/components/FormInfo";
export default {
  name: "Contribution",
  components: {
    Info,
    FormInfo
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
<style lang="scss" scope slot-scope>
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

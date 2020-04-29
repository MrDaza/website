<template>
  <section class="about my-5 pt-5 none-v">
    <div class="bg-aboutboard d-block mt-md-5 mt-0"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="my-4 pt-2">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              About Us
            </h2>
            <p class="lead">
              <strong class="font-weight-bold">
                The COVID-19 Colombia Project
              </strong>
              is a volunteer team dedicated to collecting and publishing the
              data required to understand the COVID-19 outbreak in Colombia.
              Besides, it is a space to show ideas or applications that help
              cope with the pandemic.
            </p>
            <p class="lead">
              Since early <strong class="font-weight-bold">April 2020</strong>,
              we have grown from a two-team with a spreadsheet to a project with
              dozen of volunteer data-gatherers, developers, scientists,
              students, professors, and other dedicated contributors.
            </p>
            <p class="lead">
              Every day, we collect data on
              <strong class="font-weight-bold">COVID-19</strong> cases, deaths,
              and recoveries for all 32 departments and 6 regions in the
              Colombia Republic. The above accompanied by a set of
              epidemiological indicators such as mortality rate, hospitalization
              rate, active cases, total people hospitalized, among others.
            </p>
            <p class="lead">
              Also, we present some ideas and applications to aid in outbreak
              expansion time. Here, we find Apps, WhatsApp robots, among other
              ideas that people get informed out about
              <strong class="font-weight-bold">COVID-19</strong>
              and know what to do in case of symptoms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
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
<style lang="scss" scoped>
.bg-aboutboard {
  background-image: url(~@/assets/images/aboutboard.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: auto;
  left: 0;
  transform: rotate(-9deg);
}
@media (max-width: 1199.99px) {
  .bg-aboutboard {
    background-image: url(~@/assets/images/mobile_aboutboard.png);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -220px;
    left: 0;
    transform: rotate(-90deg);
  }
}

@media (max-width: 991.99px) {
  .bg-aboutboard {
    background-image: url(~@/assets/images/mobile_aboutboard.png);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -220px;
    left: 0;
    transform: rotate(-90deg);
  }
}
@media (max-width: 768px) {
  .bg-aboutboard {
    background-image: url(~@/assets/images/mobile_aboutboard.png);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    width: 105%;
    height: 100%;
    top: -200px;
    left: 0;
    transform: rotate(-90deg);
  }
}

@media (max-width: 575.99px) {
  .bg-aboutboard {
    background-image: url(~@/assets/images/mobile_aboutboard.png);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top center;
    position: absolute;
    width: 50%;
    height: 100%;
    top: -100px;
    left: 150px;
    transform: rotate(-60deg);
  }
}

.icon-check {
  width: 1rem;
  height: auto;
}
</style>

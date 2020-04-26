<template>
  <div>
    <section class="bg-primary spacer-double-lg mt-5 none-v">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2 class="display-4 text-white font-weight-bold">
              COVID-19 Colombia Project
            </h2>
            <br />
            <p class="w-md-60 mx-auto mb-0 lead text-white text-justify">
              The
              <strong class="font-weight-bold">
                COVID-19 Colombia Project
              </strong>
              collects and publishes the complete epidemiologic indicators and
              case data available for
              <strong class="font-weight-bold">Colombia</strong>
              <i> departments, municipalities, and cities</i>. Besides, it is a
              space to show ideas or applications that help cope with the
              pandemic.
            </p>
            <br />
            <p class="w-md-60 mx-auto mb-0 lead text-white text-justify">
              This website is a resource to help advance the understanding of
              the virus and inform the public, in order to save lives by making
              better decisions through monitoring the outbreak.
            </p>
          </div>
        </div>
      </div>
    </section>
    <CurveTop></CurveTop>
    <Gratefulness></Gratefulness>
    <Notices></Notices>
    <!--
      <div class="mb-6 pb-5"></div>
    -->
  </div>
</template>

<script>
import Gratefulness from "@/components/Gratefulness";
import CurveTop from "@/components/CurveTop";
import Notices from "@/views/Notices";
export default {
  name: "Home",
  components: {
    Gratefulness,
    Notices,
    CurveTop
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

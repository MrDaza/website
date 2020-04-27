<template>
  <div>
    <section class="bg-primary mt-5 py-5 none-v">
      <div class="container">
        <div class="row pt-5">
          <div class="col text-center">
            <h1 class="display-3 text-white font-weight-bold">
              COVID-19 Colombia Project
            </h1>
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
        <div class="row justify-content-center mt-5">
          <div class="col-auto">
            <ul
              class="radius-bottom-right px-5 list-unstyled rounded text-center d-flex  mb-0 bg-dark  flex-wrap justify-content-center"
            >
              <li class="my-4 mx-4 mx-lg-5 buzz-out-load">
                <div
                  class="h1 text-white mb-2 text-danger font-weight-bold hvr-buzz-out"
                >
                  {{ datos.confirmed }}
                </div>
                <h6 class="mb-0 text-light">Total Confirmed</h6>
              </li>
              <li class="my-4 mx-4 mx-lg-5 buzz-out-load">
                <div class="h1 text-white mb-2 font-weight-bold hvr-buzz-out">
                  {{ datos.deaths }}
                </div>
                <h6 class="mb-0 text-light">Total Deaths</h6>
              </li>
              <li class="my-4 mx-4 mx-lg-5 buzz-out-load">
                <div
                  class="h1 text-white mb-2 text-secondary font-weight-bold hvr-buzz-out"
                >
                  {{ datos.critical }}
                </div>
                <h6 class="mb-0 text-light">Total Critical Cases</h6>
              </li>
            </ul>
          </div>
        </div>
        <div class="row text-center my-5">
          <div class="col">
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiYWUzNDgwYjQtNmYyYy00NWJlLWEwY2YtNjMxZDkzZGFmNDQ4IiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9"
              target="_blank"
              type="button"
              class="btn font-weight-400 font-size-16 btn-dark btn-radius-bottom-left text-left mb-2 mb-sm-0 mr-1"
            >
              <span class="media align-items-center mn-top">
                <span class="fab fa fa-globe font-size-24 mr-3"></span>
                <span class="media-body">
                  <span class="d-block">Get it on</span>
                  <strong class="font-size-15 mn-top">Map Web</strong>
                </span>
              </span>
            </a>
            <a
              href="https://app.powerbi.com/view?r=eyJrIjoiNzYzNmQ5YTUtYTdkYS00NGJlLWEzOWYtNDI2YmU2ZDQxNzU0IiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9"
              target="_blank"
              type="button"
              class="btn font-weight-400 font-size-16 btn-dark text-left mb-2 mb-sm-0 mr-1"
            >
              <span class="media align-items-center mn-top">
                <span class="media-body text-center">
                  <span class="d-block">Get it on spanish</span>
                  <strong class="font-size-15 mn-top">
                    Map web
                  </strong>
                </span>
              </span>
            </a>
            <router-link
              to="/maps"
              type="button"
              class="btn font-weight-400 font-size-16 btn-dark btn-radius-bottom-right text-left mb-2 mb-sm-0 ml-1"
            >
              <span class="media align-items-center mn-top">
                <span class="fab fa fa-globe-americas font-size-24 mr-3"></span>
                <span class="media-body">
                  <span class="d-block">Get it on</span>
                  <strong class="font-size-15 mn-top">Map Site</strong>
                </span>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <CurveTop v-bind:bg01="'#ffffff'" />
    <Gratefulness />
    <Notices style="margin: 0 !important; padding: 0 !important" />
  </div>
</template>
<script>
import Vue from "vue";
import Gratefulness from "@/components/Gratefulness";
import CurveTop from "@/components/CurveTop";
//import Notices from "@/views/Notices";
Vue.component("Notices", function(resolve) {
  setTimeout(function() {
    require(["@/views/Notices"], resolve);
  }, 600);
});
//Vue.component("Notices", require("@/views/Notices").default);//ok!

export default {
  name: "Home",
  components: {
    Gratefulness,
    //Notices,
    CurveTop
  },
  methods: {
    loader: () => {
      window.$("section").fadeIn();
    }
  },
  data() {
    return {
      datos: {
        confirmed: "5.379",
        deaths: "244",
        critical: "116"
      }
    };
  }
};
</script>

<style lang="scss" scope slot-scope>
@-webkit-keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
@keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}
.buzz-out-load {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  -webkit-animation-name: hvr-buzz-out;
  animation-name: hvr-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
.hvr-buzz-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-buzz-out:hover,
.hvr-buzz-out:focus,
.hvr-buzz-out:active {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);

  -webkit-animation-name: hvr-buzz-out;
  animation-name: hvr-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>

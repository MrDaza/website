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
        <div id="iframeBi" class="col">
          <!--
          <iframe
            id="MyIframe"
            width="100%"
            class="bg-primary"
            src="https://app.powerbi.com/view?r=eyJrIjoiZjQxYmY1NzUtODk1OC00ODlkLWE3M2ItZDdlNmQ5ZWU3ZjNjIiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9"
            frameborder="0"
            allowFullScreen="true"
            :onload="checkIframeLoaded(this)"
          />
          -->
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
import axios from "axios";
//import cheerio from "cheerio";

export default {
  name: "Home",
  components: {
    Gratefulness,
    Notices,
    CurveTop
  },
  mounted() {
    console.log("mounted");
    this.loader();
    this.checkIframeLoaded();
    //this.loadURL();
  },
  updated() {
    console.log("updated");
  },
  methods: {
    loader: () => {
      window.$("section").fadeIn();
    },
    loaderIframe() {
      document.getElementById("MyIframe").onload = function() {
        //alert("myframe is loaded");
      };
    },
    onMyFrameLoad() {
      //alert("myframe is loaded dos");
      window.$("#MyIframe").addClass("hola");
      window.$(document).ready(function() {
        window.$("iframe#MyIframe").attr("class", "colombia2");
        window.$("iframe").addClass("Colombia-XC");
        window.$("iframe#MyIframe > html").attr("lang", "en");
        window.$("#pbiAppPlaceHolder").addClass("bg-secondary");
        window.$("#pbiAppPlaceHolder").attr("class", "colombiaXY");
      });
      window.$("#MyIframe").on("load", function() {
        alert("Termino de cargar");
        console.log("Esta cargando");
      });
      console.log("cargo final");
    },
    checkIframeLoaded() {
      // Get a handle to the iframe element

      var iframe = document.createElement("iframe");
      let url =
        "https://app.powerbi.com/view?r=eyJrIjoiZjQxYmY1NzUtODk1OC00ODlkLWE3M2ItZDdlNmQ5ZWU3ZjNjIiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9";
      iframe.src = url;
      iframe.id = "MyIframe";
      iframe.width = "100%";
      iframe.class = "bg-primary";
      document.getElementById("iframeBi").appendChild(iframe);
      iframe.onload = function() {
        let html = document.getElementById("iframeBi");
        console.log(html);
        //console.log(iframe.contentWindow.document.body.innerHTML);
        //var x = document.getElementsByTagName("iframe")[0].contentWindow;
        //x.document.getElementsByTagName("body")[0].style.backgroundColor = "bg-blue";
        console.log(html.innerHTML);
        iframe.class = "no-banner";
        //window.$("#MyIframe").contents().find("logoBarWrapper").html();
        console.log(window.$(".col").contents());

        //const $ = cheerio.load(html);
        //const statsTable = $("document");
        //console.log(statsTable);
        /*var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc.readyState == "complete") {
          //iframe.contentWindow.alert("Hello");
          iframe.contentWindow.onload = function() {
            alert("I am loaded");
          };
          // The loading is complete, call the function we want executed once the iframe is loaded
          this.afterLoading();
          return;
        }
        */
      }; // before setting 'src'
      /*
      var iframe = document.getElementById("MyIframe");
      window.$(document).ready(function() {
        iframe = document.getElementById("MyIframe");
        //console.log()
      });
      */
      //console.log(iframe);
      /*
      iframe.onload = function() {
        alert("gohla");
      }
      var iframeDoc = ( iframe.contentDocument || iframe.contentWindow.document );
      //var iframeDoc = iframe.contentWindow.document;

      // Check if loading is complete
      if (iframeDoc.readyState == "complete") {
        //iframe.contentWindow.alert("Hello");
        iframe.contentWindow.onload = function() {
          alert("I am loaded");
        };
        // The loading is complete, call the function we want executed once the iframe is loaded
        this.afterLoading();
        return;
      }
      // If we are here, it is not loaded. Set things up so we check   the status again in 100 milliseconds
      //window.setTimeout(checkIframeLoaded, 100);
      */
    },
    afterLoading() {
      alert("I am here");
    },
    loadURL() {
      // let url =
      //  "https://app.powerbi.com/view?r=eyJrIjoiZjQxYmY1NzUtODk1OC00ODlkLWE3M2ItZDdlNmQ5ZWU3ZjNjIiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9";
      let url =
        "view-source:https://app.powerbi.com/view?r=eyJrIjoiZjQxYmY1NzUtODk1OC00ODlkLWE3M2ItZDdlNmQ5ZWU3ZjNjIiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9";
      axios(url)
        .then(response => {
          const html = response.data;
          console.log(html);
        })
        .catch(console.error);
    }
  }
};
</script>
<style lang="scss">
.showLogoBar {
  display: none !important;
}
logo-bar {
  display: none !important;
}
iframe > .pbiAppPlaceHolder {
  display: none !important;
}
iframe > .showLogoBar {
  display: none !important;
}
</style>

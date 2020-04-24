<template>
  <section class="notices spacer-double-lg mt-5 mt-sm-0 none-v bg-light">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mb-2 pb-2 mt-1">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              Notices
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(obj, index) in news"
          :key="index"
          class="col-12 col-sm-6 col-md-4 col-lg-4 mb-3 mt-3"
        >
          <News v-bind:obj="obj" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import News from "@/components/News";
export default {
  name: "Notices",
  components: {
    News
  },
  data() {
    return {
      news: [
        {
          code: 1,
          title: "Why We Don’t Know the True Death Rate for Covid-19",
          desc:
            "Determining what percentage of those infected by the coronavirus will die is a key question for epidemiologists, but an elusive one during the pandemic.",
          source: "The New York Times",
          source_url: "www.nytimes.com",
          soruce_ico:
            "https://www.nytimes.com/vi-assets/static-assets/ios-ipad-144x144-319373aaf4524d94d38aa599c56b8655.png",
          image:
            "https://static01.nyt.com/images/2020/04/16/us/16virus-deathrate01/16virus-deathrate01-facebookJumbo.jpg",
          url:
            "https://www.nytimes.com/2020/04/17/us/coronavirus-death-rate.html"
        },
        {
          code: 2,
          title:
            "Why it’s so hard to pin down the risk of dying from coronavirus",
          desc:
            "Scientists are doing their best to make sense of imperfect data.",
          source: "The Washington Post",
          source_url: "www.washingtonpost.com",
          soruce_ico: null,
          image:
            "https://www.washingtonpost.com/resizer/3St6WwM0lCBUtfpynSLPt18V2Jg=/1440x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IFN7SWC7ZII6VLCQDBYB4FHANU.jpg",
          url:
            "https://www.washingtonpost.com/opinions/2020/03/06/why-its-so-hard-pin-down-risk-dying-coronavirus/"
        },
        {
          code: 3,
          title:
            "This 3-D Simulation Shows Why Social Distancing Is So Important",
          desc:
            "We visualized a cough to show how far respiratory droplets can spread. If you haven’t been keeping your distance to fight the coronavirus, this may persuade you.",
          source: "The New York Times",
          source_url: "www.nytimes.com",
          soruce_ico: null,
          image:
            "https://static01.nyt.com/images/2020/04/13/science/cough-image-still-promo/cough-image-still-promo-facebookJumbo-v2.jpg",
          url:
            "https://www.nytimes.com/interactive/2020/04/14/science/coronavirus-transmission-cough-6-feet-ar-ul.html"
        },
        {
          code: 4,
          title: "Así se propaga el covid-19 en el aire en espacios cerrados",
          desc:
            "Un estudio científico preliminar sobre la propagación del coronavirus indica que las partículas de aerosol que transportan el covid-19 pueden permanecer en el aire más tiempo de lo que se pensaba originalmente.",
          source: "CNN español",
          source_url: "cnnespanol.cnn.com",
          soruce_ico: null,
          image:
            "https://cdn.cnn.com/cnnnext/dam/assets/200416150343-cnne-pkg-covid-19-propagacion-en-el-aire-en-espacios-cerrados-michael-roa-00000000-super-tease.jpg",
          url:
            "https://edition.cnn.com/videos/spanish/2020/04/16/cnne-pkg-covid-19-propagacion-en-el-aire-en-espacios-cerrados-michael-roa.cnn"
        },
        {
          code: 5,
          title: "Explicador: Los datos de mortalidad del Covid-19 en Colombia",
          desc:
            "El virus no ha seguido el mismo patrón de contagio en todos los países. Al menos tres variables (pruebas, demografía, capacidad del sistema de salud) afectan la tasa de mortalidad. Aquí te explicamos cómo entenderlas.",
          source: "Universidad de la Sabana",
          source_url: "www.unisabanamedios.com/",
          soruce_ico: null,
          image:
            "https://colombiacheck.com/sites/default/files/2020-04/2420-cifras-coronavirus-colombia.jpg",
          url:
            "https://www.unisabanamedios.com/la-importancia-pruebas-coronavirus"
        },
        {
          code: 6,
          title: "Coronavirus fatality rate estimated by Imperial scientists",
          desc:
            "Imperial researchers have released estimates on the proportion of people who may die from the disease.",
          source: "Imperial College London",
          source_url: "https://www.imperial.ac.uk",
          soruce_ico: null,
          image:
            "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1581361291945_mainnews2012_x1.jpg",
          url:
            "https://www.imperial.ac.uk/news/195217/coronavirus-fatality-rate-estimated-imperial-scientists/"
        },
        {
          code: 7,
          title:
            "¿Cómo se hace el conteo de enfermos y muertos en la Universidad Johns Hopkins?",
          desc:
            "Camilo conversó con la Dra. Kathleen Page, médico infectóloga del Hospital Johns Hopkins y profesora asociada en la escuela de medicina, sobre cómo se hace el conteo mundial de enfermos y muertos por coronavirus.",
          source: "CNN español",
          source_url: "cnnespanol.cnn.com",
          soruce_ico: null,
          image:
            "https://cdn.cnn.com/cnnnext/dam/assets/200129084211-coronavirus-map-tracking-real-time-trnd-story-tablet.jpg",
          url:
            "https://cnnespanol.cnn.com/video/como-se-hace-conteo-enfermos-muertos-universidad-johns-hopkins-kathleen-page-intv-camilo-cnne/"
        },
        {
          code: 8,
          title: "The first modern pandemic",
          desc:
            "The coronavirus pandemic pits all of humanity against the virus. The damage to health, wealth, and well-being has already been enormous. This is like a world war, except in this case, we’re all on the same side. Everyone can work together to learn about the disease and develop tools to fight it. I see global innovation as the key to limiting the damage. This includes innovations in testing, treatments, vaccines, and policies to limit the spread while minimizing the damage to economies and well-being.",
          source: "The Blog Of Bill Gates",
          source_url: "www.gatesnotes.com",
          soruce_ico: null,
          image:
            "https://media.gatesnotes.com/-/media/Images/Articles/Health/Pandemic-Innovation/pandemic-1_2020_long-version_blogroll_800px.ashx",
          url:
            "https://www.gatesnotes.com/Health/Pandemic-Innovation?WT.mc_id=20200423090000_Pandemic-Innovation_BG-TW_&WT.tsrc=BGTW"
        }
      ]
    };
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
/* Pulse Shrink */
@-webkit-keyframes pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@keyframes pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
/*
.ani-up {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.ani-up:hover, .ani-up:focus, .ani-up:active {
  -webkit-animation-name: pulse-shrink;
  animation-name: pulse-shrink;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
*/
.ani-up {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.ani-up:hover,
.ani-up:focus,
.ani-up:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.vertical-line-divider {
  position: relative;
}

.vertical-line-divider:after {
  position: absolute;
  right: -0.9375rem;
  top: 50%;
  height: 4rem;
  border-left: 1px solid #e7eaf3;
  content: "";
  margin-top: -2rem;
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
  display: none;
}
</style>

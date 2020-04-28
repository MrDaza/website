<template>
  <section class="proposes my-5 pt-5 none-v">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="my-4 pt-2">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              Our Proposes
            </h2>
            <p class="w-md-60 mx-auto mb-0 lead text-justify">
              Please find below find the ideas and applications proposed by
              <strong class="font-weight-bold">
                The COVID-19 Colombia Project
              </strong>
              to help understand the COVID-19 outbreak in Colombia and cope with
              the pandemic.
            </p>
            <br />
            <p class="w-md-60 mx-auto mb-0 lead text-justify">
              <strong class="font-weight-bold">
                The COVID-19 Colombia Project
              </strong>
              is based on a group developer effort, with code hosted on GitHub
              including but not limited to these repositories:
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div id="accordion" class="col-lg-10">
          <div v-for="(propositi, index) in proposition" :key="index">
            <Initiatives v-bind:obj="propositi" />
          </div>
        </div>
      </div>

      <div class="w-75 mx-auto mt-4 text-center">
        <p class="mb-0 text-muted">
          Didn't find what you look after ? Visit the
          <router-link
            to="/contribution"
            href="#"
            class="hover-arrow text-info"
          >
            How to Contribution
            <span class="fa fa-arrow-right"></span>
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
//import Proposes01 from "@/components/Proposes01";
//import Proposes02 from "@/components/Proposes02";
//import Proposes03 from "@/components/Proposes03";
//import Proposes04 from "@/components/Proposes04";
import Initiatives from "@/components/Initiatives";
export default {
  name: "Proposes",
  components: {
    Initiatives
  },
  data() {
    return {
      proposition: [
        {
          code: "One",
          title: "Novel Coronavirus (2019-nCoV) Data Repository",
          created: "Developed by Julio Mario Daza, and Elis Daza Escorcia.",
          desc:
            "Data repository for the 2019 Novel Coronavirus (formerly known as 2019-nCoV infection or simply COVID-19). The main objective of this repository is to facilitate access to COVID-19 data in Colombia to bring a more comprehensive picture of the current situation.",
          lear_more_to: "/proposes/novel_coronavirus",
          links_alt: [
            {
              title: "github",
              icon: "fab fa-github",
              url: "https://github.com/CovidDataProject/DataCovid19Colombia"
            }
          ]
        },
        {
          code: "Two",
          title: "App Covid19 Colombia",
          created: "Developed by Elis Daza Escorcia.",
          desc:
            "Movil applications to aid in outbreak expansion time and help to that people get informed out about COVID-19 and know what to do in case of symptoms. Download in Google Play",
          lear_more_to: "/proposes/app_covid19",
          links_alt: [
            {
              title: "github",
              icon: "fab fa-github",
              url: "https://github.com/CovidDataProject/DataCovid19Colombia"
            }
          ]
        },
        {
          code: "Three",
          title: "A novel causal analysis of Colombia COVID-19 deaths",
          created:
            "Developed by Juan Pablo Escorcia, Milton Soto, Odette Chams, and Julio Mario Daza.",
          desc:
            "Data repository for the coronavirus. This repository contains a causal analysis and epidemiologic indicators. \n The main objective is to determine the causal analysis of deaths from COVID-19 in Colombia and to bring a more comprehensive picture of the current situation.",
          lear_more_to: "/proposes/novel_causal_analysis",
          links_alt: [
            {
              title: "github",
              icon: "fab fa-github",
              url: "https://github.com/coviddataproject"
            }
          ]
        },
        {
          code: "Four",
          title: "COVID-19 Colombia Visual Dashboard",
          created: "Developed by Julio Mario Daza",
          desc:
            "Visual Dashboard for the 2019 Novel Coronavirus (formerly known as 2019-nCoV infection or simply COVID-19).\n The main objective of this Dashboard is to facilitate access to COVID-19 data in Colombia to bring a more comprehensive picture of the current situation in all departments, municipals, and cities",
          lear_more_to: "/proposes/visual_dashboard",
          links_alt: [
            {
              title: "GitHub Watch",
              icon: "fab fa-github",
              url: "https://github.com/coviddataproject"
            },
            {
              title: "Get it on Map Web",
              icon: "fab fa fa-globe",
              url:
                "https://app.powerbi.com/view?r=eyJrIjoiYWUzNDgwYjQtNmYyYy00NWJlLWEwY2YtNjMxZDkzZGFmNDQ4IiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9"
            },
            {
              title: "Get it on Spanish Map Web",
              icon: "fab fa fa-globe-americas",
              url:
                "https://app.powerbi.com/view?r=eyJrIjoiNzYzNmQ5YTUtYTdkYS00NGJlLWEzOWYtNDI2YmU2ZDQxNzU0IiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.clickCollapse();
    this.loader();
  },
  methods: {
    clickCollapse() {
      window.$(".collapse").collapse();
    },
    loader: () => {
      window.$("section").fadeIn();
    }
  }
};
</script>

<style lang="scss" scoped>
.accordion-header {
  padding: 0;
  background-color: transparent;
  transition: 0.3s ease-in-out;
  border: none;
}

.accordion-collapse-btn {
  padding: 1.2rem 1.5rem;
  white-space: inherit;
}

.accordion-body {
  color: #646f79;
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.accordion-arrow {
  color: #163967;
  transition: 0.3s ease-in-out;
}

.accordion-arrow:hover {
  color: #163967;
  transition: 0.3s ease-in-out;
}

.accordion-arrow-inner {
  font-size: 0.875rem;
}

.collapsed .accordion-arrow {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.card-collapse [data-toggle="collapse"][aria-expanded="true"],
.card-collapse [data-toggle="collapse"][aria-expanded="true"] .accordion-arrow {
  color: #00c9a7;
}
</style>

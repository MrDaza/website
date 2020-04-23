<template>
  <section class="team spacer-double-lg mt-5 mt-sm-0 none-v">
    <div class="bg-checkerboard d-none d-sm-block mt-md-5 mt-0"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mt-1">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              Our Team
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
      <div class="row justify-content-center">
        <div
          v-for="(obj, index) in users_l1"
          v-bind:key="index"
          class="ani-up col-6 col-sm-3 col-md-3 col-lg-3 mb-1 mt-3"
        >
          <User v-bind:user="obj" />
        </div>
      </div>

      <div class="row justify-content-center">
        <div
          v-for="(obj, index) in users_l2"
          v-bind:key="index"
          class="ani-up col-6 col-sm-3 col-md-3 col-lg-3 mb-1 mt-3"
        >
          <User v-bind:user="obj" />
        </div>
      </div>
      <div class="row ">
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
import User from "@/components/User";
export default {
  name: "Team",
  components: {
    User
  },
  data() {
    return {
      users_l1: [
        {
          name: "Julio Mario Daza",
          picture: "julio_mario_daza.jpeg",
          desc: "Universidad Konrad Lorenz",
          network: [
            {
              icon: "fab fa-linkedin",
              href: "https://www.linkedin.com/in/juliomario/"
            },
            {
              icon: "fab fa-twitter",
              href: "https://twitter.com/juliomariodaza"
            },
            {
              icon: "fab fa-github",
              href: "https://github.com/juliomariodaza"
            },
            {
              icon: "fa fa-globe",
              href:
                "https://docentes.konradlorenz.edu.co/2018/02/julio-mario-daza-escorcia.html"
            }
          ]
        },
        {
          name: "Juan Pablo Escorcia",
          picture: "juan_pablo_escorcia.jpeg",
          desc: "Universidad Del Norte",
          network: [
            {
              icon: "fa fa-globe",
              href:
                "https://www.uninorte.edu.co/web/departamento-de-finanzas-y-organizaciones/profesores?p_p_id=InformacionDocenteUninorte2_WAR_InformacionDocenteV3&docenteID=1082839996"
            }
          ]
        }
      ],
      users_l2: [
        {
          name: "Elis Daza Escorcia",
          picture: "elis_daza_escorcia.jpeg",
          desc: "Universidad EAN",
          network: [
            {
              icon: "fab fa-linkedin",
              href: "https://www.linkedin.com/in/mr-daza/"
            },
            {
              icon: "fab fa-twitter",
              href: "https://twitter.com/Mr_Daza"
            },
            {
              icon: "fab fa-github",
              href: "https://github.com/MrDaza"
            },
            {
              icon: "fa fa-globe",
              href: "https://mr.daza.com.co"
            }
          ]
        },
        {
          name: "Odette Chams Anturi",
          picture: "odette_chams_anturi.jpeg",
          desc: "Universidad de la Costa CUC",
          network: [
            {
              icon: "fab fa-linkedin",
              href: "https://www.linkedin.com/in/odette-chams-anturi-19b80317/"
            },
            {
              icon: "fab fa-twitter",
              href: "https://twitter.com/Odettechams"
            },
            {
              icon: "fa fa-globe",
              href: "https://cuc-co.academia.edu/OdetteChamsAnturi"
            }
          ]
        },
        {
          name: "John Edwards Alvarez",
          picture: "john_edwards_alvarez.jpg",
          desc: "Universidad de Antioquia",
          network: [
            {
              icon: "fab fa-twitter",
              href: "https://twitter.com/ProfeEdwards"
            },
            {
              icon: "fab fa-facebook",
              href: "https://cuc-co.academia.edu/OdetteChamsAnturi"
            }
          ]
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

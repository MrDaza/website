<template>
  <div>
    <section class="team my-5 pt-5 none-v">
      <div class="bg-board d-block mt-md-5 mt-0"></div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="my-4 pt-2">
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
            class="ani-up col-7 col-sm-6 col-md-4 col-lg-3 mb-md-2 mt-3"
          >
            <User v-bind:user="obj" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div
            v-for="(obj, index) in users_l2"
            v-bind:key="index"
            class="ani-up col-7 col-sm-6 col-md-4 col-lg-3 mb-md-2 mt-3"
          >
            <User v-bind:user="obj" />
          </div>
        </div>
        <div class="row justify-content-center">
          <div
            v-for="(obj, index) in users_l3"
            v-bind:key="index"
            class="ani-up col-7 col-sm-6 col-md-4 col-lg-3 mb-md-2 mt-3"
          >
            <User v-bind:user="obj" />
          </div>
        </div>
        <div class="row">
          <div class="col mt-5 mb-3 text-center">
            <router-link
              to="/contribution"
              class="mr-2 btn btn-primary btn-radius-bottom-left mb-0"
              href="#"
            >
              <span class="mn-top">How to Contribution</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <CurveTop v-bind:bg01="'#f8f9fa'" />
    <Gratefulness class="bg-light mb-5" />
  </div>
</template>

<script>
import User from "@/components/User";
import CurveTop from "@/components/CurveTop";
import Gratefulness from "@/components/Gratefulness";
export default {
  name: "Team",
  components: {
    User,
    CurveTop,
    Gratefulness
  },
  data() {
    return {
      users_l1: [
        {
          name: "Julio Mario Daza",
          picture: "julio_mario_daza.jpeg",
          desc: "Industrial Engineer",
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
          name: "Elis Daza Escorcia",
          picture: "elis_daza_escorcia.jpeg",
          desc: "Systems Engineer",
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
        }
      ],
      users_l2: [
        {
          name: "Juan Pablo Escorcia",
          picture: "juan_pablo_escorcia.jpeg",
          desc: "Industrial Engineer",
          network: [
            {
              icon: "fa fa-globe",
              href:
                "https://www.uninorte.edu.co/web/departamento-de-finanzas-y-organizaciones/profesores?p_p_id=InformacionDocenteUninorte2_WAR_InformacionDocenteV3&docenteID=1082839996"
            }
          ]
        },
        {
          name: "Odette Chams Anturi",
          picture: "odette_chams_anturi.jpeg",
          desc: "Industrial Engineer",
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
          desc: "Mathematics and Physics",
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
      ],
      users_l3: [
        {
          name: "Daniel Romero Rodriguez",
          picture: "daniel_romero.jpeg",
          desc: "Industrial Engineer",
          network: [
            {
              icon: "fab fa-linkedin",
              href:
                "https://www.linkedin.com/in/daniel-romero-rodriguez-226bb213/"
            },
            {
              icon: "fab fa-twitter",
              href: "https://twitter.com/danielhromero"
            },
            {
              icon: "fab fa-instagram",
              href: "https://www.instagram.com/danielrodriguez6521/"
            },
            {
              icon: "fa fa-globe",
              href:
                "https://scholar.google.com.co/citations?user=uEqegLwAAAAJ&hl=en"
            }
          ]
        },
        {
          name: "Geraldine Camacho Perez",
          picture: "geraldine_camacho_perez.jpeg",
          desc: "Industrial Engineer",
          network: [
            {
              icon: "fab fa-linkedin",
              href: "https://www.linkedin.com/in/geraldine-camacho-a49b55171/"
            },
            {
              icon: "fab fa-twitter",
              href: "https://twitter.com/Gerald_c15"
            },
            {
              icon: "fab fa-facebook",
              href: "https://www.facebook.com/GeralCamacho15"
            },
            {
              icon: "fab fa-instagram",
              href: "https://www.instagram.com/camachogeraldine/"
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
.bg-curve {
  fill: #f6f6f6;
}
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

<style lang="scss" scoped>
.bg-board {
  background-image: url(~@/assets/images/bg_green.png);
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
  .bg-board {
    background-image: url(~@/assets/images/mobile_green.png);
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
  .bg-board {
    background-image: url(~@/assets/images/mobile_green.png);
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
  .bg-board {
    background-image: url(~@/assets/images/mobile_green.png);
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
  .bg-board {
    background-image: url(~@/assets/images/mobile_green.png);
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
</style>

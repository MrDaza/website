<template>
  <section class="proposes spacer-double-lg mt-5 mt-sm-0 none-v">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mb-3 pb-3 text-center mt-1">
            <h2 class="display-4 text-primary font-weight-bold">
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
          <Proposes01></Proposes01>
          <Proposes02></Proposes02>
          <Proposes03></Proposes03>
          <Proposes04></Proposes04>
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
import Proposes01 from "@/components/Proposes01";
import Proposes02 from "@/components/Proposes02";
import Proposes03 from "@/components/Proposes03";
import Proposes04 from "@/components/Proposes04";
export default {
  name: "Proposes",
  components: {
    Proposes01,
    Proposes02,
    Proposes03,
    Proposes04
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

<style lang="scss">
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

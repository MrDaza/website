<template>
  <div class="card card-collapse mb-3 ">
    <div class="card-header accordion-header" id="headingThree">
      <h5 class="mb-0">
        <button
          class="btn btn-link btn-block d-flex justify-content-between accordion-collapse-btn collapsed"
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          <span class="text-left">
            A novel causal analysis of Colombia <br class="d-sm-none" />
            COVID-19 deaths
          </span>
          <span class="accordion-arrow">
            <span class="fa fa-angle-down accordion-arrow-inner"></span>
          </span>
        </button>
      </h5>
    </div>
    <div
      id="collapseThree"
      class="collapse"
      aria-labelledby="headingThree"
      data-parent="#accordion"
    >
      <div class="card-body accordion-body">
        <p class="h5 text-primary">
          Developed by Juan Escorcia, Milton Soto, Odette Chams, and Julio Daza.
        </p>
        <p>
          Data repository for the coronavirus. This repository contains a causal
          analysis and epidemiologic indicators.
          <br />
          The main objective is to determine the causal analysis of deaths from
          COVID-19 in Colombia and to bring a more comprehensive picture of the
          current situation.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proposes03"
};
</script>

<template>
  <div class="card card-collapse mb-3 ">
    <div class="card-header accordion-header" id="headingThree">
      <h5 class="mb-0">
        <button
          class="btn btn-link btn-block d-flex justify-content-between accordion-collapse-btn collapsed"
          data-toggle="collapse"
          data-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          <span class="text-left">
            COVID-19 Colombia Visual Dashboard
          </span>
          <span class="accordion-arrow">
            <span class="fa fa-angle-down accordion-arrow-inner"></span>
          </span>
        </button>
      </h5>
    </div>
    <div
      id="collapseFour"
      class="collapse"
      aria-labelledby="headingThree"
      data-parent="#accordion"
    >
      <div class="card-body accordion-body">
        <p class="h5 text-primary">
          Developed by Julio Daza.
        </p>
        <p>
          Visual Dashboard for the 2019 Novel Coronavirus (
          <i>
            formerly known as 2019-nCoV infection or simply COVID-19
          </i>
          ).
          <br />
          The main objective of this Dashboard is to facilitate access to
          COVID-19 data in Colombia to bring a more comprehensive picture of the
          current situation in all departments, municipals, and cities
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proposes04"
};
</script>

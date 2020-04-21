<template>
  <div class="card card-collapse mb-3 ">
    <div class="card-header accordion-header" id="headingOne">
      <h5 class="mb-0">
        <button
          class="btn btn-link btn-block d-flex justify-content-between accordion-collapse-btn collapsed"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          <span class="text-left">
            Novel Coronavirus (2019-nCoV) <br class="d-sm-none" />Data Repository
          </span>
          <span class="accordion-arrow">
            <span class="fa fa-angle-down accordion-arrow-inner"></span>
          </span>
        </button>
      </h5>
    </div>

    <div
      id="collapseOne"
      class="collapse show"
      aria-labelledby="headingOne"
      data-parent="#accordion"
    >
      <div class="card-body accordion-body">
        <p class="h5 text-primary">
          Developed by Julio Daza, and Elis Daza.
        </p>
        <p>
          Data repository for the 2019 Novel Coronavirus (formerly known as
          2019-nCoV infection or simply COVID-19). The main objective of this
          repository is to facilitate access to COVID-19 data in Colombia to
          bring a more comprehensive picture of the current situation.
        </p>
        <a
          href="#"
          class="btn btn-sx btn-radius-bottom-right btn-secondary justify-content-end"
        >
          <span class="mn-top">GitHub Watch</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proposes01"
};
</script>

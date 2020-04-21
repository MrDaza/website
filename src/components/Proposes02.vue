<template>
  <div class="card card-collapse mb-3 ">
    <div class="card-header accordion-header" id="headingTwo">
      <h5 class="mb-0">
        <button
          class="btn btn-link btn-block d-flex justify-content-between accordion-collapse-btn collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          App Covid19 Colombia
          <span class="accordion-arrow">
            <span class="fa fa-angle-down accordion-arrow-inner"></span>
          </span>
        </button>
      </h5>
    </div>
    <div
      id="collapseTwo"
      class="collapse"
      aria-labelledby="headingTwo"
      data-parent="#accordion"
    >
      <div class="card-body accordion-body">
        <p class="h5 text-primary">
          Developed by Elis Daza.
        </p>
        <p>
          Movil applications to aid in outbreak expansion time and help to that
          people get informed out about COVID-19 and know what to do in case of
          symptoms. Download in Google Play
        </p>
        <a
          class="btn font-weight-400 font-size-16 btn-light btn-radius-bottom-right text-left mb-2 mb-sm-0 ml-1"
        >
          <span class="media align-items-center mn-top">
            <span class="fab fa-google-play font-size-24 mr-3"></span>
            <span class="media-body">
              <span class="d-block">Get it on</span>
              <strong class="font-size-15 mn-top">Google Play</strong>
            </span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proposes02"
};
</script>

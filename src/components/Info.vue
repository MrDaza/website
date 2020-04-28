<template>
  <div class="card border-0 p-2 bg-white text-primary h-100">
    <div class="row text-center p-sm-3">
      <div class="col-6 col-sm-6">
        <div class="d-flex justify-content-center">
          <span
            class="btn rounded-icon-size-1 bg-soft-white rounded-circle m-3 d-block"
          >
            <span class="fas fa-map-marker-alt icon-rounded-inner"></span>
          </span>
        </div>
        <h5 class="h5 font-weight-bold">Address</h5>
        <a class="text-primary-70 font-size-15" href="#">
          Bogotá, Colombia
        </a>
      </div>
      <div class="col-6 col-sm-6">
        <div class="d-flex justify-content-center">
          <span
            class="btn rounded-icon-size-1 bg-soft-white rounded-circle m-3 d-block"
          >
            <span class="fas fa-phone icon-rounded-inner"></span>
          </span>
        </div>
        <h5 class="h5 font-weight-bold">Phone Number</h5>
        <a class="text-primary-70 font-size-15" href="#">
          (057) 310 6352773
        </a>
      </div>
      <div class="col-sm-12 mt-4">
        <div class="d-flex justify-content-center">
          <a
            class="mr-2"
            target="_blank"
            href="https://www.instagram.com/CovidDataProject"
          >
            <span
              class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block"
            >
              <span class="fab fa-instagram icon-rounded-inner"></span>
            </span>
          </a>
          <a
            class="mr-2"
            target="_blank"
            href="https://twitter.com/CovidDataPROJ"
          >
            <span
              class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block"
            >
              <span class="fab fa-twitter icon-rounded-inner"></span>
            </span>
          </a>
          <a
            class=""
            target="_blank"
            href="https://github.com/CovidDataProject"
          >
            <span
              class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block btn-block"
            >
              <span class="fab fa-github icon-rounded-inner"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info"
};
</script>

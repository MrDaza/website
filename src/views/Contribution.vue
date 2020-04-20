<template>
  <section class="spacer-double-lg mt-5">
    <div class="bg-checkerboard d-none d-md-block mt-5"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mt-5 mt-lg-0">
          <div class="pt-5">
            <h2 class="display-4 text-center text-primary font-weight-bold mb-3 pb-3 ">
              How to Contribution
            </h2>
            <p class="w-md-60 mx-auto mb-0 lead">
              If you want to contribute to GitHub repository: Welcome, it is a great pleasure for us to have your support!
            </p>
            <br />
            <p class="w-md-60 mx-auto mb-0 lead">
              Now, please contact us and tell us how you want to collaborate, or what you would like to do in The COVID-19 Colombia Project team.
            </p>
            <br />
            <p class="w-md-60 mx-auto mb-0 lead">
              Moreover, thank you, from all of us on the project, for caring about this work.
            </p>
          </div>
        </div>
        <div class="col-lg-5  text-white mb-7 mb-lg-0">
          <div class="card border-0 shadow-soft p-5 bg-primary h-100">
            <div class="row text-center">
              <div class="col-sm-6">
                <div class="d-flex justify-content-center">
                  <span class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block">
                    <span class="fas fa-map-marker-alt icon-rounded-inner"></span>
                  </span>
                </div>
                <h4 class="h5 mb-0 text-white">Address</h4>
                <a class="text-white-70 font-size-15" href="#">Bogotá, Colombia</a>
              </div>
              <div class="col-sm-6 mb-5">
                <div class="d-flex justify-content-center">
                  <span class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block">
                    <span class="fas fa-phone icon-rounded-inner"></span>
                  </span>
                </div>
                <h4 class="h5 mb-0 text-white">Phone Number</h4>
                <a class="text-white-70 font-size-15" href="#">(057) 301 6525948 </a>
              </div>
              <div class="col-sm-12 mb-5">
                <div class="d-flex justify-content-center">
                <span class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block">
                  <span class="fas fa-envelope icon-rounded-inner"></span>
                </span>
                </div>
                <h4 class="h5 mb-0 text-white">General enquiries</h4>
                <a class="text-white-70 font-size-15" href="#">CovidDataProject@gmail.com</a>
              </div>
              <div class="col-sm-12">
                <div class="d-flex justify-content-center">
                  <a class=" mr-2" href="https://www.instagram.com/CovidDataProject" target="_blank">
                    <span class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block">
                      <span class="fab fa-instagram icon-rounded-inner"></span>
                    </span>
                  </a>
                  <a class=" mr-2" href="https://twitter.com/CovidDataPROJ" target="_blank">
                    <span class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block">
                      <span class="fab fa-twitter icon-rounded-inner"></span>
                    </span>
                  </a>
                  <a class="" href="https://github.com/CovidDataProject" target="_blank">
                    <span class="btn rounded-icon-size-1 bg-soft-white rounded-circle mb-3 d-block btn-block">
                      <span class="fab fa-github icon-rounded-inner"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-7">
          <form action="#">
            <div class="d-flex flex-column flex-sm-row form-group">
              <input class="form-control form-control-lg mr-sm-3 mb-2 mb-sm-0 h-100" name="email" placeholder="Email Address" type="email">
              <button class="btn btn-wide btn-lg btn-secondary  btn-radius-bottom-left" type="submit">
              <span class="mn-top">Submit</span>
              </button>
            </div>
            <div class="small text-muted text-center pb-5">* We'll never share your email with third parties.</div>
          </form>
        </div>
      </div>
      -->
    </div>
  </section>
</template>

<script>
export default {
  name: "Contribution"
};
</script>
<style lang="scss">
.bg-checkerboard {
  background-image: url(~@/assets/images/checkerboard.png);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: top center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: auto;
  left: 0;
}
.rounded-circle {
  border-radius: 50% !important;
}
.bg-soft-white {
  background-color: rgba(255,255,255,.1) !important;
}
</style>

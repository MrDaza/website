<template>
  <footer class="pb-3 fixed-bottom bg-white">
    <div class="row">
      <div class="col">
        <hr class="my-sm-6" />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
          <p class="font-size-14 mb-0">
            <span>©</span>
            <span class="text-copyright">&nbsp;Copyright</span>
            <strong class="text-inhouse">&nbsp;inHouse S.A.S&nbsp;</strong>
            <br />
            <span class="text-reserve">2020 all rights reserved.&nbsp;</span>
          </p>
        </div>
        <div class="col-12 col-sm-6 col-md-4 pt-0 pt-sm-3 text-center">
          <p class="font-size-14 mb-0">
            <span class="text-build">With by&nbsp;</span>
            <a href="https://mr.daza.com.co" target="_black">
              <span class="text-love">
                &nbsp;❤️ MrDaza
              </span>
            </a>
          </p>
        </div>
        <div class="col-12 col-sm-6 col-md-4 pt-0 pt-sm-3 ">
          <ul class="list-inline text-sm-right mb-0 font-size-14 mn-top">
            <li class="list-inline-item px-2">
              <a
                class="list-group-item-action"
                href="https://www.instagram.com/CovidDataProject"
                target="_blank"
              >
                <span class="fab fa-instagram"></span>
              </a>
            </li>
            <li class="list-inline-item px-2">
              <a
                class="list-group-item-action"
                href="https://twitter.com/CovidDataPROJ"
                target="_blank"
              >
                <span class="fab fa-twitter "></span>
              </a>
            </li>
            <li class="list-inline-item px-2">
              <a
                class="list-group-item-action"
                href="https://github.com/CovidDataProject"
                target="_blank"
              >
                <span class="fab fa-github"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px 10%;
}
.footer-left,
.footer-right {
  width: 50%;
  text-align: center;
}
@media (max-width: 1199px) {
  .footer-left,
  .footer-right {
    width: inherit;
    text-align: center;
  }
  .footer-left .text-reserve {
    display: none;
  }
}
@media (max-width: 991px) {
  .footer-left,
  .footer-right {
    width: inherit;
    text-align: center;
  }
  .footer-left .text-reserve {
    display: none;
  }
}
@media (max-width: 767px) {
  .footer-left,
  .footer-right {
    width: inherit;
    text-align: center;
  }
  .footer-left .text-reserve,
  .footer-right .text-build {
    display: none;
  }
}
@media (max-width: 575px) {
  .container {
    text-align: center;
  }
  .footer-left .text-reserve,
  .footer-left .text-copyright,
  .footer-right .text-build {
    display: none;
  }
  .footer-left,
  .footer-right {
    width: inherit;
    text-align: center;
  }
}
</style>

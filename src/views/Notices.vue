<template>
  <section class="notices spacer-double-lg mt-5 mt-sm-0 none-v bg-light">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mb-2 pb-2 mt-1">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              Notices
            </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(obj, index) in news" :key="index" class="col-4 mb-5">
          <News v-bind:obj="obj" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import News from "@/components/News";
export default {
  name: "Notices",
  components: {
    News
  },
  data() {
    return {
      news: [
        {
          title: "Lorem ipsum dolor sit 01",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ducimus esse totam odit, eum illo nemo, sint dolor cumque rem placeat commodi molestias explicabo! Ab nihil nisi sunt consequatur doloremque!",
          picture: null,
          user: "Julio Mario D",
          user_picture: "juliomariodaza.jpeg"
        },
        {
          title: "Lorem ipsum dolor sit 02",
          desc: "Aspernatur ducimus esse totam odit, eum illo nemo, sint dolor cumque rem placeat commodi molestias explicabo! Ab nihil nisi sunt consequatur doloremque!",
          picture: null,
          user: "Elis Daza E",
          user_picture: "elisdazaescorcia.jpeg"
        },
        {
          title: "Lorem ipsum dolor sit 03",
          desc: "Sint dolor cumque rem placeat commodi molestias explicabo! Ab nihil nisi sunt consequatur doloremque!",
          picture: null,
          user: "Juan Pablo E",
          user_picture: "juanpabloescorcia.jpeg"
        },
        {
          title: "Lorem ipsum dolor sit 04",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          picture: null,
          user: "Juan Pablo E",
          user_picture: "juanpabloescorcia.jpeg"
        },
        {
          title: "Lorem ipsum dolor sit 05",
          desc: "Aspernatur ducimus esse totam odit, eum illo nemo, sint dolor cumque rem placeat commodi molestias explicabo! Ab nihil nisi sunt consequatur doloremque!",
          picture: null,
          user: "Elis Daza E",
          user_picture: "elisdazaescorcia.jpeg"
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
/* Pulse Shrink */
@-webkit-keyframes pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
@keyframes pulse-shrink {
  to {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}
/*
.card-new {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.card-new:hover, .card-new:focus, .card-new:active {
  -webkit-animation-name: pulse-shrink;
  animation-name: pulse-shrink;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
*/
.card-new {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.card-new:hover,
.card-new:focus,
.card-new:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.vertical-line-divider {
  position: relative;
}

.vertical-line-divider:after {
  position: absolute;
  right: -0.9375rem;
  top: 50%;
  height: 4rem;
  border-left: 1px solid #e7eaf3;
  content: "";
  margin-top: -2rem;
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
  display: none;
}
</style>

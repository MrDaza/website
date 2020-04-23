<template>
  <div class="card card-collapse mb-3 ">
    <div class="card-header accordion-header" :id="'heading' + obj.code">
      <h5 class="mb-0">
        <button
          class="btn btn-link btn-block d-flex justify-content-between accordion-collapse-btn collapsed"
          data-toggle="collapse"
          :data-target="'#collapse' + obj.code"
          aria-expanded="false"
          :aria-controls="'collapse' + obj.code"
        >
          <span class="text-left mr-4 mr-sm-0">
            {{ obj.title }}
          </span>
          <span class="accordion-arrow">
            <span class="fa fa-angle-down accordion-arrow-inner"></span>
          </span>
        </button>
      </h5>
    </div>

    <div
      :id="'collapse' + obj.code"
      class="collapse show"
      :aria-labelledby="'heading' + obj.code"
      data-parent="#accordion"
    >
      <div class="card-body accordion-body">
        <p class="h5 text-primary">
          {{ obj.created }}
        </p>
        <p>
          {{ obj.desc }}
        </p>
        <div class="row ">
          <div class="col col-6 mt-3 text-center">
            <router-link
              :to="obj.lear_more_to"
              class="mr-2 btn btn-primary btn-radius-bottom-left mb-lg-0"
              href="#"
            >
              <span class="mn-top">Leer More ...</span>
            </router-link>
          </div>
          <div
            v-for="(link, index) in obj.links_alt"
            :key="index"
            class="col col-6 mt-3 text-center"
          >
            <a
              :href="link.url"
              target="_blank"
              class="btn btn-sx btn-radius-bottom-right btn-secondary justify-content-end"
            >
              <span :class="link.icon"></span>
              <span class="mn-top">{{ link.title }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proposes",
  props: {
    obj: Object
  }
};
</script>

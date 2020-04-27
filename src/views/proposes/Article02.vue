<template>
  <section class="spacer-double-lg mt-5 mt-sm-0 none-v">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mt-1">
            <h2 class="display-4 text-center text-primary font-weight-bold">
              App Covid19 Colombia
            </h2>
          </div>
        </div>
        <GoToGithub></GoToGithub>
      </div>
    </div>
  </section>
</template>

<script>
import GoToGithub from "@/components/GoToGithub";
export default {
  name: "Article02",
  components: {
    GoToGithub
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

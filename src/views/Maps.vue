<template>
  <section class="bg-primary">
    <div class="container-flow ">
      <div class="row mt-4 pt-2 d-flex justify-content-center">
        <iframe
          id="MyIframe"
          width="100%"
          height="100%"
          style="max-width:90% !important"
          class="bg-primary col-12 vh-100 vw-100 pt-1"
          src="https://app.powerbi.com/view?r=eyJrIjoiYWUzNDgwYjQtNmYyYy00NWJlLWEwY2YtNjMxZDkzZGFmNDQ4IiwidCI6IjAzZTFiMjI2LTU3ODktNGE5Ny05MGY2LTQ0YTQ0MjQxYmE2ZCIsImMiOjR9"
          frameborder="0"
          allowFullScreen="true"
          scrolling="none"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Maps",
  mounted() {
    console.log("mounted");
    this.loader();
  },
  methods: {
    loader: () => {
      window.$("section").fadeIn();
    }
  }
};
</script>

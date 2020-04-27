<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <ul
            class="list-unstyled d-flex flex-column justify-content-between text-center flex-sm-row justify-content-sm-center"
          >
            <li class="m-3 py-sm-3">
              <h5 class="h5 text-primary font-weight-bold text-sm-left">
                The organizations of which <br />
                the members of our team are part are:
              </h5>
            </li>
            <li
              v-for="(obj, index) in institutions"
              :key="index"
              class="mb-3 m-sm-3"
            >
              <img
                class="icon-logo-svg img-fluid rounded mx-auto d-block justify-content-center mt-3"
                :src="require('@/assets/images/logo/' + obj.picture)"
                :alt="obj.alt"
                :title="obj.title"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gratefulness",
  data() {
    return {
      institutions: [
        {
          title: "Konrad Lorenz",
          picture: "konrad_lorenz.png",
          alt: "Gratefulness Konrad Lorenz"
        },
        /*
        {
          title: "Universidad del Norte",
          picture: "uninorte.jpg",
          alt: "Gratefulness Universidad del Norte"
        },*/
        {
          title: "Escuela de Postgrados Fuerza Aérea Colombiana",
          picture: "epfac.png",
          alt: "Gratefulness Escuela de Postgrados Fuerza Aérea Colombiana"
        },
        {
          title: "Universidad Sergío Arboleda",
          picture: "sergio_arboleda.jpg",
          alt: "Gratefulness Universidad Sergio Arboleda"
        },
        {
          title: "Universidad de la Salle",
          picture: "lasalle.png",
          alt: "Gratefulness Universidad de la Salle"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.icon-logo-svg {
  height: 3.5rem;
  opacity: 0.9;
}
</style>

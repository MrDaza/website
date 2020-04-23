<template>
  <article class="card shadow h-100">
    <div class="position-relative">
      <img
        v-if="!user.picture"
        class="card-img-top img-thumbnail"
        src="@/assets/images/users/default.png"
        alt="Foto: CovidDataProject"
      />
      <img
        v-else
        class="card-img-top img-thumbnail"
        :src="require('@/assets/images/users/' + user.picture)"
        :alt="'Foto: ' + user.name"
      />
      <span
        class="badge badge-primary text-secondary badge-lg ml-1 position-absolute mr-5 d-none d-sm-block"
      >
        {{ user.name }}
      </span>
    </div>
    <div class="card-body mt-3 p-2">
      <h5 class="d-sm-none ">
        <a href="#" class="text-primary">
          {{ user.name }}
        </a>
      </h5>
      <p class="d-none d-sm-block text-center">
        {{ user.desc }}
      </p>
      <div class="row text-center justify-content-center d-none d-sm-flex">
        <div class="col" v-for="(networks, index) in user.network" :key="index">
          <a
            class="list-group-item-action"
            :href="networks.href"
            target="_blank"
          >
            <span :class="networks.icon"></span>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
  }
};
</script>

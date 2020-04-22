<template>
  <a class="" href="#">
    <div class="card-new card border-0 radius-bottom-right shadow-soft h-100">
      <div class="card-body p-4">
        <h4 class="h4 list-inline text-warning">
          {{ obj.title }}
        </h4>
        <p class="mb-5 pb-3 text-gray font-weight-200">
          {{
            (
              obj.desc.trim().length > 125
            )?
              obj.desc.trim().substring(0, 120) + " ...":
              obj.desc.trim()
          }}
        </p>
      </div>
      <div class="card-footer rounded-bottom radius-bottom-right fixed-bottom">
        <div class="media">
          <div class="avatar-sm mr-3">
            <img
              v-if="obj.user_picture"
              class="img-fluid rounded-circle"
              v-bind:src="require('@/assets/images/users/' + obj.user_picture)"
              alt="Noticia"
            />
            <img
              v-else
              class="img-fluid rounded-circle"
              src="@/assets/images/users/default.png"
              alt="Noticia"
            />
          </div>
          <div class="media-body">
            <h6 class="h6 text-primary font-weight-600">
              Read more
            </h6>
            <small class="d-block text-muted">
              {{ obj.user }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "News",
  props: {
    /*obj: {
      title: String,
      desc: String,
      picture: String,
      user: String,
      user_picture: String
    }*/
    obj: Object
  }
};
</script>

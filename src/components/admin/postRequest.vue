<template>
  <div class="homeTab mb-4">
    <div
      class="postImagesBox py-4"
      v-for="(item, index) in postRequestData"
      :key="index"
      :class="index == postRequestData.length - 1 ? '' : 'border-bottom'"
    >
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2 d-flex align-items-center gap-15">
          <div class="autthorImage">
            <figure class="mb-0">
              <img :src="item.image" alt="Author Image" class="mw-100" />
            </figure>
          </div>
          <div class="authorContent">
            <h4 class="mb-0 font-weight-900">{{ item.title }}</h4>
            <p class="text-gray mb-0">{{ item.publishDate }}</p>
          </div>
        </div>
      </div>
      <div class="contentimage">
        <div class="imageCollapse">
          <img
            alt="Gallery Image"
            class="mw-100 mr-3"
            v-for="(gallery, i) in item.postImages"
            :key="i"
            :src="gallery"
          />
        </div>
      </div>
      <div class="actionBtn my-5 d-flex flex-wrap">
        <p class="mb-0">
          <router-link class="btn-theme-primary btn-round border-0 mr-2 px-5" to="#"
            >Accept</router-link
          >
        </p>
        <p class="mb-0">
          <router-link class="btn-theme-primary btn-round border-0 mr-2 px-5" to="#"
            >Reject</router-link
          >
        </p>
      </div>
    </div>
    <div class="btnBox text-center">
      <p class="mb-0">
        <router-link class="btn-theme-primary btn-round border-0 mr-2 px-4" to="#"
          >View More</router-link
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "postRequest",
  props: {
    postRequestData: {
      type: Array,
    },
  },
  methods: {
    deleteBox(index) {
      this.postRequestData.splice(index, 1);
    },
  },
};
</script>

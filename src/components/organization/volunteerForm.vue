<template>
  <div class="volunteer-details">
    <div class="row text-left my-4 pl-0 pl-md-5">
      <div
        class="col-md-12"
      >
        <h5 class="font-weight-900">General Information</h5>
      </div>
      <div class="col-md-6 py-2" v-for="(item, index) in information" :key="index">
        <p class="font-weight-900 text-dark mb-0">{{ item.title }}</p>
        <p class="text-light font-weight-600">{{ item.text }}</p>
      </div>
    </div>
    <div
      class="row text-left my-4 pl-0 pl-md-5"
    >
      <div class="col-md-12 mb-3">
        <h5 class="font-weight-900">Other Infromations:</h5>
      </div>
      <div
        v-for="(item, index) in otherinformation"
        :key="index"
        class="col-md-6"
      >
        <p class="font-weight-900 text-dark mb-0">{{ item.title }}</p>
        <p class="text-light font-weight-600">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VDetailStatus",
  props: {
    information: {
      type: Array,
    },
    otherinformation: {
      type: Array,
    },
  },
  created() {
    this.status = this.$route.query.status;
    console.log(this.$route);
  },
};
</script>

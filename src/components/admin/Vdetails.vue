<template>
  <div class="volunteer-details">
    <div class="row text-left my-4 pl-0 pl-md-5">
      <div
        :class="this.$route.path == '/admin/volunteer-detail' ? 'col-md-6' : 'col-md-12'"
      >
        <h5 class="font-weight-900">General Information</h5>
      </div>
      <div
        class="col-md-6 text-md-right"
        v-if="this.$route.path == '/admin/volunteer-detail'"
      >
        <h5
          class="font-weight-400"
          :class="status == 'inactive' ? 'text-danger' : 'text-success'"
        >
          {{ status == "inactive" ? "In Active" : "Active" }}
        </h5>
      </div>
      <div class="col-md-6 py-2" v-for="(item, index) in information" :key="index">
        <p class="font-weight-900 text-dark mb-0">{{ item.title }}</p>
        <p class="text-light font-weight-600">{{ item.text }}</p>
      </div>
    </div>
    <div
      class="row text-left my-4 pl-0 pl-md-5"
      v-if="this.$route.path != '/admin/volunteer-detail-id'"
    >
      <div
        class="col-md-12 mb-3"
        v-if="
          $route.path != '/admin/organization-details' &&
          $route.path != '/admin/organization-request-details'
        "
      >
        <h5 class="font-weight-900">Other Infromation:</h5>
      </div>
      <div
        v-for="(item, index) in otherinformation"
        :key="index"
        :class="
          index == otherinformation.length - 1 ? 'col-md-12 d-flex gap-15' : 'col-md-6'
        "
      >
        <p class="font-weight-900 text-dark mb-0">{{ item.title }}</p>
        <p class="text-light font-weight-600">{{ item.text }}</p>
      </div>
    </div>
    <div class="row text-left my-4 pl-0 pl-md-5" v-if="status != 'inactive'">
      <div
        class="col-md-12 mb-3"
        v-if="
          $route.path != '/admin/organization-details' &&
          $route.path != '/admin/organization-request-details' &&
          $route.path != '/admin/volunteer-detail-id'
        "
      >
        <h5 class="font-weight-900">User Referral Used:</h5>
      </div>
      <div class="col-md-6" v-for="(item, index) in referelUsed" :key="index">
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
    referelUsed: {
      type: Array,
    },
  },
  data() {
    return {
      status: "",
    };
  },
  created() {
    this.status = this.$route.query.status;
    console.log(this.$route);
  },
};
</script>

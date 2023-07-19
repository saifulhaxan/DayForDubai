<template>
  <div class="awardCertificatePage">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5">
        <h2 class="font-weight-900">
          <i class="el-icon-arrow-left"></i> Award Certificate
        </h2>
      </div>
      <awardPage  />
    </div>
  </div>
</template>
<script>
import awardPage from "../../components/organization/awardCertificate.vue";
export default {
  name: "Award Certificate Page",
  components: {
    awardPage,
  },
};
</script>

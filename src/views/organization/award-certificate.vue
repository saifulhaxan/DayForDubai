<template>
    <div class="awardCertificate">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Event Award Certificate</h2>
        </div>
        <PastEvent />    
      </div>
    </div>
</template>
<script>
import PastEvent from "../../components/organization/past-event.vue";
export default {
  name: "Award Certificate",
  components: {
    PastEvent,
  },
};
</script>

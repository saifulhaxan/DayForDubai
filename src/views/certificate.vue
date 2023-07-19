<template>
    <div class="certificates">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900 cer"><i class="el-icon-arrow-left"></i> Certificate</h2>
        </div>
        <certificate />    
      </div>
    </div>
</template>
<script>
import certificate from "../components/certificate.vue";
export default {
  name: "certificates",
  components: {
    certificate,
  },
};
</script>

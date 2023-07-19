<template>
    <div class="certificates">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5 d-flex justify-content-between pt-5 pb-3">
          <h2 class="font-weight-900 py-0"><i class="el-icon-arrow-left"></i> Certificate</h2>
          <p class="mb-0 pt-1"><a href="#" class="btnTheme">Upload</a></p>
        </div>
        <certificate />    
      </div>
    </div>
</template>
<script>
import certificate from "../../components/certificate.vue";
export default {
  name: "Certificate",
  components: {
    certificate,
  },
};
</script>

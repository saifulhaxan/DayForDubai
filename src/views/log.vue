<template>
    <div class="logs">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Logs</h2>
        </div>
        <certificate />    
      </div>
    </div>
</template>
<script>
import certificate from "../components/eventTap.vue";
export default {
  name: "Log",
  components: {
    certificate,
  },
};
</script>

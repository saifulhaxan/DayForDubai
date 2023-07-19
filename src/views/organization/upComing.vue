<template>
    <div class="oupcoming">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Event Upcoming</h2>
        </div>
        <upComing />    
      </div>
    </div>
</template>
<script>
import upComing from "../../components/organization/events.vue";
export default {
  name: "upcoming",
  components: {
    upComing,
  },
};
</script>

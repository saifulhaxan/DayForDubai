<template>
    <div class="eventLive">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Event Live</h2>
        </div>
        <eventLive 
        status="Live"
        />    
      </div>
    </div>
</template>
<script>
import eventLive from "../../components/organization/events.vue";
export default {
  name: "EventLive",
  components: {
    eventLive,
  },
};
</script>

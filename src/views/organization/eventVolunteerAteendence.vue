<template>
    <div class="eAttandence">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Event Upcoming</h2>
        </div>
        <eventLive
        status="Upcoming"
         />    
      </div>
    </div>
</template>
<script>
import eventLive from "../../components/organization/events.vue";
export default {
  name: "Voluntreer Attandence",
  components: {
    eventLive,
  },
};
</script>

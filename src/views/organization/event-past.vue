<template>
    <div class="eventPast">
      <Header />
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Event Past</h2>
        </div>
        <PastEvent 
        status="Past"
        />    
      </div>
    </div>
</template>
<script>
import PastEvent from "../../components/organization/past-event.vue";
export default {
  name: "EventPast",
  components: {
    PastEvent,
  },
};
</script>

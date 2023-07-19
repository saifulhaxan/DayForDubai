<template>
    <div class="upComingGoing">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><router-link to="./myevent" class="text-dark"><i class="el-icon-arrow-left"></i></router-link> Event Upcoming</h2>
        </div>
        <upComing 
        buttonText="Going"
        linkButton="event-check-in"
        estatus="Happening Now"
        />    
      </div>
    </div>
</template>
<script>
import upComing from "../components/upComing.vue";
export default {
  name: "upComingGoing",
  components: {
    upComing,
  },
};
</script>

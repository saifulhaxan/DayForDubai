<template>
    <div class="endedEvent">
      <Header />
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><router-link to="./myevent" class="text-dark"><i class="el-icon-arrow-left"></i> Event Ended</router-link></h2>
        </div>
        <upComing 
        estatus="Ended"/>    
      </div>
    </div>
</template>
<script>
import upComing from "../components/eventCheckout.vue";
export default {
  name: "endedEvent",
  components: {
    upComing,
  },
};
</script>

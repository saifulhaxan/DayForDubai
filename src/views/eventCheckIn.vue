<template>
    <div class="checkIn">
      <Header />
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
         <h2 class="font-weight-900"> <router-link to="./home" class="text-dark"><i class="el-icon-arrow-left"></i> Event Live </router-link></h2>
        </div>
        <upComing 
        buttonText="Check In"
        linkButton="./event-check-out"
        estatus="Happening Now"
        />    
      </div>
    </div>
</template>
<script>
import upComing from "../components/upComing.vue";
export default {
  name: "checkIn",
  components: {
    upComing,
  },
};
</script>

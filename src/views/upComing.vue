<template>
    <div class="uPComing">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><router-link to="./home" class="text-dark"><i class="el-icon-arrow-left"></i> Event Upcoming </router-link></h2>
        </div>
        <upComing 
        buttonText="Request"
        linkButton="./up-coming-requested"
        estatus="Upcoming"
        />    
      </div>
    </div>
</template>
<script>
import upComing from "../components/upComing.vue";
export default {
  name: "upcoming",
  components: {
    upComing,
  },
};
</script>

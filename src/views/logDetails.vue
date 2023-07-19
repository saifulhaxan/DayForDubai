<template>
    <div class="logDetails">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <router-link to="/logs"><h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Logs</h2></router-link>
        </div>
        <upComing 
        buttonText="Check Out"
        linkButton="./event-page-ended"
        />    
      </div>
    </div>
</template>
<script>
import upComing from "../components/log-detail.vue";
export default {
  name: "logDetails",
  components: {
    upComing,
  },
};
</script>

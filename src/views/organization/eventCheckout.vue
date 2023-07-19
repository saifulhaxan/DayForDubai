<template>
  <div>
    <div class="float-left position-fixed">
      <sideMenu />
    </div>
    <div class="eventHome">
      <Header />
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Event Live</h2>
        </div>
        <upComing 
        buttonText="Check Out"
        linkButton="./event-page-ended"
        />    
      </div>
    </div>
  </div>
</template>
<script>
import upComing from "../components/eventCheckout.vue";
import sideMenu from "../layout/sideHeader.vue";
import Header from "../layout/AppHeader.vue";
export default {
  name: "checkIn",
  components: {
    upComing,
    sideMenu,
    Header,
  },
};
</script>

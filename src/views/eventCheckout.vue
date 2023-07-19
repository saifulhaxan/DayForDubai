<template>
    <div class="checkout">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><router-link to="./event-check-in" class="text-dark"><i class="el-icon-arrow-left"></i> Event Live</router-link></h2>
        </div>
        <upComing 
        buttonText="Check Out"
        linkButton="./event-page-ended"
        estatus="Happening Now"
        />    
      </div>
    </div>
</template>
<script>
import upComing from "../components/eventCheckout.vue";
export default {
  name: "checkout",
  components: {
    upComing,
  },
};
</script>

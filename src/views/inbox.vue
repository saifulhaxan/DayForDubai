<template>
    <div class="inbox">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Inbox</h2>
        </div>
        <inbox />    
      </div>
    </div>
</template>
<script>
import inbox from "../components/inbox.vue";
export default {
  name: "Inbox",
  components: {
    inbox,
  },
};
</script>

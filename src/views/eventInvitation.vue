<template>
    <div class="eventIvitations">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><router-link to="./invitation" class="text-dark"><i class="el-icon-arrow-left"></i> Event Upcoming</router-link></h2>
        </div>
        <eventIvitationss />    
      </div>
    </div>
</template>
<script>
import eventIvitationss from "../components/eventInvitation.vue";
export default {
  name: "eventIvitations",
  components: {
    eventIvitationss,
  },
};
</script>

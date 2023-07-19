<template>
  <div class="notification">
    <Header />
    <div class="eventsecton ml-4">
      <div class="headBox mb-5">
        <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Notification</h2>
      </div>
      <div class="eventDetailSecion">
        <div class="eventDetail px-3 shadow py-5">
          <Notification />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Notification from "../../components/notification.vue";
export default {
  name: "OrganizationNotification",
  components: {
    Notification,
  },
};
</script>

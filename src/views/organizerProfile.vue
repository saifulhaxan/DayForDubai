<template>
    <div class="organizerProfiles">
      <Header />
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <router-link to="./home" class="text-dark"><h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Event Live</h2></router-link>
        </div>
        <Profile />    
      </div>
    </div>
</template>
<script>
import Profile from "../components/organizerProfile.vue";
export default {
  name: "OrganizerProfiles",
  components: {
    Profile,
  },
};
</script>

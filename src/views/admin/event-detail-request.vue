<template>
  <div class="eventListning container-fluid">
    <div class="eventsectionLive py-5">
      <eventList  :volunteerList="Volunteerdata" showBox="d-none" />
      <div class="actionBtn my-5 d-flex flex-wrap">
        <p class="mb-0">
          <router-link class="btn-theme-primary btn-round border-0 mr-2 px-5" to="#"
            >Accept</router-link
          >
        </p>
        <p class="mb-0">
          <router-link class="btn-theme-primary btn-round border-0 mr-2 px-5" to="#"
            >Reject</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import eventList from "../../components/admin/eventListing.vue";
export default {
  name: "EventDetailRequest",
  components: {
    eventList,
  },

};
</script>

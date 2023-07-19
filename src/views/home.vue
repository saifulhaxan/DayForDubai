<template>
    <div class="eventHomes">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900">Home</h2>
        </div>
        <Events />
      </div>
    </div>
</template>
<script>
import Events from "../components/eventHome.vue";
export default {
  name: "Home",
  components: {
    Events,
  },
};
</script>

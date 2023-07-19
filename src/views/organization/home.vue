<template>
    <div class="oHome">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900">Event</h2>
          <div class="searchExplore">
            <search />
          </div>
        </div>
        <Events />
      </div>
    </div>
</template>
<script>
import Events from "../../components/eventHome.vue";
import search from "../../components/search.vue"
export default {
  name: "Home",
  components: {
    Events,
    search
  },
};
</script>

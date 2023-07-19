<template>
  <div class="myEvents">
    <div class="eventsecton ml-4">
      <div
        class="exploreBar d-flex justify-content-between align-items-center flex-wrap my-5"
      >
        <div class="headBox d-flex align-items-center flex-wrap">
          <h2 class="font-weight-900 pt-0 mb-0">Events</h2>
          <div class="searchExplore">
            <search />
          </div>
        </div>
        <div class="filterBar">
          <router-link to="./filter" class="shadow"
            ><i class="fa fa-sliders" aria-hidden="true"></i
          ></router-link>
        </div>
      </div>
      <Events />
    </div>
  </div>
</template>
<script>
import Events from "../components/myEvent.vue";
import search from "../components/search.vue";
export default {
  name: "Explore",
  components: {
    Events,
    search,
  },
};
</script>

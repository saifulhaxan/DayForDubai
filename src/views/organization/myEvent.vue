<template>
  <div class="myEvents" :class="!showTopMenu ? '' : 'hello'">
    <div class="eventsecton ml-4">
      <div class="headBoxs my-5 d-flex flex-wrap justify-content-between">
        <div class="myEvenst d-flex flex-wrap">
          <h2 class="font-weight-900">Event</h2>
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
import Events from "../../components/organization/myEvent.vue";
import search from "../../components/search.vue";
export default {
  name: "My Events",
  components: {
    Events,
    search,
  },
};
</script>

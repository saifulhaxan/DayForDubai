<template>
  <div>
    <div class="float-left position-fixed">
      <sideMenu />
    </div>
    <div class="eventHome">
      <Header />
      <div class="eventsecton ml-4">
        <Events mainHead="Invitation" />
      </div>
    </div>
  </div>
</template>
<script>
import Events from "../components/eventExplore.vue";
import sideMenu from "../layout/sideHeader.vue";
import Header from "../layout/AppHeader.vue";
export default {
  name: "Explore",
  components: {
    Events,
    sideMenu,
    Header,
  },
};
</script>

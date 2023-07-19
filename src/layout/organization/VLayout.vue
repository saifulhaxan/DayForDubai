<template>
  <div>
    <div class="float-left position-fixed">
      <sideMenu />
    </div>
    <div class="eventHome">
      <Header />
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
import sideMenu from "../organization/sideHeader.vue";
import Header from "../organization/AppHeader.vue";
export default {
  name: "VLayout",
  components: {
    sideMenu,
    Header,
  },
}
</script>

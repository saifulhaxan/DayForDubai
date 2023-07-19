<template>
  <div class="filter">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5">
        <h2 class="font-weight-900">Filter</h2>
      </div>
      <Filters />
    </div>
  </div>
</template>
<script>
import Filters from "../components/filter.vue";
export default {
  name: "Filter",
  components: {
    Filters,
  },
};
</script>

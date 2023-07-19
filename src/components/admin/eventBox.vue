<template>
  <div class="eventBox shadow neadBy my-3 w-100">
    <div class="eventImage position-relative">
      <figure class="mb-0">
        <img :src="liveEvent.eventimage" alt="" class="mw-100  w-100 temWidth" />
      </figure>
    </div>
    <div class="eventContent pl-2">
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <h5 class="my-0 font-weight-900">
          {{ liveEvent.etitle }}
        </h5>
        <el-rate
          v-if="liveEvent.value && showRate"
          v-model="liveEvent.value"
          disabled
          show-score
          text-color="#ff9900"
          :score-template="liveEvent.value"
        >
        </el-rate>
      </div>
      <h6 class="text-gray mb-0 py-2">{{ liveEvent.ecompany }}</h6>
      <p class="font-weight-400">
        <span class="pr-3 d-inline-block"
          ><i class="text-theme-primary fa fa-calendar pr-2"></i
          >{{ liveEvent.edate }}</span
        ><span class="pr-3 d-inline-block"
          ><i class="text-theme-primary fa fa-map-marker pr-2"></i
          >{{ liveEvent.location }}</span
        ><span class="pr-3 d-inline-block"
          ><i class="text-theme-primary fa fa-heartbeat pr-2"></i
          >{{ liveEvent.health }}</span
        ><span class="pr-3 d-inline-block"
          ><i class="text-theme-primary fa fa-clock pr-2"></i>{{ liveEvent.time }}</span
        ><span class="pr-3 d-inline-block"
          ><i class="text-theme-primary fa fa-hourglass-half pr-2"></i
          >{{ liveEvent.hour }}</span
        ><span class="pr-3 d-inline-block"
          ><i class="text-theme-primary fa fa-hand-spock-o pr-2"></i
          >{{ liveEvent.person }}</span
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventBox",
  props: {
    liveEvent: {
      type: Object,
    },
    showRate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

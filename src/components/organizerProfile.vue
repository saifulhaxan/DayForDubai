<template>
  <div class="organizationProfile">
    <div class="cardBox" v-for="(item, index) in eventdata" :key="index">
      <div
        class="eventDetailBox"
        v-bind:style="{ backgroundImage: `url(${item.eventimage})` }"
      ></div>
    </div>
    <div class="eventDetail px-3 shadow">
      <div class="d-flex justify-content-between py-3 flex-md-nowrap flex-wrap">
        <div class="eventContent pl-2 w-100">
          <h3 class="mb-0 font-weight-900">Organization Name</h3>
          <p class="text-gray mb-0">Organization Type</p>
          <div class="ratingBox">
            <el-rate v-model="rating"
            score-template="{value}"
            show-score
            ></el-rate>
          </div>
        </div>
        <div class="voulnteerBox pr-3 d-flex align-items-center w-50 pt-4 pt-md-0 flex-md-nowrap flex-wrap">
          <div class="eventBox text-center  ">
            <figure class="mb-0">
              <img src="img/theme/upcoming.png" class="mw-100" alt="upcoming" />
            </figure>
            <h3 class="text-light">Events Organized: <span class="d-block">200</span></h3>
          </div>
          <div class="eventBox text-center  ">
            <figure class="mb-0">
              <img src="img/theme/volunteer.png" class="mw-100" alt="upcoming" />
            </figure>
            <h3 class="text-light">Total Volunteers: <span class="d-block">2045</span></h3>
          </div>
          <div class="eventBox text-center  ">
            <figure class="mb-0">
              <img src="img/theme/event.png" class="mw-100" alt="upcoming" />
            </figure>
            <h3 class="text-light">Successful Events: <span class="d-block">163</span></h3>
          </div>
        </div>
      </div>
      <div class="tabspost mt-4">
        <el-tabs type="card" @tab-click="handleClick">
          <el-tab-pane label="Home">
           <evenTab />
          </el-tab-pane>
          <el-tab-pane label="Reviews">
            <ReviewTab />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import postTab from "./postTab.vue";
import evenTab from "./eventTap.vue"
import ReviewTab from "./tabReview.vue"
export default {
  name: "eventIvitations",
  components: {
    postTab,
    evenTab,
    ReviewTab
  },
  data() {
    return {
      rating: 4.5,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      eventdata: [
        {
          eventimage: "/img/theme/banner.png",
        },
      ],
    };
  },
};
</script>

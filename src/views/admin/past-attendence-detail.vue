<template>
  <div class="eventListning container-fluid">
    <div class="eventsectionLive py-5">
      <eventList eventStatus="Past" :volunteerList="Volunteerdata" showBox="d-none" />
      <div class="actionBtn my-5 d-flex flex-wrap justify-content-md-end">
        <p class="mb-0">
          <router-link class="btn-theme-primary btn-round border-0 mr-2 px-5" to="#"
            >Check In</router-link
          >
        </p>
      </div>
      <div class="row">
        <div class="profileBox text-center col-md-6 mx-auto">
          <div class="profileArea">
            <div class="cardImage">
              <figure>
                <img
                  src="img/theme/girlMenu.png"
                  alt=""
                  class="mw-100"
                  width="100px"
                  height="100px"
                />
              </figure>
            </div>
            <div class="contentCard">
              <h5 class="text-theme-primary mb-0 font-weight-900">Casandra Wood</h5>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h3 class="text-dark font-weight-900">Attendence</h3>
          <div class="d-flex justify-content-between my-3 align-items-center">
            <div class="attendenceContent w-100">
              <div class="dateBox">
                <p class="mb-0 text-light font-weight-400">
                  <i class="text-theme-primary fa fa-calendar pr-2"></i>October 15, 2021
                  <span class="d-block">Monday</span>
                </p>
              </div>
            </div>
            <div class="attendenceContent w-100">
              <div class="arrivalBox align-items-center d-flex gap-15">
                <div class="checkIn">
                  <p class="font-weight-900 text-dark mb-0">Check In</p>
                  <p class="text-light font-weight-400 mb-0">09:00am</p>
                </div>
                <div class="checkOut">
                  <p class="font-weight-900 text-dark mb-0">Check Out</p>
                  <p class="text-light font-weight-400 mb-0">06:00pm</p>
                </div>
              </div>
              <div class="spendTime">
                <p class="text-light font-weight-400 mb-0">Total Hours Spent : 03Hrs</p>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-between my-3 border-top py-3 align-items-center"
          >
            <div class="attendenceContent w-100">
              <div class="dateBox">
                <p class="mb-0 text-light font-weight-400">
                  <i class="text-theme-primary fa fa-calendar pr-2"></i>October 15, 2021
                  <span class="d-block">Monday</span>
                </p>
              </div>
            </div>
            <div class="attendenceContent w-100">
              <div class="arrivalBox align-items-center d-flex gap-15">
                <div class="checkIn">
                  <p class="text-light font-weight-400 mb-0">09:00am</p>
                </div>
                <div class="checkOut">
                  <p class="text-light font-weight-400 mb-0">06:00pm</p>
                </div>
              </div>
              <div class="spendTime">
                <p class="text-light font-weight-400 mb-0">Total Hours Spent : 03Hrs</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
  </div>
</template>
<script>
import eventList from "../../components/admin/eventListing.vue";
export default {
  name: "AttendenceMDetailPast",
  components: {
    eventList,
  },
  data() {
    return {
      value: 4.5,
    };
  },
};
</script>

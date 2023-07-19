<template>
  <div class="explore px-3 shadow organization">
    <el-tabs type="border-card">
      <el-tab-pane>
        <div slot="label">
          <div class="iconBox">
            <img src="img/theme/all.png" alt="All" class="mw-100 w-50px" />
            <div class="tabTitle">
              <p class="mb-0">All</p>
            </div>
          </div>
        </div>
        <div class="scroll-containers">
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in nearEvent" :key="index">
              <div class="eventBox shadow neadBy my-3">
                <div class="eventImage position-relative">
                  <figure class="mb-0">
                    <img :src="item.eventimage" alt="" class="mw-100 temWidth" />
                  </figure>
                  <div class="badges">
                    <router-link
                      :to="item.tagLink"
                      class="follow text-capitalize badge"
                      v-bind:title="item.btntxt"
                      >{{ item.btntxt }}</router-link
                    >
                  </div>
                </div>
                <div class="eventContent px-2 my-3">
                  <div class="d-flex align-items-center justify-content-between">
                    <h3 class="mb-0 font-weight-900 mt-0">{{ item.etitle }}</h3>
                    <el-rate
                      v-if="item.value != ''"
                      v-model="item.value"
                      disabled
                      show-score
                      text-color="#ff9900"
                    >
                    </el-rate>
                  </div>
                  <h6 class="text-gray mb-0 py-2">{{ item.ecompany }}</h6>
                  <p class="font-weight-400">
                    <span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-calendar pr-2"></i
                      >{{ item.edate }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-map-marker pr-2"></i
                      >{{ item.location }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-heartbeat pr-2"></i
                      >{{ item.health }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-clock-o pr-2"></i
                      >{{ item.time }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-hourglass-half pr-2"></i
                      >{{ item.hour }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-hand-spock-o pr-2"></i
                      >{{ item.person }}</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <div slot="label">
          <div class="iconBox">
            <img src="img/theme/live.png" alt="Live" class="mw-100 w-50px" />
            <div class="tabTitle">
              <p class="mb-0">Live</p>
            </div>
          </div>
        </div>
        <div class="scroll-containers">
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in live" :key="index">
              <div class="eventBox shadow neadBy my-3">
                <div class="eventImage position-relative">
                  <figure class="mb-0">
                    <img :src="item.eventimage" alt="" class="mw-100 temWidth" />
                  </figure>
                  <div class="badges">
                    <router-link
                      :to="item.tagLink"
                      class="follow text-capitalize badge"
                      v-bind:title="item.btntxt"
                      >{{ item.btntxt }}</router-link
                    >
                  </div>
                </div>
                <div class="eventContent px-2">
                  <h3 class="mb-0 font-weight-900">{{ item.etitle }}</h3>
                  <h6 class="text-gray mb-0 py-2">{{ item.ecompany }}</h6>
                  <p class="font-weight-400">
                    <span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-calendar pr-2"></i
                      >{{ item.edate }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-map-marker pr-2"></i
                      >{{ item.location }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-heartbeat pr-2"></i
                      >{{ item.health }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-clock-o pr-2"></i
                      >{{ item.time }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-hourglass-half pr-2"></i
                      >{{ item.hour }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-hand-spock-o pr-2"></i
                      >{{ item.person }}</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <div slot="label">
          <div class="iconBox">
            <img src="img/theme/upcoming.png" alt="Upcoming" class="mw-100 w-50px" />
            <div class="tabTitle">
              <p class="mb-0">Upcoming</p>
            </div>
          </div>
        </div>
        <div class="scroll-containers">
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in upcoming" :key="index">
              <div class="eventBox shadow neadBy my-3">
                <div class="eventImage position-relative">
                  <figure class="mb-0">
                    <img :src="item.eventimage" alt="" class="mw-100 temWidth" />
                  </figure>
                  <div class="badges">
                    <router-link
                      :to="item.tagLink"
                      class="follow text-capitalize badge"
                      v-bind:title="item.btntxt"
                      >{{ item.btntxt }}</router-link
                    >
                  </div>
                </div>
                <div class="eventContent px-2">
                  <h3 class="mb-0 font-weight-900">{{ item.etitle }}</h3>
                  <h6 class="text-gray mb-0 py-2">{{ item.ecompany }}</h6>
                  <p class="font-weight-400">
                    <span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-calendar pr-2"></i
                      >{{ item.edate }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-map-marker pr-2"></i
                      >{{ item.location }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-heartbeat pr-2"></i
                      >{{ item.health }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-clock-o pr-2"></i
                      >{{ item.time }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-hourglass-half pr-2"></i
                      >{{ item.hour }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-hand-spock-o pr-2"></i
                      >{{ item.person }}</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <div slot="label">
          <div class="iconBox">
            <img src="img/theme/past.png" alt="Past" class="mw-100 w-50px" />
            <div class="tabTitle">
              <p class="mb-0">Past</p>
            </div>
          </div>
        </div>
        <div class="scroll-containers">
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in past" :key="index">
              <div class="eventBox shadow neadBy my-3">
                <div class="eventImage position-relative">
                  <figure class="mb-0">
                    <img :src="item.eventimage" alt="" class="mw-100 temWidth" />
                  </figure>
                  <div class="badges">
                    <router-link
                      :to="item.tagLink"
                      class="follow text-capitalize badge"
                      v-bind:title="item.btntxt"
                      >{{ item.btntxt }}</router-link
                    >
                  </div>
                </div>
                <div class="eventContent px-2">
                  <div class="d-flex align-items-center justify-content-between">
                    <h3 class="mb-0 font-weight-900 mt-0">{{ item.etitle }}</h3>
                    <el-rate
                      v-if="item.value != ''"
                      v-model="item.value"
                      disabled
                      show-score
                      text-color="#ff9900"
                    >
                    </el-rate>
                  </div>
                  <h6 class="text-gray mb-0 py-2">{{ item.ecompany }}</h6>
                  <p class="font-weight-400">
                    <span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-calendar pr-2"></i
                      >{{ item.edate }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-map-marker pr-2"></i
                      >{{ item.location }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-heartbeat pr-2"></i
                      >{{ item.health }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-clock-o pr-2"></i
                      >{{ item.time }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-hourglass-half pr-2"></i
                      >{{ item.hour }}</span
                    ><span class="pr-3 d-inline-block"
                      ><i class="text-theme-primary fa fa-hand-spock-o pr-2"></i
                      >{{ item.person }}</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  name: "eventHome",
  components: {
    vueCustomScrollbar,
  },
  data() {
    return {
      nearEvent: [
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Society Event",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Live",
          tagLink: "./event-live",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Past",
          tagLink: "./event-past",
          value: "3.7",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Upcoming",
          tagLink: "up-coming",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Live",
          tagLink: "./event-live",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Past",
          tagLink: "./event-past",
          value: "3.7",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Upcoming",
          tagLink: "up-coming",
        },
      ],
      past: [
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Society Event",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Past",
          tagLink: "./event-past",
          value: '4.7'
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Past",
          tagLink: "./event-past",
          value: '4.7'
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Past",
          tagLink: "./event-past",
          value: '4.7'
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Past",
          tagLink: "./event-past",
          value: '4.7'
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Past",
          tagLink: "./event-past",
          value: '4.7'
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Past",
          tagLink: "./event-past",
          value: '4.7'
        },
      ],
      live: [
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Society Event",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Live",
          tagLink: "./event-live",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Live",
          tagLink: "./event-live",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Live",
          tagLink: "./event-live",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Live",
          tagLink: "./event-live",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Live",
          tagLink: "./event-live",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Live",
          tagLink: "./event-live",
        },
      ],
      upcoming: [
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Society Event",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Upcoming",
          tagLink: "up-coming",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Upcoming",
          tagLink: "up-coming",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Upcoming",
          tagLink: "up-coming",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Upcoming",
          tagLink: "up-coming",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Upcoming",
          tagLink: "up-coming",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Upcoming",
          tagLink: "up-coming",
        },
      ],
    };
  },
  created() {
    console.log(this.$route.path);
  },
};
</script>

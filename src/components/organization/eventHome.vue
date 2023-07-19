<template>
  <div class="mainEvent px-3 shadow">
    <div class="headBox">
      <h2 class="font-weight-bold">Happening Now</h2>
    </div>
    <vue-custom-scrollbar class="scroll-container">
      <div class="scroll-containers pl-2">
        <div class="d-flex">
          <div class="eventBox" v-for="(item, index) in eventdata" :key="index">
            <div class="eventImage position-relative">
              <figure class="mb-0">
                <img :src="item.eventimage" alt="" class="mw-100" />
              </figure>
              <div class="joinBox">
                <p class="mb-0 text-theme-primary">
                  <i class="el-icon-circle-plus-outline"></i>Joined
                </p>
              </div>
              <div class="eventDate text-center">
                <p class="eventDatebox mb-0 lh-100 text-theme-primary">
                  {{ item.emonth }}
                </p>
                <h3 class="eventYear text-theme-primary mb-0 font-weight-90">
                  {{ item.edate }}
                </h3>
              </div>
            </div>
            <div class="eventContent pl-2">
              <h3 class="mb-0 font-weight-900">{{ item.etitle }}</h3>
              <p class="text-gray mb-0">{{ item.ecompany }}</p>
            </div>
          </div>
        </div>
      </div>
    </vue-custom-scrollbar>
    <div class="headBox">
      <h2 class="font-weight-bold">Nearby Events</h2>
    </div>
    <vue-custom-scrollbar class="scroll-container">
      <div class="scroll-containers pl-2">
        <div class="d-flex">
          <div
            class="eventBox shadow neadBy"
            v-for="(item, index) in nearEvent"
            :key="index"
          >
            <div class="eventImage position-relative">
              <figure class="mb-0">
                <img :src="item.eventimage" alt="" class="mw-100 temWidth" />
              </figure>
            </div>
            <div class="eventContent pl-2">
              <h3 class="mb-0 font-weight-900">{{ item.etitle }}</h3>
              <p class="text-gray mb-0">{{ item.ecompany }}</p>
              <p class="text-theme-primary font-weight-400">{{ item.edate }}</p>
            </div>
          </div>
        </div>
      </div>
    </vue-custom-scrollbar>
    <div class="headBox">
      <h2 class="font-weight-bold">Upcoming Events</h2>
    </div>
    <div class="upComing py-5">
      <div class="d-flex flex-wrap upComingBox">
        <div
          class="d-flex upComingevent gap-15 shadow align-items-center flex-column flex-md-row"
          v-for="(item, index) in upComing"
          :key="index"
        >
          <div class="upImage">
            <figure class="mb-0">
              <img :src="item.image" alt="Upcoming Image" />
            </figure>
          </div>
          <div class="upContent pl-3 pl-md-0">
            <h4 class="font-weight-900 mb-1">{{ item.title }}</h4>
            <h5 class="text-light mb-3">{{ item.companyName }}</h5>
            <div class="d-flex justify-content-between">
              <div class="upDate">
                <p class="text-theme-primary mb-0">
                  <i class="fa fa-calendar pr-2"></i>{{ item.date }}
                </p>
              </div>
              <div class="heartBeat">
                <p class="mb-0 text-theme-primary"><i class="fa fa-heartbeat"></i></p>
              </div>
            </div>
            <div class="d-flex">
              <p class="mb-0 text-theme-primary pr-2"><i class="fa fa-map-marker"></i></p>
              <p class="mb-0 w-75">
                {{ item.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      eventdata: [
        {
          eventimage: "/img/theme/e1.png",
          emonth: "Oct",
          edate: "25",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/e2.png",
          emonth: "Oct",
          edate: "25",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/e3.png",
          emonth: "Oct",
          edate: "25",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/e4.png",
          emonth: "Oct",
          edate: "25",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/e1.png",
          emonth: "Oct",
          edate: "25",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/e2.png",
          emonth: "Oct",
          edate: "25",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/e3.png",
          emonth: "Oct",
          edate: "25",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/e4.png",
          emonth: "Oct",
          edate: "25",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
      ],
      nearEvent: [
        {
          eventimage: "/img/theme/n1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/n2.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/n3.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/n4.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/n1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/n2.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/n3.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
        {
          eventimage: "/img/theme/n4.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
        },
      ],
      upComing: [
        {
          image: "img/theme/u1.png",
          title: "Clean & Green Dubai",
          companyName: "Organizer Name",
          date: "October 15, 2021",
          location: "463 Korey Inlet, Abu Dhabi Emirate United Arab Emirates, AE",
        },
        {
          image: "img/theme/u2.png",
          title: "Clean & Green Dubai",
          companyName: "Organizer Name",
          date: "October 15, 2021",
          location: "463 Korey Inlet, Abu Dhabi Emirate United Arab Emirates, AE",
        },
        {
          image: "img/theme/u3.png",
          title: "Clean & Green Dubai",
          companyName: "Organizer Name",
          date: "October 15, 2021",
          location: "463 Korey Inlet, Abu Dhabi Emirate United Arab Emirates, AE",
        },
        {
          image: "img/theme/u4.png",
          title: "Clean & Green Dubai",
          companyName: "Organizer Name",
          date: "October 15, 2021",
          location: "463 Korey Inlet, Abu Dhabi Emirate United Arab Emirates, AE",
        },
      ],
    };
  },
};
</script>

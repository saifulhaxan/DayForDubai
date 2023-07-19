<template>
  <div class="m-3">
    <div class="awardCertificatePage container-fluid shadow">
      <div class="eventsecton">
        <div
          class="headBox pt-5 mb-3 d-flex justify-content-between align-items-center flex-wrap"
        >
          <h2 class="font-weight-900 pt-0">
            <router-link to="./" class="text-dark"
              ><i class="el-icon-arrow-left"></i> Events & Other Details</router-link
            >
          </h2>
          <p class="mb-0">
            <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
              >Volunteer's Details</router-link
            >
          </p>
        </div>
        <div
          class="headBox pt-5 d-flex justify-content-between align-items-center flex-wrap"
        >
          <h4 class="font-weight-900 pt-0 mb-0">Events</h4>
          <div class="hourData">
            <p class="font-weight-400">
              Total Numbers of Events Attended : <span class="font-weight-900">47</span>
            </p>
            <p class="font-weight-400">
              Total Hours of Volunteer Work :
              <span class="font-weight-900">2831 hrs</span>
            </p>
          </div>
        </div>
        <div
          class="headBox pt-5 d-flex justify-content-between align-items-center flex-wrap"
        >
          <h4 class="font-weight-600 pt-0 mb-0">Live</h4>
          <p class="mb-0">
            <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
              >View More</router-link
            >
          </p>
        </div>
        <div class="row profile">
          <!-- Live Events Section -->
          <div class="row py-4 m-1 w-100 mb-2">
            <div class="col-md-4 col-sm-6" v-for="(item, index) in LiveEvent" :key="index">
              <Events :liveEvent="item" />
            </div>
          </div>
        </div>
        <!-- Upcoming Events -->
         <div
          class="headBox d-flex justify-content-between align-items-center flex-wrap px-3"
        >
          <h4 class="font-weight-600 pt-0 mb-0">Upcoming</h4>
          <p class="mb-0">
            <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
              >View More</router-link
            >
          </p>
        </div>
        <div class="row profile">
          <!-- Live Events Section -->
          <div class="row py-4 m-1 w-100 mb-2">
            <div class="col-md-4 col-sm-6" v-for="(item, index) in LiveEvent" :key="index">
              <Events :liveEvent="item" />
            </div>
          </div>
        </div>
        <!-- Past Events -->

         <div
          class="headBox d-flex justify-content-between align-items-center flex-wrap px-3"
        >
          <h4 class="font-weight-600 pt-0 mb-0">Past</h4>
          <p class="mb-0">
            <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
              >View More</router-link
            >
          </p>
        </div>
        <div class="row profile">
          <!-- Live Events Section -->
          <div class="row py-4 m-1 w-100 mb-2">
            <div class="col-md-4 col-sm-6" v-for="(item, index) in LiveEvent" :key="index">
              <Events :showRate="true" :liveEvent="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Events from "../../components/admin/eventBox.vue";
export default {
  name: "volunteer event",
  data() {
    return {
      value: 5,
      LiveEvent: [
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
          btntxt: "Following",
          value: '3.5'
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
          btntxt: "Requested",
          value: '4.2'
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
          btntxt: "Going",
          value: '5'
        },
      ],
    };
  },
  components: {
    Events,
  },
};
</script>

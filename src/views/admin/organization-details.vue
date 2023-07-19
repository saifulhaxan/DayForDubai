<template>
  <div class="awardCertificatePage container-fluid">
    <div class="eventsecton ml-4">
      <div
        class="
          headBox
          pt-5
          mb-5
          d-flex
          justify-content-between
          align-items-center
          flex-wrap
        "
      >
        <h2 class="font-weight-900 pt-0">
          <router-link to="./profile" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Organization's
            Details</router-link
          >
        </h2>
      </div>
      <div class="row shadow profile p-3 mb-4">
        <!-- information section -->
        <div class="row shadow p-2 m-1 mb-5 w-100">
          <div class="col-md-4">
            <div class="profileArea text-center pt-5">
              <div class="cardImage">
                <figure>
                  <img
                    src="img/theme/od.png"
                    alt=""
                    class="mw-100"
                    width="200px"
                    height="200px"
                  />
                </figure>
              </div>
              <div class="contentCard">
                <h5 class="text-theme-primary mb-0 font-weight-900">
                  Mathew Corp
                </h5>
                <el-rate
                  v-model="value"
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
            </div>
          </div>
          <div class="profileBox col-md-8">
            <VDetails :information="gernelInformation" />
          </div>
        </div>
        <!-- certificate Section -->
        <div class="row shadow p-2 py-4 m-1 w-100 mb-5">
          <div class="col-md-12 text-center mb-4">
            <h5 class="font-weight-900 text-dark">Certificates</h5>
          </div>
          <div
            class="col-md-3 text-center"
            v-for="(item, index) in certificateData"
            :key="index"
          >
            <div class="certificate-box">
              <figure>
                <img :src="item" alt="" class="mw-100" />
              </figure>
            </div>
          </div>
          <div class="col-md-12 text-center my-4">
            <p class="mb-0">
              <router-link
                to="./edit-profile"
                class="btn-round btn-theme-primary px-5"
                >View More</router-link
              >
            </p>
          </div>
        </div>
        <!-- event section -->
        <div class="row shadow p-2 py-4 m-1 w-100">
          <div class="col-md-12 text-center mb-4">
            <h5 class="font-weight-900 text-dark">Events</h5>
          </div>
          <div class="col-md-12 d-flex gap-15 flex-wrap flex-lg-nowrap">
            <div
              class="
                d-flex
                shadow
                rounded-30
                gap-15
                align-items-center
                justify-content-between
                p-3
                flex-wrap flex-lg-nowrap
              "
              v-for="(item, index) in eventStats"
              :key="index"
            >
              <div class="titleBox">
                <p class="mb-0 text-dark">{{ item.title }}</p>
              </div>
              <div class="countBox">
                <h3 class="text-theme-primary mb-0 font-weight-600">
                  {{ item.count }}
                </h3>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div
              class="
                headBox
                pt-5
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
              "
            >
              <h4 class="font-weight-600 pt-0 mb-0">Live</h4>
              <p class="mb-0">
                <router-link
                  to="./edit-profile"
                  class="btn-round btn-theme-primary px-5"
                  >View More</router-link
                >
              </p>
            </div>
            <div class="row profile">
              <!-- Live Events Section -->
              <div class="row py-4 m-1 w-100 mb-2">
                <div
                  class="col-md-4 col-sm-6"
                  v-for="(item, index) in LiveEvent"
                  :key="index"
                >
                  <Events :liveEvent="item" />
                </div>
              </div>
            </div>
            <!-- Upcoming Events -->
            <div
              class="
                headBox
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
                px-3
              "
            >
              <h4 class="font-weight-600 pt-0 mb-0">Upcoming</h4>
              <p class="mb-0">
                <router-link
                  to="./edit-profile"
                  class="btn-round btn-theme-primary px-5"
                  >View More</router-link
                >
              </p>
            </div>
            <div class="row profile">
              <!-- Live Events Section -->
              <div class="row py-4 m-1 w-100 mb-2">
                <div
                  class="col-md-4 col-sm-6"
                  v-for="(item, index) in LiveEvent"
                  :key="index"
                >
                  <Events :liveEvent="item" />
                </div>
              </div>
            </div>
            <!-- Past Events -->

            <div
              class="
                headBox
                d-flex
                justify-content-between
                align-items-center
                flex-wrap
                px-3
              "
            >
              <h4 class="font-weight-600 pt-0 mb-0">Past</h4>
              <p class="mb-0">
                <router-link
                  to="./edit-profile"
                  class="btn-round btn-theme-primary px-5"
                  >View More</router-link
                >
              </p>
            </div>
            <div class="row profile">
              <!-- Live Events Section -->
              <div class="row py-4 m-1 w-100 mb-2">
                <div
                  class="col-md-4 col-sm-6"
                  v-for="(item, index) in LiveEvent"
                  :key="index"
                >
                  <Events :showRate="true" :liveEvent="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VDetails from "../../components/admin/Vdetails.vue";
import Events from "../../components/admin/eventBox.vue";
export default {
  name: "Profile",
  data() {
    return {
      value: 5,
      gernelInformation: [
        {
          title: "Email:",
          text: "Amandacharles@mail.com",
        },
        {
          title: "Type:",
          text: "Health",
        },
        {
          title: "Phone:",
          text: "+971-2342322",
        },
        {
          title: "Landline:",
          text: "+971-2342322",
        },
        {
          title: "Authorization::",
          text: "Female",
        },
      ],
      certificateData: [
        "img/theme/c1.png",
        "img/theme/c2.png",
        "img/theme/c3.png",
        "img/theme/c4.png",
      ],
      eventStats: [
        {
          title: "Total Number of Events Created:",
          count: "47",
        },
        {
          title: "Total Numbers of Volunteering Hours:",
          count: "4700",
        },
        {
          title: "Total Number of Successful Events:",
          count: "32",
        },
        {
          title: "Success Rate For Events:",
          count: "86%",
        },
        {
          title: "Average Rating For Events:",
          count: "4.4",
        },
      ],
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
    VDetails,
    Events
  },
};
</script>

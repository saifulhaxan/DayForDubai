<template>
  <div class="awardCertificatePage container-fluid">
    <div class="eventsecton ml-4">
      <div
        class="headBox pt-5 mb-5 d-flex justify-content-between align-items-center flex-wrap"
      >
        <h2 class="font-weight-900 pt-0">
          <router-link to="./volunteer-request" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Volunteer's Details</router-link
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
        <!-- card Section -->
        <div class="row shadow p-2 py-4 m-1 w-100 mb-5">
          <div class="col-md-12 text-center">
            <h5 class="font-weight-900 text-dark">Emirate ID</h5>
          </div>
          <div class="col-md-6 mx-auto">
            <figure class="mb-0">
              <img src="img/theme/emirates-id.png" alt="Emirates Id" class="mw-100" />
            </figure>
          </div>
          <div class="col-md-12 my-4 d-flex justify-content-center gap-15">
            <p class="mb-0">
              <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
                >Accept</router-link
              >
            </p>
            <p class="mb-0">
              <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
                >Reject</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VDetails from "../../components/admin/Vdetails.vue";
export default {
  name: "VolunteerID",
  data() {
    return {
      value: 5,
      gernelInformation: [
        {
          title: "Email:",
          text: "Amandacharles@mail.com",
        },
        {
          title: "Date of Birth:",
          text: "02, 02, 2021",
        },
        {
          title: "Phone:",
          text: "+971-2342322",
        },
        {
          title: "User ID:",
          text: "DFD-78548",
        },
        {
          title: "Gender:",
          text: "Female",
        },
        {
          title: "Nationality:",
          text: "Dubai",
        },
        {
          title: "Emirates ID:",
          text: "4587694",
        },
      ],
    };
  },
  components: {
    VDetails,
  },
};
</script>

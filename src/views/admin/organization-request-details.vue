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
          <router-link to="./organization-request" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Organization's
            Details</router-link
          >
        </h2>
      </div>
      <div class="row shadow profile p-3 my-4">
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
        <div class="row shadow p-2 py-4 m-1 w-100">
          <div class="col-md-12 text-center mb-4">
            <h5 class="font-weight-900 text-dark">Authorization Letter: </h5>
          </div>
          <div class="col-md-12 text-center">
            <figure class="mb-0">
                <img src="img/theme/Authorization-Letter.png" alt="" class="mw-100">
            </figure>
            <div class="d-flex justify-content-center my-5 gap-15 flex-wrap">
              <router-link to="organization"
                class="btn-theme-primary btn-round w-btn font-weight-600 py-3"
                >Accept</router-link>
                <router-link to="organization-request"
                class="btn-theme-primary btn-round w-btn font-weight-600 py-3 bg-transparent text-theme-primary"
                >Reject</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VDetails from "../../components/admin/Vdetails.vue";
export default {
  name: "Organizatio Request Details",
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
      ],
    };
  },
  components: {
    VDetails,
  },
};
</script>

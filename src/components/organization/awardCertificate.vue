<template>
  <div class="awardCertificate">
    <div class="container-fluid">
      <div class="titleBox d-flex my-2">
        <h3 class="text-dark font-weight-900">{{ mainHead }}</h3>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="profileBox">
            <div class="d-flex align-items-center text-center">
              <img src="img/theme/boy.png" alt="" class="mw-100" />
              <div class="contentArea">
                <p class="text-theme-primary font-weight-900 mb-0">Casandra Wood</p>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
                <p class="mb-0">
                  <a class="text-theme-primary font-weight-900 mb-0">Rate & Review</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4">
              <div class="emailBox">
                <p class="font-weigh-600 text-dark mb-0 font-weight-900">Email:</p>
                <p class="text-light font-weight-400">Casandrawood@email.com</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hourBox">
                <p class="font-weigh-600 text-dark mb-0 font-weight-900">
                  Date of Birth:
                </p>
                <p class="text-light font-weight-400">02-02-1993</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hourBox">
                <p class="font-weigh-600 text-dark mb-0 font-weight-900">
                  Nationality:
                </p>
                <p class="text-light font-weight-400">Dubai</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="emailBox">
                <p class="font-weigh-600 text-dark mb-0 font-weight-900">Gender:</p>
                <p class="text-light font-weight-400">Female</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hourBox">
                <p class="font-weigh-600 text-dark mb-0 font-weight-900">
                  Phone No:
                </p>
                <p class="text-light font-weight-400">+971-73473583</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hourBox">
                <p class="font-weigh-600 text-dark mb-0 font-weight-900">
                 Total Hours:
                </p>
                <p class="text-light font-weight-400">110 hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="titleBox d-flex mt-5 mb-2">
        <h3 class="text-dark font-weight-900">Attendence</h3>
      </div>
      <div class="row">
        <div class="col-md-6">
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
        <div class="col-md-6">
          <cards />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cards from "./certificate-cards.vue";
export default {
  name: "Award Certificate",
  components: {
    cards,
  },
  props: {
    mainHead: {
      type: String,
    },
  },
  data() {
    return {
      value: 4,
    };
  },
};
</script>

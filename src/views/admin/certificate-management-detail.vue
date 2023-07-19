<template>
  <div class="eventListning container-fluid">
    <div class="eventsectionLive py-5">
      <div class="headBox mb-5 d-flex justify-content-between">
        <h2 class="font-weight-900 pt-0">
          <router-link to="./add-certificate" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Certificate Details</router-link
          >
        </h2>
        <div class="iconBoxs d-flex gap-15">
          <p class="mb-0 fa-18">
            <a><i class="el-icon-view"></i></a>
          </p>
          <p class="mb-0 fa-18">
            <a @click="editOptions = true"><i class="el-icon-download"></i></a>
          </p>
        </div>
      </div>
      <eventList eventStatus="Past" :volunteerList="Volunteerdata" showBox="d-none" />
      <div class="row">
        <div class="profileBox col-md-4">
          <div class="profileArea text-center d-inline-block">
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
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 py-2">
              <label for="" class="font-weight-900 text-dark">Email:</label>
              <input
                type="email"
                value="Casandrawood@email.com"
                disabled
                class="border-0 bg-transparent d-block w-100"
              />
            </div>
            <div class="col-md-6 py-2">
              <label for="" class="font-weight-900 text-dark">Phone:</label>
              <input
                type="text"
                value="+971 5489854"
                disabled
                class="border-0 bg-transparent d-block w-100"
              />
            </div>
            <div class="col-md-6 py-2">
              <label for="" class="font-weight-900 text-dark">Hours Given:</label>
              <input
                type="text"
                value="30Hrs"
                disabled
                class="border-0 bg-transparent d-block w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <el-dialog
        :visible.sync="editOptions"
        width="500px"
        center
        class="border-round report-box"
      >
        <div class="popup-content-box">
          <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
            Select Template
          </h3>
          <div class="templateBox">
            <el-form action="">
              <el-form-item class="textareaStyle">
                <el-checkbox-group v-model="checkboxGroup1">
                  <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{
                    city
                  }}</el-checkbox-button>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <p class="text-center">
                  <a href="#" class="text-theme-primary font-weight-bold"
                    >View All Templates</a
                  >
                </p>
                <el-button
                  type="button"
                  class="submit-theme-primary btn-round d-block m-auto font-weight-600"
                  :plain="true"
                  @click="(Completed = true), (editOptions = false)"
                  >Done</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-dialog>
      <el-dialog
        :visible.sync="Completed"
        width="500px"
        center
        class="border-round report-box"
      >
        <div class="popup-content-box">
          <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
            Download Complete
          </h3>
          <div class="templateBox">
            <h3 class="text-light py-5 text-center">
              Thank you for downloading the certificate. Your certificate has been saved
              in your device!
            </h3>
            <p>
              <a
                href=""
                class="submit-theme-primary btn-round d-block m-auto font-weight-600"
                >Ok</a
              >
            </p>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import eventList from "../../components/admin/eventListing.vue";
const cityOptions = ["Template 1", "Template 2", "Template 3", "Template 4"];
export default {
  name: "CertificateMDetail",
  components: {
    eventList,
  },
  data() {
    return {
      value: 4.5,
      checkboxGroup1: [],
      cities: cityOptions,
      editOptions: false,
      Completed: false,
      search: "",
      cetificateTemplate: [
        {
          template: "img/theme/cer1.png",
          title: "Template 1",
        },
        {
          template: "img/theme/cer1.png",
          title: "Template 2",
        },
      ],
    }
  },
};
</script>

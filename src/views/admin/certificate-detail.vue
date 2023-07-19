<template>
  <div class="certificateDetails-card certificateDetails">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5 d-flex justify-content-between pt-5 pb-3">
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
      <div class="certificate shadow py-4 px-3">
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="certificateBox shadow p-3 rounded-15">
              <div class="d-flex justify-content-between mb-4 flex-column">
                <div class="certificateTitle">
                  <h5 class="text-theme-primary font-weight-600 mb-0">Society Event</h5>
                  <p>Organization Name</p>
                </div>
                <div class="iconBoxs d-flex gap-15 justify-content-between align-items-center flex-wrap flex-lg-nowrap">
                  <p class="font-weight-400">
                    <span class="pr-2 d-inline-block"
                      ><i
                        class="text-theme-primary fa fa-calendar pr-2"
                        aria-hidden="true"
                      ></i
                      >October 15, 2021</span
                    >
                    <span class="pr-2 d-inline-block"
                      ><i
                        class="text-theme-primary fa fa-clock pr-2"
                        aria-hidden="true"
                      ></i
                      >09:00am - 01:00pm</span
                    >
                    <span class="pr-2 d-inline-block"
                      ><i
                        class="text-theme-primary fa fa-map-marker pr-2"
                        aria-hidden="true"
                      ></i
                      >463 Korey Inlet, Abu Dhabi Emirate United Arab Emirates, AE</span
                    >
                  </p>
                  <div class="mapBox flex-shrink-0">
                    <p class="mb-0">
                      <a href="#" class="text-theme-primary font-weight-600"
                        >View On Map</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-md-12">
            <h4 class="font-weight-900 text-dark mb-4">Templates:</h4>
            <div class="row">
              <div
                class="col-md-2"
                v-for="(item, index) in cetificateTemplate"
                :key="index"
              >
                <div class="certificateBox text-center position-relative">
                  <figure>
                    <img :src="item.template" class="mw-100" />
                  </figure>
                  <h5 class="mb-0">{{ item.title }}</h5>
                  <button
                    type="button"
                    aria-label="Close"
                    class="el-dialog__headerbtn"
                    @click="delTemp(index)"
                  >
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
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
                    <el-checkbox-button
                      v-for="city in cities"
                      :label="city"
                      :key="city"
                      >{{ city }}</el-checkbox-button
                    >
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
  </div>
</template>
<script>
const cityOptions = ["Template 1", "Template 2", "Template 3", "Template 4"];
export default {
  name: "Certificate Details",
  data() {
    return {
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
  methods: {
    delTemp(index) {
      this.cetificateTemplate.splice(index, 1);
    },
  },
};
</script>

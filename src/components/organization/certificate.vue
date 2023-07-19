<template>
  <div class="certificate">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="(item, index) in certificateData" :key="index">
        <div class="certificateBox shadow p-3 rounded-15">
          <div class="d-flex justify-content-between mb-4">
            <h5 class="text-theme-primary font-weight-600">Certificate</h5>
            <div class="iconBoxs d-flex gap-15">
              <p class="mb-0">
                <a><i class="el-icon-view"></i></a>
              </p>
              <p class="mb-0">
                <a @click="editOptions = true"><i class="el-icon-download"></i></a>
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="w-100">
              <p class="font-weight-600 mb-2 text-dark">Society Event</p>
              <p class="font-weight-600 mb-2 text-dark">Organization Name</p>
              <p class="font-weight-600 mb-2 text-dark">Event Category</p>
            </div>
            <div class="w-100">
              <p class="text-light mb-2">
                <i class="fa fa-users text-theme-primary pr-2"></i>{{ item.eventText }}
              </p>
              <p class="text-light mb-2">
                <i class="fa fa-calendar text-theme-primary pr-2"></i>{{ item.eventDate }}
              </p>
              <p class="text-light mb-2">
                <i class="fa fa-clock-o text-theme-primary pr-2"></i>{{ item.eventTime }}
              </p>
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
                @click="Completed = true, editOptions = false"
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
            Thank you for downloading the certificate. Your certificate has been saved in
            your device!
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
</template>
<script>
const cityOptions = ["Template 1", "Template 2", "Template 3", "Template 4"];
export default {
  name: "certificates",
  data() {
    return {
      checkboxGroup1: [],
      cities: cityOptions,
      editOptions: false,
      Completed: false,
      search: "",
      certificateData: [
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
        {
          eventText: "38 Hour Completed",
          eventDate: "October 15, 2021",
          eventTime: "09:00am - 01:00pm",
        },
      ],
    };
  },
};
</script>

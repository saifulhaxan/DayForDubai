<template>
  <div class="addCertificate h-100vh">
    <div class="eventsecton ml-4">
      <div class="headBox my-5">
        <h2 class="font-weight-900 pt-0">
          <router-link to="#" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Add Certificate</router-link
          >
        </h2>
      </div>
      <div class="filter">
        <div class="enventCategory shadow p-3 py-5">
          <el-form ref="form">
            <div class="d-flex flex-md-row flex-column gap-15 add-new-form py-3">
              <div class="flex-grow-1">
                <el-form-item label="Event:">
                  <el-select
                    v-model="Location"
                    placeholder="Select Event"
                    class="w-100 rounded-15"
                  >
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="flex-grow-1">
                <el-form-item label="Event Category:">
                  <el-select
                    v-model="Gender"
                    placeholder="Select Category"
                    class="w-100 rounded-15"
                  >
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <div class="d-flex flex-md-row flex-column gap-15 add-new-form py-3">
              <div class="col-md-6 px-0">
                <el-form-item label="Certificate Name:">
                  <el-input placeholder="" v-model="certificate"></el-input>
                </el-form-item>
              </div>
            </div>
          </el-form>
          <div class="row my-4">
            <div class="col-md-12">
              <h4 class="font-weight-900 text-dark mb-4">Select Templates:</h4>
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
              <div class="btn-filter text-center">
                <router-link
                  to="./certificate-management"
                  class="btn-theme-primary btn-round border-0 mr-2 px-5"
                >
                  Done
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const cityOptions = [
  "Education",
  "Health",
  "Art & Culture",
  "Corporate",
  "Music",
  "Socializing",
];
export default {
  name: "Add Certificate",
  data() {
    return {
      checkboxGroup1: ["Education"],
      cities: cityOptions,
      Location: "",
      Gender: "",
      certificate: "",
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
    };
  },
  methods: {
    delTemp(index) {
      this.cetificateTemplate.splice(index, 1);
    },
  },
};
</script>

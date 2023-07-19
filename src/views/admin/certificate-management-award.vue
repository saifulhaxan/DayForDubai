<template>
  <div class="organizerFilter container-fluid">
    <div class="eventsecton ml-4">
      <div class="headBox my-5">
        <h2 class="font-weight-900 pt-0">
          <router-link to="./add-certificate" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Award Certificate</router-link
          >
        </h2>
      </div>
      <div class="awardContentArea shadow p-3 py-5 mb-5">
        <el-form ref="form">
          <div class="row">
            <div class="col-md-8">
              <div class="awardCertificate">
                <div class="enventCategory">
                  <div class="d-flex flex-column gap-15 add-new-form py-3">
                    <div class="flex-grow-1">
                      <el-form-item label="Event:">
                        <el-select
                          v-model="Event"
                          placeholder="Select Event"
                          class="w-100 rounded-15"
                        >
                          <el-option label="Zone one" value="shanghai"></el-option>
                          <el-option label="Zone two" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <div class="flex-grow-1">
                      <el-form-item label="Select Volunteers:">
                        <el-select
                          v-model="Volunteer"
                          placeholder="Select Volunteers"
                          class="w-100 rounded-15"
                        >
                          <el-option label="Zone one" value="shanghai"></el-option>
                          <el-option label="Zone two" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap gap-15">
            <div
              class="personBox"
              v-for="(item, index) in cetificateTemplate"
              :key="index"
            >
              <div
                class="certificateBox text-center position-relative d-flex align-items-center shadow gap-15 rounded-30 py-3 px-4 flex-wrap flex-lg-nowrap"
              >
                <div class="templateImage flex-shrink-0">
                  <figure class="mb-0">
                    <img :src="item.template" class="mw-100" />
                  </figure>
                </div>
                <div class="templateContent">
                  <p class="mb-0 font-weight-600 text-dark fa-18px">{{ item.title }}</p>
                </div>
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
            <div class="col-md-12 mt-4">
              <div class="btn-filter">
                <button
                  type="button"
                  class="btn-theme-primary btn-round border-0 mr-2 w-180px"
                >
                  Award
                </button>
              </div>
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CertificateAward",
  data() {
    return {
      Event: "",
      Volunteer: "",
      cetificateTemplate: [
        {
          template: "img/theme/girl.png",
          title: "Jason Mark",
        },
        {
          template: "img/theme/girl.png",
          title: "Kate Austen",
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

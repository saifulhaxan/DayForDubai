<template>
    <div class="setting h-100vh">
      <div class="eventsecton">
        <div class="headBox mb-5">
          <router-link to="/change-password"><h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Setting</h2></router-link>
        </div>
        <div class="eventDetail shadow p-md-5 p-2">
          <div class="d-flex justify-content-between shadow p-4 w-50 rounded-15 my-4 align-items-center h-adjust">
            <div class="titleBox">
              <h6 class="font-weight-600 mb-0">Push Notification</h6>
            </div>
            <div class="butnBox">
              <div class="vue-form-control">
                <el-tooltip :content="'Switch value: ' + value" placement="top">
                  <el-switch
                    v-model="value"
                    active-color="#00A5B5"
                    inactive-color="#ccc"
                    active-value="100"
                    inactive-value="0"
                  >
                  </el-switch>
                </el-tooltip>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between shadow p-4 w-50 rounded-15 my-4 align-items-center h-adjust">
            <div class="titleBox">
              <h6 class="font-weight-600 mb-0">Change Password</h6>
            </div>
            <div class="butnBox">
              <p class="mb-0"><router-link to="./change-password"><i class="el-icon-edit-outline fa-2x text-dark"></i></router-link></p>
            </div>
          </div>
          <div class="d-flex justify-content-between shadow p-4 w-50 rounded-15 my-4 align-items-center h-adjust">
            <div class="titleBox">
              <h6 class="font-weight-600 mb-0">Referral Link </h6>
               <p class="mb-0">https://www.w3.org/Provider/Style/dummy.html</p>
            </div>
            <div class="butnBox">
              <p class="mb-0"><router-link to="#"><i class="el-icon-copy-document fa-2x text-dark"></i></router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Setting",
  data() {
      return {
        value: "100",
      }
  }
};
</script>

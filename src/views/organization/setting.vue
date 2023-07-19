<template>
  <div class="oSetting h-100vh">
    <div class="eventsecton">
      <div class="headBox mb-5">
        <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Setting</h2>
      </div>
      <div class="eventDetail shadow p-5">
        <div
          class="d-flex justify-content-between shadow p-4 w-50 rounded-15 my-4 align-items-center h-adjust"
        >
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
        <div
          class="d-flex justify-content-between shadow p-4 w-50 rounded-15 my-4 align-items-center h-adjust"
        >
          <div class="titleBox">
            <h6 class="font-weight-600 mb-0">Change Password</h6>
          </div>
          <div class="butnBox">
            <p class="mb-0">
              <router-link to="./change-password"
                ><i class="el-icon-edit-outline fa-2x text-dark"></i
              ></router-link>
            </p>
          </div>
        </div>
        <div
          class="d-flex justify-content-between shadow p-4 w-50 rounded-15 my-4 align-items-center h-adjust"
        >
          <div class="titleBox">
            <h6 class="font-weight-600 mb-0">Event Rating</h6>
          </div>
          <div class="butnBox">
            <el-radio v-model="radio" label="1">Private</el-radio>
            <el-radio v-model="radio" label="2">Public</el-radio>
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
      radio: '1'
    };
  },
};
</script>

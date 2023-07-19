<template>
    <div class="cPassword h-100vh">
      <div class="eventsecton">
        <div class="headBox mb-5">
          <h2 class="font-weight-900">
            <router-link to="./setting" class="text-dark"><i class="el-icon-arrow-left"></i></router-link> Change Password
          </h2>
        </div>
        <div class="eventDetail shadow p-5 h-100vh">
          <div class="row">
            <div class="col-md-4 m-auto">
              <el-form action="#">
                <div class="vue-form-control my-3">
                  <el-input
                    placeholder="Current Password"
                    v-model="currentPassword"
                    show-password
                  >
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                  </el-input>
                </div>
                <div class="vue-form-control my-3">
                  <el-input
                    placeholder="New password "
                    v-model="newPassword"
                    show-password
                  >
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                  </el-input>
                </div>
                <div class="vue-form-control my-3">
                  <el-input
                    placeholder="Confirm Password"
                    v-model="confirmPassword"
                    show-password
                  >
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                  </el-input>
                </div>
                <div class="volunteerBtn mt-5 text-center">
                  <button
                    type="update"
                    class="m-auto btn-theme-primary py-2 border-0 btnUpdate"
                  >
                    Update
                  </button>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Change Password",
  data() {
    return {
      value: "100",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
};
</script>

<template>
  <section class="volunteer mx-md-3">
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h4 class="font-weight-900 text-dark"><router-link to="volunteer" class="font-weight-900 text-dark"
            ><i class="el-icon-arrow-left"></i>Add Volunteer</router-link></h4>
        </div>
      </div>
      <div class="add-new-volunteer row">
          <div class="col-xl-8">
            <el-form>
              <div class="d-flex align-items-center flex-wrap mb-4">
                <label class="col-md-3 text-dark font-weight-bold">Volunteer Name:</label>
                <el-input
                  placeholder="Enter Name:"
                  v-model="VolunteerName"
                  name="VolunteerName"
                  class="col-md-9 shadow border-0 rounded-30 h-50"
                ></el-input>
              </div>
              <div class="d-flex align-items-center flex-wrap mb-4">
                <label class="col-md-3 text-dark font-weight-bold">Email:</label>
                <el-input
                  placeholder="Enter Email:"
                  v-model="email"
                  name="email"
                  type="email"
                  class="col-md-9 shadow border-0 rounded-30 h-50"
                ></el-input>
              </div>
              <div class="d-flex align-items-center flex-wrap mb-4">
                <label class="col-md-3 text-dark font-weight-bold">Password:</label>
                <el-input
                  placeholder="Enter Password"
                  v-model="Password"
                  show-password
                  class="col-md-9 shadow border-0 rounded-30 h-50"
                >
                </el-input>
              </div>
              <div class="d-flex align-items-center flex-wrap mb-4">
                <label class="col-md-3 text-dark font-weight-bold">Confirm Password:</label>
                <el-input
                  placeholder="Re-enter Password"
                  v-model="ConfirmPassword"
                  show-password
                  class="col-md-9 shadow border-0 rounded-30 h-50"
                >
                </el-input>
              </div>
              <div class="d-flex align-items-center flex-wrap mb-4">
                <label class="col-md-3 text-dark font-weight-bold">Phone No:</label>
                <el-input
                  placeholder="Enter Phone No:"
                  v-model="phone"
                  name="number"
                  type="number"
                  class="col-md-9 shadow border-0 rounded-30 h-50"
                ></el-input>
              </div>
              <div class="col-md-9 mt-5 ml-auto px-0">
                <button type="sunmit" class="btn-round btn-theme-primary px-5 py-3 fa-fx1 border-0 w-auto"
                  >Add Volunteers</button
                >
              </div>
            </el-form>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddVolunteer",
  data() {
    return {
      VolunteerName: "",
      email: "",
      Password: "",
      ConfirmPassword: "",
      phone: "",
    };
  },
};
</script>

<template>
  <section class="volunteer mx-md-3">
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h4 class="font-weight-900 text-dark">
            <router-link to="organization" class="font-weight-900 text-dark"
              ><i class="el-icon-arrow-left"></i>Add Organization</router-link
            >
          </h4>
        </div>
      </div>
      <div class="add-new-volunteer row">
        <div class="col-xl-8">
          <el-form>
            <div class="d-flex align-items-center flex-wrap mb-4">
              <label class="col-md-3 text-dark font-weight-bold">User Name:</label>
              <el-input
                placeholder="Enter Name:"
                v-model="Name"
                name="Name"
                class="col-md-9 shadow border-0 rounded-30 h-50"
              ></el-input>
            </div>
            <div class="d-flex align-items-center flex-wrap mb-4">
              <label class="col-md-3 text-dark font-weight-bold"
                >Organization Name:</label
              >
              <el-input
                placeholder="Organization Name:"
                v-model="OrganizationName"
                name="OrganizationName"
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
            <div class="d-flex align-items-center flex-wrap mb-4">
              <label class="col-md-3 text-dark font-weight-bold"
                >Type of Organization:</label
              >
              <el-select
                v-model="value"
                clearable
                placeholder="Select"
                class="col-md-9 shadow border-0 rounded-30 h-50"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="col-md-9 mt-5 ml-auto px-0">
              <button
                type="sunmit"
                class="btn-round btn-theme-primary px-5 py-3 fa-fx1 border-0 w-auto"
              >
                Add
              </button>
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
      Name: "",
      OrganizationName: "",
      email: "",
      Password: "",
      ConfirmPassword: "",
      phone: "",
      value: "",
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    };
  },
};
</script>

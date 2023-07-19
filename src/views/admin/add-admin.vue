<template>
  <section class="volunteer mx-md-3">
    <div class="volunteerData container-fluid">
      <div class="row my-4">
        <div class="col-md-12">
          <router-link to="admin-table" class="text-dark"
            ><h3 class="font-weight-900 text-dark">
              <i class="el-icon-arrow-left"></i> Add Admin
            </h3></router-link
          >
        </div>
      </div>
      <div class="row my-5 px-3 rounded-15 py-5 shadow addAdmin">
        <div class="col-md-12">
          <div class="vue-form-control border-0 my-4">
            <label for="" class="font-weight-900 text-dark">First Name: </label>
            <el-input placeholder="" v-model="name"> </el-input>
          </div>
          <div class="vue-form-control border-0 my-4">
            <label for="" class="font-weight-900 text-dark">Last Name: </label>
            <el-input placeholder="" v-model="lname"> </el-input>
          </div>
          <div class="vue-form-control border-0 my-4">
            <label for="" class="font-weight-900 text-dark">Email: </label>
            <el-input placeholder="" v-model="email"> </el-input>
          </div>
          <div class="vue-form-control border-0 my-4">
            <label for="" class="font-weight-900 text-dark">Password: </label>
            <el-input placeholder="" v-model="password" show-password> </el-input>
          </div>
        </div>
        <div class="col-md-12">
          <h5 class="text-dark mb-3 font-weight-900">Privilages:</h5>
          <div class="responsive-table">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="text-dark"
                    v-for="(item, index) in tableHead"
                    :key="index"
                  >
                    {{ item }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                  <td scope="row">{{ item.module }}</td>
                  <td><el-checkbox :v-model="item.modal"></el-checkbox></td>
                  <td><el-checkbox :v-model="item.modal"></el-checkbox></td>
                  <td><el-checkbox :v-model="item.modal"></el-checkbox></td>
                  <td><el-checkbox :v-model="item.modal"></el-checkbox></td>
                </tr>
              </tbody>
            </table>
            <p class="mb-0 text-center mt-5">
              <router-link
                to="admin-table"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600"
                >Add</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "add-admin",
  data() {
    return {
      name: "",
      lname: "",
      checkboxdata: [],
      email: "",
      password: "",
      tableHead: ["Modules", "View", "Create", "Update", "Delete"],
      tableData: [
        {
          module: "Dashboard",
          modal: false,
        },
        {
          module: "User Management",
          modal: false,
        },
        {
          module: "Organization Management",
          modal: false,
        },
        {
          module: "Event Management",
          modal: false,
        },
        {
          module: "Attendence Management",
          modal: false,
        },
        {
          module: "Certificate Management",
          modal: false,
        },
        {
          module: "Category Management",
          modal: false,
        },
        {
          module: "Content Management",
          modal: false,
        },
        {
          module: "Report/issue ",
          modal: false,
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    addFind: function () {
      this.checkboxdata.push({ value: "" });
    },
  },
};
</script>

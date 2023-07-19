<template>
  <section class="volunteer mx-md-3 mb-5">
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h3 class="font-weight-900 text-dark">Volunteers</h3>
        </div>
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-15 flex-wrap justify-content-md-end">
            <p class="font-weight-600 text-dark mb-0">
              <router-link to="volunteer-request" class="text-dark"
                >Volunteers Requests</router-link
              >
            </p>
            <p class="mb-0">
              <router-link
                to="add-volunteer"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600"
                >Add Volunteers</router-link
              >
            </p>
          </div>
        </div>
      </div>
      <div class="tableFilter mb-4">
        <div class="d-flex justify-content-between flex-wrap">
          <div
            class="tableStatus d-flex gap-15 align-items-center flex-wrap mb-3 mb-xl-0"
          >
            <label class="mb-0">User Status</label>
            <el-select v-model="value" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div
            class="demo-input-suffix tableStatus d-flex gap-15 flex-wrap flex-md-nowrap"
          >
            <div class="block">
              <el-date-picker
                :picker-options="pickerOptions"
                v-model="to"
                type="daterange"
                align="right"
                start-placeholder="Start Date"
                end-placeholder="End Date"
              >
              </el-date-picker>
            </div>
            <el-input placeholder="Search" v-model="search">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
      <div class="volunteerTable">
        <volunteer :tableData="volunteerData" :columnData="volunteerColumnData" />
      </div>
    </div>
    <div class="pagination d-flex justify-content-between align-items-center flex-wrap">
      <p class="mb-3 mb-xl-0 font-weight-600">Showing 1 to 10 of 22 entries</p>
      <el-pagination background layout="prev, pager, next" :total="100"> </el-pagination>
    </div>
  </section>
</template>

<script>
import volunteer from "../../components/admin/admin-table.vue";
export default {
  name: "Volunteer",
  components: {
    volunteer,
  },
  data() {
    return {
      volunteerData: [
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail",
          value: "Active",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail",
          value: "Active",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail",
          value: "In Active",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail",
          value: "Active",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail",
          value: "In Active",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail",
          value: "Active",
        },
      ],
      volunteerColumnData: [
        "S.No",
        "ID",
        "Name",
        "Email",
        "Nationality",
        "Gender",
        "Contact No",
        "Date",
        "Status",
        "Actions",
      ],
      options: [
        {
          value: "Active",
          label: "Active",
        },
        {
          value: "In Active",
          label: "In Active",
        },
      ],
      value: "",
      from: "",
      to: "",
      search: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() <= Date.now();
        },
      },
    };
  },
};
</script>

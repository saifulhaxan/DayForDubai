<template>
  <section class="volunteer mx-md-3">
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h3 class="font-weight-900 text-dark">Attendence Management</h3>
        </div>
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-15 flex-wrap justify-content-md-end">
            <p class="mb-0">
              <a
                href="#"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600"
                >Events</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="tableFilter mb-4">
        <div class="d-flex justify-content-end flex-wrap">
          <div
            class="demo-input-suffix tableStatus d-flex gap-15 flex-wrap flex-md-nowrap"
          >
            <div class="block">
              <el-date-picker
                v-model="to"
                type="daterange"
                align="right"
                start-placeholder="Start Date"
                end-placeholder="End Date"
                default-value="2010-10-01"
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
        <table class="table table-striped table-responsive d-md-table">
          <thead>
            <tr>
              <th scope="col" v-for="(item, index) in volunteerColumnData" :key="index">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in volunteerData" :key="index">
              <th scope="row">{{ index }}</th>
              <td>
                {{ item.eventName }}
              </td>
              <td>
                {{ item.uName }}
              </td>
              <td>
                {{ item.hour }}
              </td>
              <td>
                {{ item.date }}
              </td>
              <td>
                <span class="statusBtn" :class="item.attendence == 'Check In' ? 'bg-primary-color text-white' : '' || item.attendence == 'Marked' ? 'opacity-4' : '' || item.attendence == 'Check Out' ? 'bg-secondary text-dark' : ''" >{{ item.attendence }}</span>
              </td>
              <td>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-more-outline rotate-90"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      ><router-link :to="item.link" class="text-dark"
                        >View</router-link
                      ></el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="pagination d-flex justify-content-between align-items-center">
      <p class="mb-0 font-weight-600">Showing 1 to 10 of 22 entries</p>
      <el-pagination background layout="prev, pager, next" :total="100"> </el-pagination>
    </div>
  </section>
</template>

<script>
export default {
  name: "AttendenceManagement",
  data() {
    return {
      volunteerData: [
        {
          eventName:"Event 1",
          uName: "Kate",
          hour: "12hrs",
          date: "05/12/2020",
          attendence: "Check In",
          link: "./attandence-management-detail",
        },
        {
          eventName:"Event 2",
          uName: "Jason",
          hour: "12hrs",
          date: "05/12/2020",
          attendence: "Check Out",
          link: "./attandence-management-detail",
        },
        {
          eventName:"Event 3",
          uName: "Kate",
          hour: "12hrs",
          date: "05/12/2020",
          attendence: "Marked",
          link: "./attandence-management-detail",
        },
        {
          eventName:"Event 4",
          uName: "Jason",
          hour: "12hrs",
          date: "05/12/2020",
          attendence: "Check Out",
          link: "./attandence-management-detail",
        },
        {
          eventName:"Event 5",
          uName: "Kate",
          hour: "12hrs",
          date: "05/12/2020",
          attendence: "Check In",
          link: "./attandence-management-detail",
        },
      ],
      volunteerColumnData: [
        "S.No",
        "Event Name",
        "User Name",
        "Total Hours/Day",
        "Start Date",
        "Attendence",
        "Actions",
      ],
      options: [
        {
          value: "Active",
          label: "Active",
        },
        {
          value: "Inactive",
          label: "Inactive",
        },
      ],
      value: "",
      from: "",
      to: "",
      search: "",
    };
  },
};
</script>

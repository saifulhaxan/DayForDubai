<template>
  <section class="volunteer mx-md-3 mb-5">
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h3 class="font-weight-900 text-dark">Organizations Requests</h3>
        </div>
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-15 flex-wrap justify-content-md-end">
            <p class="mb-0">
              <router-link
                to="organization"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600"
                >Organization</router-link
              >
            </p>
          </div>
        </div>
      </div>
      <div class="tableFilter mb-4">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="tableStatus d-flex gap-15 align-items-center flex-wrap">
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
        <div class="admin-tables">
          <div class="row">
            <div class="col-md-12">
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
                      {{ item.name}}
                    </td>
                    <td>
                      {{ item.email}}
                    </td>
                    <td>
                      {{ item.contact}}
                    </td>
                    <td>
                      {{ item.date}}
                    </td>
                    <td>
                      <el-select
                        v-model="item.value"
                        placeholder="Select"
                        class="status-style"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </td>
                    <td>
                      <el-dropdown>
                        <span class="el-dropdown-link">
                          <i class="el-icon-more-outline rotate-90"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item
                            ><router-link :to="item.link"
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
        </div>
        <volunteer :tableData="volunteerData" :columnData="volunteerColumnData" />
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
  name: "OrganizationRequest",
  data() {
    return {
      volunteerData: [
        {
          name: "Connie",
          email: "Info@email.com",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "organization-request-details",
          value: "Approval",
        },
        {
          name: "Connie",
          email: "Info@email.com",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "organization-request-details",
          value: "Rejected",
        },
        {
          name: "Connie",
          email: "Info@email.com",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "organization-request-details",
          value: "Pending",
        },
        {
          name: "Connie",
          email: "Info@email.com",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "organization-request-details",
          value: "Rejected",
        },
        {
          name: "Connie",
          email: "Info@email.com",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "organization-request-details",
          value: "Approval",
        },
        {
          name: "Connie",
          email: "Info@email.com",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "organization-request-details",
          value: "Pending",
        },
      ],
      volunteerColumnData: [
        "S.No",
        "Name",
        "Email",
        "Contact No",
        "Date",
        "Status",
        "Actions",
      ],
      options: [
        {
          value: "Pending",
          label: "Pending",
        },
        {
          value: "Approval",
          label: "Approval",
        },
        {
          value: "Rejected",
          label: "Rejected",
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

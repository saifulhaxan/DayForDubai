<template>
  <section class="volunteer mx-md-3 mb-5">
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h3 class="font-weight-900 text-dark">Volunteers Requests</h3>
        </div>
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-15 flex-wrap justify-content-md-end">
            <router-link to="./volunteer"
              ><p class="font-weight-600 text-dark mb-0">Volunteers</p></router-link
            >
            <p class="mb-0">
              <a
                href="/VDay4Dubai/event-check-out"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600"
                >Download</a
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
                  {{ item.name }}
                </td>
                <td>
                  {{ item.email }}
                </td>
                <td>
                  {{ item.nationality }}
                </td>
                <td>
                  {{ item.gender }}
                </td>
                <td>
                  {{ item.contact }}
                </td>
                <td>
                  {{ item.date }}
                </td>
              <td>
                <el-select v-model="item.value" placeholder="Select" class="status-style">
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
  name: "VolunteerRequest",
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
          link: "volunteer-detail-id",
          value: "Pending",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail-id",
          value: "Pending",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail-id",
          value: "Approved",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail-id",
          value: "Pending",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail-id",
          value: "Approved",
        },
        {
          id: "We-022",
          name: "Connie",
          email: "Info@email.com",
          nationality: "Dubai",
          gender: "Male",
          contact: "+966-632342",
          date: "05/12/2020",
          link: "volunteer-detail-id",
          value: "Pending",
        },
      ],
      volunteerColumnData: [
        "S.No",
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
          value: "Pending",
          label: "Pending",
        },
        {
          value: "Approved",
          label: "Approved",
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

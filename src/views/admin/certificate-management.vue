<template>
  <section class="volunteer mx-md-3 py-4">
    <h2 class="font-weight-900 text-dark">Certificate Management</h2>
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h3 class="font-weight-900 text-dark">Certificate</h3>
        </div>
        <div class="col-md-4">
          <div
            class="d-flex gap-15 flex-wrap justify-content-md-end flex-column align-items-end"
          >
            <p class="mb-0">
              <router-link
                to="./certificate-management-award"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600"
                >Award Certificate</router-link
              >
            </p>
            <p class="mb-0">
              <router-link
                to="./add-certificate"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600 text-dark bg-light"
                >Upload</router-link
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
                {{ item.ename }}
              </td>
              <td>
                {{ item.categoryNme }}
              </td>
              <td>
                {{ item.certificateName }}
              </td>
              <td>
                {{ item.hour }}
              </td>
              <td>
                {{ item.date }}
              </td>
              <td>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-more-outline rotate-90"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      ><router-link to="./certificate-detail" class="text-dark"
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
    <!-- award certificate -->

    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-12">
          <h3 class="font-weight-900 text-dark">Awarded Certificate</h3>
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
                {{ item.ename }}
              </td>
              <td>
                {{ item.categoryNme }}
              </td>
              <td>
                {{ item.certificateName }}
              </td>
              <td>
                {{ item.hour }}
              </td>
              <td>
                {{ item.date }}
              </td>
              <td>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-more-outline rotate-90"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      ><router-link to="./certificate-management-detail" class="text-dark"
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
  name: "certificateManagement",
  data() {
    return {
      volunteerData: [
        {
          ename: "We-022",
          categoryNme: "We-022",
          certificateName: "Event 2",
          hour: "22",
          date: "20/12/20",
          value: "Active",
        },
        {
          ename: "We-022",
          categoryNme: "We-022",
          certificateName: "Event 2",
          hour: "22",
          date: "20/12/20",
          value: "Active",
        },
        {
          ename: "We-022",
          categoryNme: "We-022",
          certificateName: "Event 2",
          hour: "22",
          date: "20/12/20",
          value: "Active",
        },
        {
          ename: "We-022",
          categoryNme: "We-022",
          certificateName: "Event 2",
          hour: "22",
          date: "20/12/20",
          value: "Active",
        },
        {
          ename: "We-022",
          categoryNme: "We-022",
          certificateName: "Event 2",
          hour: "22",
          date: "20/12/20",
          value: "Active",
        },
        {
          ename: "We-022",
          categoryNme: "We-022",
          certificateName: "Event 2",
          hour: "22",
          date: "20/12/20",
          value: "Active",
        },
      ],
      volunteerColumnData: [
        "S.No",
        "Event Name",
        "Category Name",
        "Certificate Name",
        "Total Hours",
        "Date",
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

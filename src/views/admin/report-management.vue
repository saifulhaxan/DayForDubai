<template>
  <section class="volunteer mx-md-3 mb-5">
    <div class="volunteerData my-5 px-3 rounded-30 py-3 shadow">
      <div class="row mb-4">
        <div class="col-md-12 py-4">
          <h3 class="font-weight-900 text-dark">Report Management</h3>
        </div>
        <div class="col-md-12">
          <div class="manageFilter">
            <router-link
              v-for="(item, index) in category"
              class="categoryTab"
              :label="index"
              :key="index"
              :to="item.route"
            >
              {{ item.label }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="tableFilter mb-4">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="tableStatus d-flex gap-15 align-items-center flex-wrap">
            <label class="mb-0">Status</label>
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
                {{ item.categoryNme }}
              </td>
              <td>
                {{ item.added }}
              </td>
              <td>
                {{ item.events }}
              </td>
              <td>
                {{ item.addons }}
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
                      ><router-link to="user-report-detail" class="text-dark"
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
import volunteer from "../../components/admin/admin-table.vue";
export default {
  name: "Volunteer",
  components: {
    volunteer,
  },
  data() {
    return {
      category: [
        {
          label: "User Report",
          route: "user-report-detail",
        },
        {
          label: "Event Report",
          route: "event-report-detail",
        },
        {
          label: "Post Report",
          route: "post-report-detail",
        },
        {
          label: "Comment Report",
          route: "comment-report-detail",
        },
        {
          label: "Suggestion Report",
          route: "suggestion-report-detail",
        },
        {
          label: "Event Comment Report",
          route: "comment-post-report-detail",
        },
      ],
      volunteerData: [
        {
          categoryNme: "We-022",
          addons: "03-02-2021",
          added: "Event 2",
          events: "22",
          value: "Active",
        },
        {
          categoryNme: "We-022",
          addons: "03-02-2021",
          added: "Event 2",
          events: "141",
          value: "Active",
        },
        {
          categoryNme: "We-022",
          addons: "03-02-2021",
          added: "Event 2",
          events: "182",
          value: "Active",
        },
        {
          categoryNme: "We-022",
          addons: "03-02-2021",
          added: "Event 2",
          events: "256",
          value: "Active",
        },
        {
          categoryNme: "We-022",
          addons: "03-02-2021",
          added: "Event 2",
          events: "75",
          value: "Inactive",
        },
      ],
      volunteerColumnData: [
        "S.No",
        "Organization Name",
        "Added On",
        "User Name",
        "Date",
        "Status",
        "Actions",
      ],
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
      value: "",
      from: "",
      to: "",
      search: "",
    };
  },
};
</script>

<template>
  <section class="volunteer mx-md-3">
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h3 class="font-weight-900 text-dark">Event Requests</h3>
        </div>
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-15 flex-wrap justify-content-md-end">
            <p class="mb-0">
              <router-link
                to="events"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600"
                >Events</router-link
              >
            </p>
          </div>
        </div>
      </div>
      <div class="tableFilter mb-4">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="tableStatus d-flex gap-15 align-items-center flex-wrap">
            <label class="mb-0">Request Status</label>
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
                {{ item.eName }}
              </td>
              <td>
                {{ item.oName }}
              </td>
              <td>
                {{ item.eventCat }}
              </td>
              <td>
                {{ item.date }}
              </td>
              <td>
                <el-select v-model="item.status" placeholder="Select" class="status-style">
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
                      ><router-link :to="item.action" class="text-dark"
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
  name: "EventRequest",
  data() {
    return {
      volunteerData: [
        {
          eName: "Event 1",
          oName: "Organization1",
          eventCat: "Music",
          date: "05/12/2020",
          status: 'Pending',
          action: './event-request-detail'
        },
       {
          eName: "Event 2",
          oName: "Organization1",
          eventCat: "Food",
          date: "05/12/2020",
          status: 'Approved',
          action: './event-request-detail'
        },
        {
          eName: "Event 3",
          oName: "Organization2",
          eventCat: "Music",
          date: "05/12/2020",
          status: 'Approved',
          action: './event-request-detail'
        },
        {
          eName: "Event 3",
          oName: "Organization3",
          eventCat: "Food",
          date: "05/12/2020",
          status: 'Approved',
          action: './event-request-detail'
        },
        {
          eName: "Event 4",
          oName: "Organization4",
          eventCat: "Music",
          date: "05/12/2020",
          status: 'Pending',
          action: './event-request-detail'
        },
        {
          eName: "Event 1",
          oName: "Organization1",
          eventCat: "Music",
          date: "05/12/2020",
          status: 'Rejected',
          action: 'Pending'
        },
      ],
      volunteerColumnData: [
        "S.No",
        "Category Name",
        "Added On",
        "No.of Events",
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

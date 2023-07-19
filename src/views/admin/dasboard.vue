<template>
  <div class="dasboardArea">
    <div class="container-fluid">
      <div class="row py-4">
        <div class="col-md-6">
          <h3 class="h4 font-weight-900">Dashboard</h3>
        </div>
        <div class="searhBox eventsearch col-md-3 ml-auto">
          <el-input
            placeholder="Search events"
            prefix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
        </div>
      </div>
      <div class="row my-3 px-0 px-md-4">
        <div
          class="col-xl-4 mb-xl-0 mb-3"
          v-for="(item, index) in chartData"
          :key="index"
        >
          <div class="chartBox shadow p-3 rounded-30 mb-3 mb-md-0">
            <div class="d-flex justify-content-between flex-wrap">
              <div class="chartStats">
                <h4 class="h6">{{ item.title }}</h4>
                <h2 class="h2 font-weight-900">{{ item.stats }}</h2>
                <p class="mb-0 text-success">
                  {{ item.percent }} <i class="fa fa arrowUp"></i>
                </p>
              </div>
              <div class="chartImage">
                <figure>
                  <img :src="item.chartImage" alt="" class="mw-100" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="headTitle d-flex flex-wrap justify-content-between py-4">
        <div class="adminTitle">
          <h3 class="h4 font-weight-900">Events</h3>
        </div>
      </div>
      <div class="row my-3 text-center px-0 px-md-4">
        <div class="col-md-12 col-lg-12 col-xl-6 col-sm-12">
          <div
            class="d-flex flex-wrap chartBox shadow p-3 rounded-30 text-center h-100 justify-content-center"
          >
            <h4 class="h6 font-weight-600 text-dark">Top Categories</h4>
            <div class="d-flex justify-content-center flex-wrap mt-5">
              <div class="chartStats">
                <h4 class="h6 mb-0 text-dark">Health</h4>
                <apexchart
                  type="radialBar"
                  height="200"
                  width="200"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </div>
              <div class="chartImage">
                <h4 class="h6 mb-0 text-dark">Food Event</h4>
                <apexchart
                  type="radialBar"
                  height="200"
                  width="200"
                  :options="chartOptions"
                  :series="series1"
                ></apexchart>
              </div>
              <div class="chartImage">
                <h4 class="h6 mb-0 text-dark">Music Event</h4>
                <apexchart
                  type="radialBar"
                  height="200"
                  width="200"
                  :options="chartOptions"
                  :series="series2"
                ></apexchart>
              </div>
              <div class="chartImage">
                <h4 class="h6 mb-0 text-dark">Health</h4>
                <apexchart
                  type="radialBar"
                  height="200"
                  width="200"
                  :options="chartOptions"
                  :series="series3"
                ></apexchart>
              </div>
              <div class="chartImage">
                <h4 class="h6 mb-0 text-dark">Food Event</h4>
                <apexchart
                  type="radialBar"
                  height="200"
                  width="200"
                  :options="chartOptions"
                  :series="series4"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-12 col-xl-6 col-sm-12">
          <div class="row h-100 align-items-center">
            <div class="col-sm-12 col-lg-6">
              <div class="chartImage shadow rounded-30 p-3 mb-5 overflow-hidden">
                <h4 class="h6 mb-0 text-dark">Avarage Events/Month</h4>
                <apexchart
                  type="radialBar"
                  height="300"
                  width="300"
                  :options="chartOptions"
                  :series="series6"
                ></apexchart>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="chartImage shadow rounded-30 p-3 mb-5 overflow-hidden">
                <h4 class="h6 mb-0 text-dark">Avarage Events/Day</h4>
                <apexchart
                  type="radialBar"
                  height="300"
                  width="300"
                  :options="chartOptions"
                  :series="series6"
                ></apexchart>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="chartImage shadow rounded-30 p-3 mb-5 overflow-hidden h-100">
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <h4 class="h6 mb-0 text-dark">Live Events</h4>
                  <div class="add-new-form w-50">
                    <el-select v-model="live" placeholder="Year" class="rounded-15">
                      <el-option label="Zone one" value="shanghai"></el-option>
                      <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                  </div>
                </div>
                <apexchart
                  type="radialBar"
                  height="300"
                  width="300"
                  :options="chartOptions"
                  :series="series6"
                ></apexchart>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="chartImage shadow rounded-30 p-3 mb-5 overflow-hidden h-100">
                <h4 class="h6 mb-0 text-dark">Success Rate of Event</h4>
                <apexchart
                  type="radialBar"
                  height="300"
                  width="300"
                  :options="chartOptions"
                  :series="series6"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row px-0 px-md-4 my-5">
        <div class="col-md-6">
          <div class="d-flex shadow p-3 flex-column rounded-30">
            <div class="chartHead d-flex align-items-center gap-15 mb-3 flex-wrap">
              <h4 class="font-weight-900 text-dark h5 flex-grow-1">Organizations</h4>
              <div class="flex-grow-1 add-new-form">
                <el-input
                  placeholder="Search"
                  prefix-icon="el-icon-search"
                  v-model="search"
                >
                </el-input>
              </div>
              <div class="flex-grow-1 add-new-form">
                <el-select v-model="Year" placeholder="Year" class="w-100 rounded-15">
                  <el-option label="Zone one" value="shanghai"></el-option>
                  <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
              </div>
            </div>
            <div class="chartBox">
              <apexchart
                type="area"
                height="350"
                :options="organizationOptions"
                :series="organization"
              ></apexchart>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex shadow p-3 flex-column rounded-30">
            <div class="chartHead d-flex align-items-center gap-15 mb-3 flex-wrap">
              <h4 class="font-weight-900 text-dark h5 flex-grow-1">Volunteers</h4>
              <div class="flex-grow-1 add-new-form">
                <el-input
                  placeholder="Search"
                  prefix-icon="el-icon-search"
                  v-model="search"
                >
                </el-input>
              </div>
              <div class="flex-grow-1 add-new-form">
                <el-select v-model="Year" placeholder="Year" class="w-100 rounded-15">
                  <el-option label="Zone one" value="shanghai"></el-option>
                  <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
              </div>
            </div>
            <div class="chartBox">
              <apexchart
                type="area"
                height="350"
                :options="organizationOptions"
                :series="organization"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Year: "",
      live: "",
      search: "",
      series: [85],
      series1: [50],
      series2: [35],
      series3: [85],
      series4: [50],
      series5: [20],
      series6: [75],
      series7: [20],
      series8: [80],
      chartOptions: {
        chart: {
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
          },
        },
        colors: [
          function ({ value, seriesIndex, w }) {
            if (value >= 85) {
              return "#FF8B48";
            } else if (value >= 50 && value < 85) {
              return "#2D96EB";
            } else if (value <= 35 && value < 50) {
              return "#D850A0";
            }
          },
        ],
        labels: [""],
      },
      organization: [
        {
          name: "Organization",
          data: [31, 40, 28, 51, 42, 109, 92, 100],
        },
        {
          name: "Volunteer",
          data: [11, 32, 45, 32, 34, 52, 41, 92],
        },
      ],
      organizationOptions: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
      chartData: [
        {
          title: "Total Volunteers",
          stats: "5,000",
          chartImage: "img/theme/trend.png",
          percent: "+3.3% ",
        },
        {
          title: "Total Organizations",
          stats: "3,500",
          chartImage: "img/theme/data-analysis.png",
          percent: "+3.3% ",
        },
        {
          title: "Total Event",
          stats: "3,100",
          chartImage: "img/theme/graph.png",
          percent: "+3.3% ",
        },
      ],
    };
  },
};
</script>

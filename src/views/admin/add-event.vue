<template>
  <div class="addEvent">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5">
        <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Add Event</h2>
      </div>
      <div class="volunteerDetail p-3 shadow">
        <div class="d-flex justify-content-between align-items-center">
          <div class="title">
            <h5 class="font-weight-900">Banner Image</h5>
          </div>
          <div class="uploadbtn">
            <p class="mb-0"><a href="" class="btnTheme px-4 py-2">Upload</a></p>
          </div>
        </div>
        <div class="add-new-forms">
          <el-form ref="form" :model="form" label-width="120px">
            <div class="d-flex flex-md-row flex-column gap-15 add-new-form">
              <div class="flex-grow-1">
                <el-form-item label="Event Name:">
                  <el-input v-model="name"></el-input>
                </el-form-item>
              </div>
              <!-- <div class="flex-grow-1">
                <el-form-item label="Category:">
                  <el-select
                    v-model="region"
                    placeholder="please select your zone"
                    class="w-100 rounded-15"
                  >
                    <el-option label="Zone one" value="shanghai"></el-option>
                    <el-option label="Zone two" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </div> -->
            </div>
            <div class="d-flex flex-md-row flex-column gap-15 add-new-form">
              <div class="flex-grow-1">
                <el-form-item label="About:">
                  <el-input type="textarea" v-model="desc" rows="6"></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="flex-grow-1 my-3">
              <h5 class="font-weight-900">Time and Date:</h5>
            </div>
            <div class="d-flex form0 flex-wrap gap-15 add-time align-items-center">
              <div class="flex-grow-0">
                <el-form-item label="Date:">
                  <el-date-picker
                    type="date"
                    placeholder="Pick a date"
                    v-model="date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-form-item>
              </div>
              <div class="flex-grow-0">
                <el-form-item label="Time:">
                  <el-time-picker
                    placeholder="Pick a time"
                    v-model="date2"
                    style="width: 100%"
                  ></el-time-picker>
                </el-form-item>
              </div>
              <div class="flex-grow-0">
                <el-form-item>
                  <el-time-picker
                    placeholder="Pick a time"
                    v-model="end"
                    style="width: 100%"
                  ></el-time-picker>
                </el-form-item>
              </div>
              <div class="iconBoxs">
                <i class="fa fa-plus"></i>
              </div>
            </div>
            <div class="d-flex form0 flex-wrap gap-15 add-time align-items-center">
              <div class="flex-grow-0">
                <el-form-item label="Date:">
                  <el-date-picker
                    type="date"
                    placeholder="Pick a date"
                    v-model="date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-form-item>
              </div>
              <div class="flex-grow-0">
                <el-form-item label="Time:">
                  <el-time-picker
                    placeholder="Pick a time"
                    v-model="date2"
                    style="width: 100%"
                  ></el-time-picker>
                </el-form-item>
              </div>
              <div class="flex-grow-0">
                <el-form-item>
                  <el-time-picker
                    placeholder="Pick a time"
                    v-model="end"
                    style="width: 100%"
                  ></el-time-picker>
                </el-form-item>
              </div>
              <div class="iconBoxs">
                <i class="fa fa-trash"></i>
              </div>
            </div>
            <div class="d-flex flex-md-row flex-column gap-15 add-new-form">
              <div class="flex-grow-1">
                <el-form-item label="Location">
                  <el-input v-model="location" suffix-icon="el-icon-location-outline"></el-input>
                </el-form-item>
              </div>
              <div class="flex-grow-1">
                <el-form-item label="No. of Volunteers Required:">
                  <el-input v-model="volunteers"></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="d-flex flex-md-row flex-column gap-15 add-new-form">
              <div class="col-md-6 px-0">
                <el-form-item label="Hours Required For Certification:">
                  <el-input v-model="Certification"></el-input>
                </el-form-item>
              </div>
            </div>
            <div
              class="d-flex flex-md-row flex-column gap-15 add-new-form select2 justify-content-md-between"
            >
              <div class="flex-grow-1">
                <el-form-item label="Add Volunteers:">
                  <el-select
                    v-model="value"
                    multiple
                    filterable
                    remote
                    reserve-keyword
                    placeholder="Search Volunteers"
                    :remote-method="remoteMethod"
                    :loading="loading"
                  >
                    <el-option
                      v-for="item in states"
                      :key="item.value"
                      :label="item.title"
                      :value="item.image"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="filterBar">
                <router-link to="./filter" class="shadow"
                  ><i class="fa fa-sliders" aria-hidden="true"></i
                ></router-link>
              </div>
            </div>
            <div class="d-flex flex-wrap gap-15">
              <div
                class="personBox"
                v-for="(item, index) in cetificateTemplate"
                :key="index"
              >
                <div
                  class="certificateBox text-center position-relative d-flex align-items-center shadow gap-15 rounded-30 py-3 px-4 flex-wrap flex-lg-nowrap"
                >
                  <div class="templateImage flex-shrink-0">
                    <figure class="mb-0">
                      <img :src="item.template" class="mw-100" />
                    </figure>
                  </div>
                  <div class="templateContent">
                    <p class="mb-0 font-weight-600 text-dark fa-18px">{{ item.title }}</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close"
                    class="el-dialog__headerbtn"
                    @click="delTemp(index)"
                  >
                    <i class="el-dialog__close el-icon el-icon-close"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="actionBtn my-5 d-flex flex-wrap">
              <button
                type="submit"
                class="btn-theme-primary btn-round border-0 mr-2 py-2 w-btn"
                to="#"
              >
                Add
              </button>
              <button
                type="button"
                class="btn-theme-primary btn-round border-0 mr-2 py-2 w-btn"
                to="#"
              >
                Cancel
              </button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Add Event",
  data() {
    return {
      volunteers: "",
      location: "",
      name: "",
      end: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: "",
      form: "",
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        {
          image: "img/theme/i1.png",
          title: "Jason Mark",
          date: "October 15, 2021",
          time: "09:00am - 01:00pm",
          category: "Health",
        },
        {
          image: "img/theme/i2.png",
          title: "Jason Parker",
          date: "October 15, 2021",
          time: "09:00am - 01:00pm",
          category: "Health",
        },
        {
          image: "img/theme/v8.png",
          title: "Jason Dog",
          date: "October 15, 2021",
          time: "09:00am - 01:00pm",
          category: "Health",
        },
      ],
      cetificateTemplate: [
        {
          template: "img/theme/girl.png",
          title: "Jason Mark",
        },
        {
          template: "img/theme/girl.png",
          title: "Kate Austen",
        },
      ],
    };
  },
  mounted() {
    this.list = this.states.map((item) => {
      var a = { value: `value:${item.image}`, label: `<img src=` + item.image + `>` };
      return a.parseFromString(str, "text/html");
    });
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    delTemp(index) {
      this.cetificateTemplate.splice(index, 1);
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
};
</script>

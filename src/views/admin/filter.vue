<template>
    <div class="organizerFilter">
      <div class="eventsecton ml-4">
        <div class="headBox mb-5">
          <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Filter</h2>
        </div>
        <div class="filter">
          <div class="enventCategory shadow p-3 py-5">
            <div class="d-flex justify-content-between">
              <h4 class="font-weight-900 mb-0">Age:</h4>
              <p class="text-dark mb-0">18-50 yrs</p>
            </div>
            <el-form ref="form" action="./admin/add-events">
              <div class="filterOptions py-3">
                <div class="block">
                  <el-slider v-model="value" range :max="50" :min="18" label="range">
                  </el-slider>
                </div>
              </div>
              <div class="d-flex flex-md-row flex-column gap-15 add-new-form py-3">
                <div class="flex-grow-1">
                  <el-form-item label="Language:">
                    <el-select
                      v-model="Location"
                      placeholder="Select Language"
                      class="w-100 rounded-15"
                    >
                      <el-option label="Zone one" value="shanghai"></el-option>
                      <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="flex-grow-1">
                  <el-form-item label="Gender:">
                    <el-select
                      v-model="Gender"
                      placeholder="Select Gender"
                      class="w-100 rounded-15"
                    >
                      <el-option label="Zone one" value="shanghai"></el-option>
                      <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <div class="d-flex flex-md-row flex-column gap-15 add-new-form py-3">
                <div class="flex-grow-1">
                  <el-form-item label="Rating:">
                    <el-rate v-model="value1"></el-rate>
                  </el-form-item>
                </div>
              </div>

              <div class="d-flex flex-md-row flex-column gap-15 add-new-form">
                <div class="flex-grow-1">
                  <el-form-item label="Volunteer Hours:">
                    <el-time-select
                      v-model="date"
                      :picker-options="{
                        start: '12:30',
                        step: '00:15',
                        end: '24:30',
                      }"
                    >
                    </el-time-select>
                  </el-form-item>
                </div>
                <div class="flex-grow-1">
                  <el-form-item label="Nationality:">
                    <el-select
                      v-model="Nationality"
                      class="w-100 rounded-15"
                    >
                      <el-option label="Zone one" value="shanghai"></el-option>
                      <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <div class="btn-filter">
                <button
                  type="submit"
                  class="btn-theme-primary btn-round border-0 mr-2 w-180px"
                >
                  Add
                </button>
                <button
                  type="submit"
                  class="btn-theme-primary btn-round border-0 w-180px"
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
const cityOptions = [
  "Education",
  "Health",
  "Art & Culture",
  "Corporate",
  "Music",
  "Socializing",
];
export default {
  name: "OrganizerFilter",
  data() {
    return {
      checkboxGroup1: ["Education"],
      cities: cityOptions,
      radio: 3,
      hours: 6,
      value: [20, 40],
      Location: "",
      Gender: "",
      value1: "",
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      date: '',
      Nationality: '',
    };
  },
};
</script>

<template>
  <div class="filter">
    <div class="enventCategory shadow p-3 py-5">
      <div class="headGrey">
        <h4 class="font-weight-900 mb-0">Event Category</h4>
      </div>
      <div class="filterOptions py-5">
        <el-form ref="form">
          <div>
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{
                city
              }}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </el-form>
      </div>
      <div class="headGrey">
        <h4 class="font-weight-900 mb-0">Days</h4>
      </div>
      <div class="filterOptions py-5 px-3">
        <el-form ref="form">
          <el-radio-group v-model="radio">
            <el-radio :label="3">Today</el-radio>
            <el-radio :label="6">This Week</el-radio>
            <el-radio :label="9">This Month</el-radio>
          </el-radio-group>
        </el-form>
      </div>

      <div class="headGrey">
        <h4 class="font-weight-900 mb-0">Hours</h4>
      </div>
      <div class="filterOptions py-5 px-3">
        <el-form ref="form">
          <el-radio-group v-model="hours">
            <el-radio :label="2"> &lt; 6 hours</el-radio>
            <el-radio :label="4">6 - 12 hours</el-radio>
            <el-radio :label="8">12 - 24 hours</el-radio>
            <el-radio :label="12"> 24 - 48 hours</el-radio>
            <el-radio :label="15">28 - 36 hours</el-radio>
            <el-radio :label="18"> &gt; 36 hours </el-radio>
          </el-radio-group>
        </el-form>
      </div>
      <div class="btn-filter">
        <button type="button" class="btn-theme-primary btn-round border-0 mr-2 w-180px">
          Apply
        </button>
        <button type="button" class="btn-theme-primary btn-round border-0 w-180px">
          Clear
        </button>
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
  name: "filter",
  components: {},
  data() {
    return {
      checkboxGroup1: ["Education"],
      cities: cityOptions,
      radio: 3,
      hours: 6,
    };
  },
};
</script>

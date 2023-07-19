<template>
  <div class="log-details">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5">
        <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Logs Details</h2>
      </div>
      <div class="logsArea shadow p-4 rounded-10">
        <h4 class="font-weight-800">Volunteer List</h4>
        <div class="searhBox my-4">
          <el-input
            placeholder="Search Volunteers"
            prefix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
        </div>
        <div class="d-flex justify-content-end">
          <p class="mb-0">
            <a href="" class="btn-round btn-theme-primary px-5"
              >Award Certificate To All</a
            >
          </p>
        </div>
        <div v-for="(item, index) in awarded" :key="index">
          <Awards :awardItem="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Awards from "../../components/organization/awarded.vue";
export default {
  name: "Log Details",
  components: {
    Awards,
  },
  data() {
    return {
      search: "",
      awarded: [
        {
          title: "Jason Marksss",
          image: "img/theme/v8.png",
          btntxt: "Award Certificate",
        },
        {
          title: "Kate Austen",
          image: "img/theme/v8.png",
          btntxt: "Awarded",
        },
        {
          title: "Jason Marksss",
          image: "img/theme/v8.png",
          btntxt: "Award Certificate",
        },
        {
          title: "Kate Austen",
          image: "img/theme/v8.png",
          btntxt: "Awarded",
        },
        {
          title: "Jason Marksss",
          image: "img/theme/v8.png",
          btntxt: "Award Certificate",
        },
        {
          title: "Kate Austen",
          image: "img/theme/v8.png",
          btntxt: "Awarded",
        },
      ],
    };
  },
  watch: {
    search(val, oldval) {
      if (val.lenght >= 2) {
        this.awarded = this.awarded.filter((item) => {
          return item.title.toLowerCase().includes(val);
        });
      }
    },
  },
};
</script>

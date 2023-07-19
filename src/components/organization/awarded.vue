<template>
  <div class="commet certificateTem">
    <div class="d-flex w-100 px-3 flex-column">
      <div
        class="commentitem d-flex align-items-center gap-15 my-4"
      >
        <div class="commentbox w-100 shadow p-3 rounded-15">
          <div class="d-flex gap-15 align-items-center justify-content-between">
            <div class="authotImage d-flex gap-15 align-items-center">
              <img :src="awardItem.image" alt="" class="mw-100 w-70px" />
              <div class="titleDescription">
                <div class="ratingHead d-flex align-items-center gap-15">
                  <h3 class="text-dark font-weight-600 mb-0">
                    {{ awardItem.title }}
                  </h3>
                  <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                  >
                  </el-rate>
                </div>
                <p class="text-light mb-0" :class="dateBox">{{ awardItem.date }}</p>
              </div>
            </div>
            <div class="approveBtn d-flex align-items-center gap-15">
              <p class="mb-0">
                <span class="text-theme-primary font-weight-400 d-block mb-2" v-if="awardItem.time">Check in: {{awardItem.time}}</span>
                <a
                  @click="editOptions = true"
                  class="w-custom btn-round px-5"
                  :class="awardItem.btntxt == 'Awarded' || awardItem.btntxt == 'Check In' ? 'btn-theme-primary text-white' : 'bg-secondary text-dark'"
                  >{{ awardItem.btntxt }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="editOptions"
      width="500px"
      center
      class="border-round report-box"
    >
      <div class="popup-content-box">
        <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
          Select Template
        </h3>
        <div class="templateBoxs">
          <el-form action="">
            <el-form-item class="textareaStyle">
              <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">
                  <div class="imageCard">
                      <img :src="city.image" alt="">
                  </div>
                  <div class="contentBox">
                    <h4 class="mb-0">{{ city.name }}</h4>
                    <p class="mb-0">{{ city.sub }}</p>
                    <p>
                      <a class="btnCertificate">{{ city.btntxt }}</a>
                    </p>
                  </div>
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <p class="text-center">
                <a href="#" class="text-theme-primary font-weight-bold"
                  >View All Templates</a
                >
              </p>
              <el-button
                type="button"
                class="submit-theme-primary btn-round d-block m-auto font-weight-600"
                :plain="true"
                @click="(Completed = true), (editOptions = false)"
                >Done</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="Completed"
      width="500px"
      center
      class="border-round report-box"
    >
      <div class="popup-content-box">
        <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
          Download Complete
        </h3>
        <div class="templateBox">
          <h3 class="text-light py-5 text-center">
            Thank you for downloading the certificate. Your certificate has been saved in
            your device!
          </h3>
          <p>
            <a
              href=""
              class="submit-theme-primary btn-round d-block m-auto font-weight-600"
              >Ok</a
            >
          </p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import SearchBar from "./search.vue";
const certificate = [
  {
    image: 'img/theme/cer1.png',  
    name: "Social Event",
    sub: "Best Work",
    btntxt: "Award Certificate",
  },
  {
    image: 'img/theme/cer1.png',  
    name: "Social Event",
    sub: "Best Work",
    btntxt: "Award Certificate",
  },
  {
    image: 'img/theme/cer1.png',  
    name: "Social Event",
    sub: "Best Work",
    btntxt: "Award Certificate",
  },
  {
    image: 'img/theme/cer1.png',  
    name: "Social Event",
    sub: "Best Work",
    btntxt: "Award Certificate",
  },
];
export default {
  props: {
    dateBox: {
      type: String,
      description: "date box",
    },
    searchBox: {
      type: String,
      description: "Search box",
    },
    awardItem: {
      type: Object,
    },
  },
  components: {
    SearchBar,
  },
  data() {
    return {
      checkboxGroup1: [],
      editOptions: false,
      Completed: false,
      cities: certificate,
      suggestionBox: false,
      vAttendence: false,
      vList: true,
      commments: [],
      comment: "",
      value: 3.7,
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
          title: "Somia Mark",
          image: "img/theme/v8.png",
          btntxt: "Awarded",
        },
        {
          title: "Somia Mark",
          image: "img/theme/v8.png",
          checkTime: "Check in: 09:00 am",
          btntxt: "Award Certificate",
        },
        {
          title: "Somia Mark",
          image: "img/theme/v8.png",
          checkTime: "Check in: 09:00 am",
          btntxt: "Award Certificate",
        },
      ],
    };
  },
  methods: {
    addComment() {
      this.commments.push({ txt: this.comment });
    },
    delBtn(index) {
      this.commments.splice(index, 1);
    },
  },
};
</script>

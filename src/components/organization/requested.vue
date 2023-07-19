<template>
  <div class="commet">
    <div
      class="seachBoxs w-75 d-flexs justify-content-between"
      :class="searchBox"
      style="display: none"
    >
      <h3 class="font-weight-900 text-dark mb-3">Volunteer List</h3>
      <p class="mb-0">
        <a href="" class="btn-round btn-theme-primary px-5" v-if="$route.path == '/Organization/volunteer-attendence'"
          >Download</a
        >
      </p>
    </div>
    <div class="seachfiled w-75" :class="searchBox">
      <SearchBar />
    </div>
    <div
      class="d-flex w-100 px-3 flex-column"
      v-if="$route.path == '/Organization/volunteer-attendence'"
    >
      <div
        class="commentitem d-flex w-75 align-items-center gap-15 my-4"
        v-for="(item, index) in attendenceList"
        :key="index"
      >
        <div class="commentbox w-100 shadow p-3 rounded-15">
          <div class="d-flex gap-15 align-items-center justify-content-between">
            <div class="authotImage d-flex gap-15 align-items-center">
              <img :src="item.image" alt="" class="mw-100 w-70px" />
              <div class="titleDescription">
                <div class="ratingHead d-flex align-items-center gap-15">
                  <h3 class="text-dark font-weight-600 mb-0" @click="check">
                    {{ item.title }}
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
              </div>
            </div>
            <div class="approveBtn pr-3 text-right">
               <p class="mb-0 text-theme-primary font-weight-400">{{item.checkTime}}</p>
               <p class="mb-0 font-weight-400" :class="item.status == 'Check In' ? 'text-success' : 'text-theme-primary'">{{item.status}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex w-100 px-3 flex-column" v-else>
      <div
        class="commentitem d-flex w-75 align-items-center gap-15 my-4"
        v-for="(item, index) in suggestion"
        :key="index"
      >
        <div class="commentbox w-100 shadow p-3 rounded-15">
          <div class="d-flex gap-15 align-items-center justify-content-between">
            <div class="authotImage d-flex gap-15 align-items-center">
              <img :src="item.image" alt="" class="mw-100 w-70px" />
              <div class="titleDescription">
                <div class="ratingHead d-flex align-items-center gap-15">
                  <h3 class="text-dark font-weight-600 mb-0">
                    {{ item.title }}
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
                <p class="text-light mb-0" :class="dateBox">{{ item.date }}</p>
              </div>
            </div>
            <div class="approveBtn d-flex align-items-center gap-15">
              <p class="mb-0">
                <a href="" class="btn-round btn-theme-primary px-5">Accept</a>
              </p>
              <p class="mb-0">
                <a href="" class="btn-round btn-theme-primary px-5">Reject</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchBar from "./search.vue";
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
  },
  components: {
    SearchBar,
  },
  data() {
    return {
      editOptions: false,
      suggestionBox: false,
      vAttendence: false,
      vList: true,
      commments: [],
      comment: "",
      value: 3.7,
      suggestion: [
        {
          title: "Jason Mark",
          image: "img/theme/v8.png",
        },
        {
          title: "Kate Austen",
          image: "img/theme/v8.png",
        },
        {
          title: "Somia Mark",
          image: "img/theme/v8.png",
        },
      ],
      attendenceList: [
        {
          title: "Jason Marksss",
          image: "img/theme/v8.png",
          status: 'Check In'
        },
        {
          title: "Kate Austen",
          image: "img/theme/v8.png",
          status: 'Check In'
        },
        {
          title: "Somia Mark",
          image: "img/theme/v8.png",
          status: 'Check In'
        },
        {
          title: "Somia Mark",
          image: "img/theme/v8.png",
          checkTime: 'Check in: 09:00 am',
          status: 'Check Out'
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

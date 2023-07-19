<template>
  <div class="commet row">
    <div class="col-md-9 mx-auto">
      <div
        class="commentitem d-flex align-items-center gap-15 my-4"
        v-for="(item, index) in VoulnteerList"
        :key="index"
      >
        <div class="commentbox w-100 shadow p-3 rounded-15">
          <div class="d-flex gap-15 align-items-center justify-content-between flex-wrap">
            <div class="authotImage d-flex gap-15 align-items-center">
              <img :src="item.image" alt="" class="mw-100 w-70px" />
              <div class="titleDescription">
                <div class="ratingHead d-flex align-items-center gap-15 flex-wrap">
                  <div class="titleBox">
                    <h5 class="text-dark font-weight-600 mb-0">
                    {{ item.title }}
                  </h5>
                  <p class="text-light">{{item.publishDate}}</p>
                  </div>
                  <el-rate
                    v-model="item.value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :score-template="value"
                  >
                  </el-rate>
                </div>
              </div>
            </div>
            <div class="approveBtn pr-3 text-right" v-if="$route.path == '/admin/event-volunteer-list'">
              <p>
                <a class="btn-theme-primary btn-round border-0 mr-2 px-4 text-white"
                  >Remove</a
                >
              </p>
            </div>
            <div class="approveBtn pr-3 text-right d-flex flex-wrap" v-else>
              <p>
                <a class="btn-theme-primary btn-round border-0 mr-2 px-5 text-white"
                  >Accept</a
                >
              </p>
              <p>
                <a class="btn-theme-primary btn-round border-0 mr-2 px-5 text-white"
                  >Reject</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="buttonBox text-center my-5"  v-if="$route.path == '/admin/event-volunteer-list'">
        <p>
          <a href="" class="btn-theme-primary btn-round border-0 mr-2 px-4">View More</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VolunteerList",
  props: {
    VoulnteerList: {
      type: Array,
    },
  },
  methods: {
    deleteBox(index) {
      this.VoulnteerList.splice(index, 1);
    },
  },
};
</script>

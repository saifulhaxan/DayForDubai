<template>
  <div class="container-fluid py-3">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div class="titleBox">
        <router-link to="#"
          ><h3 class="font-weight-900">
            <i class="el-icon-arrow-left"></i>Inbox
          </h3></router-link
        >
      </div>
      <div class="actionBox d-flex flex-wrap gap-15 align-items-center">
        <a href="#" class="text-theme-primary fa-18"><i class="el-icon-phone"></i></a> 
        <a href="#" class="text-theme-primary fa-18"><i class="el-icon-video-camera"></i></a>
        <a href="#" class="text-theme-primary rotate-90 fa-18"><i class="el-icon-more-outline"></i></a>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <div class="userList shadow py-4">
          <Search />
          <div class="userBox py-3" v-for="(item, index) in inboxInfo" :key="index">
            <div class="d-flex flex-lg-nowrap gap-15 px-2 flex-wrap">
              <div class="imageBox flex-shrink-1">
                <figure class="mb-0">
                  <img :src="item.image" alt="" class="mx-100" />
                </figure>
              </div>
              <div class="user flex-grow-1">
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="titleUser">
                    <h4 class="font-weight-600 mb-0">{{ item.title }}</h4>
                  </div>
                  <div class="postDate">
                    <p class="mb-0 p-14">{{ item.date }}</p>
                  </div>
                </div>
                <div class="contentUser overflow-hidden">
                  <p class="mb-0 p-14">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="shadow h-100 p-3 overflow-hidden">
          <div class="titleChat">
            <h3 class="text-theme-primary mb-0 font-weight-900">Amanda Charles</h3>
            <p class="text-theme-primary mb-0">Title A</p>
          </div>
          <div
            class="bg-secondary rounded-30 pt-4 mt-3 d-flex flex-column justify-content-end"
          >
            <vue-custom-scrollbar class="overflow-scroll">
              <div class="chatBoxArea overflow-auto px-3">
                <div class="commentitem d-flex w-100 align-items-md-baseline gap-15">
                  <div class="iconBoxCard">
                    <img src="img/theme/v8.png" alt="" class="mw-100" />
                  </div>
                  <div class="commentbox">
                    <div class="shadow p-3 rounded-end bg-white mt-4 mb-2">
                      <p class="mb-0">hey, what time are we going surfing?</p>
                    </div>
                    <div class="d-flex justify-content-end">
                      <p class="mb-0">10:00 AM</p>
                    </div>
                  </div>
                </div>
                <div
                  class="commentitem d-flex w-100 align-items-md-baseline gap-15 flex-row-reverse"
                >
                  <div class="iconBoxCard">
                    <img src="img/theme/v8.png" alt="" class="mw-100 w-70px" />
                  </div>
                  <div class="commentbox">
                    <div class="shadow p-3 rounded-end text-white bg-primary-color mt-4 mb-2">
                      <p class="mb-0">hey, what time are we going surfing?</p>
                    </div>
                    <div class="d-flex justify-content-end">
                      <p class="mb-0">10:00 AM</p>
                    </div>
                  </div>
                </div>
                <div class="commentitem d-flex w-100 align-items-md-baseline gap-15">
                  <div class="iconBoxCard">
                    <img src="img/theme/v8.png" alt="" class="mw-100 w-70px" />
                  </div>
                  <div class="commentbox">
                    <div class="shadow p-3 rounded-end bg-white mt-4 mb-2">
                      <p class="mb-0">hey, what time are we going surfing?</p>
                    </div>
                    <div class="d-flex justify-content-end">
                      <p class="mb-0">10:00 AM</p>
                    </div>
                  </div>
                </div>

                <div
                  class="commentitem d-flex w-100 align-items-md-baseline gap-15 flex-row-reverse"
                >
                  <div class="iconBoxCard">
                    <img src="img/theme/v8.png" alt="" class="mw-100 w-70px" />
                  </div>
                  <div class="commentbox">
                    <div class="shadow p-3 rounded-end text-white bg-primary-color mt-4 mb-2">
                      <p class="mb-0">hey, what time are we going surfing?</p>
                    </div>
                    <div class="d-flex justify-content-end">
                      <p class="mb-0">10:00 AM</p>
                    </div>
                  </div>
                </div>

                <div v-for="(item, index) in commments" :key="index">
                  <div
                    class="commentitem d-flex w-100 align-items-md-baseline gap-15 flex-row-reverse"
                  >
                    <div class="iconBoxCard">
                      <img src="img/theme/v8.png" alt="" class="mw-100 w-70px" />
                    </div>
                    <div class="commentbox">
                      <div
                        class="shadow p-3 rounded-end text-white bg-primary-color mt-4 mb-2"
                      >
                        <p class="mb-0">{{ item.txt }}</p>
                      </div>
                      <div class="d-flex justify-content-end">
                        <p class="mb-0">{{ item.timenow }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </vue-custom-scrollbar>
            <!-- input Field -->

            <div
              class="d-flex align-items-center gap-15 px-4 rounded-15 border-shadow py-2 mt-3"
            >
              <p class="mb-0"><i class="fa fa-smile-o"></i></p>
              <div class="commentField w-100">
                <textarea
                  rows="1"
                  value="abc"
                  v-model="comment"
                  class="w-100 border-0 no-focus bg-transparent"
                >
                </textarea>
              </div>
              <div class="btnRemove">
                <i class="fa fa-location-arrow" @click="addComment()"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "../components/search.vue";
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  name: "hatInbox",
  components: {
    Search,
    vueCustomScrollbar,
  },
  data() {
    return {
      commments: [],
      comment: "",
      strTime: "",
      inboxInfo: [
        {
          image: "img/theme/girl.png",
          title: "Kate Austen",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          image: "img/theme/girl.png",
          title: "Kate Austen",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          image: "img/theme/girl.png",
          title: "Kate Austen",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          image: "img/theme/girl.png",
          title: "Kate Austen",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          image: "img/theme/girl.png",
          title: "Kate Austen",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          image: "img/theme/girl.png",
          title: "Kate Austen",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          image: "img/theme/girl.png",
          title: "Kate Austen",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
        {
          image: "img/theme/girl.png",
          title: "Kate Austen",
          text:
            "hey, what time are we going There are many variations of passages of Lorem Ipsum available….",
          date: "10:00 AM",
        },
      ],
    };
  },
  methods: {
    addComment() {
      this.commments.push({ txt: this.comment, timenow: this.formatAMPM(new Date()) });
      this.comment = ''
    },
    delBtn(index) {
      this.commments.splice(index, 1);
    },
    formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    },
  },
};
</script>

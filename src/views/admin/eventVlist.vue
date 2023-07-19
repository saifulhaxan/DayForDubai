<template>
  <div class="eventListning container-fluid">
    <div class="eventsectionLive py-5">
      <eventList :volunteerList="Volunteerdata" />
      <div class="tabspost mt-4">
        <el-tabs type="card" @tab-click="handleClick" v-model="nonActive">
          <el-tab-pane label="Home"><HomeTab :homeTabContent="homeTab" /></el-tab-pane>
          <el-tab-pane label="Suggestions">
            <SuggestTab :suggestionData="suggestionBox" />
          </el-tab-pane>
          <el-tab-pane label="Post Requests">
            <postRequest :postRequestData="PostTab"
          /></el-tab-pane>
          <el-tab-pane label="Logs"> <logTab :logData="logList" /></el-tab-pane>
          <el-tab-pane label="Comments"
            ><CommentTab :suggestionData="commentBox"
          /></el-tab-pane>
        </el-tabs>
      </div>
      <div class="row">
        <div class="searhBox mb-4 col-md-8 mx-auto">
          <h3 class="font-weight-600" name="title">{{ title }}</h3>
          <el-input
            placeholder="Search Title"
            prefix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
        </div>
        <div class="col-md-12">
            <VList :VoulnteerList="logList"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import eventList from "../../components/admin/eventListing.vue";
import HomeTab from "../../components/admin/homeTab.vue";
import SuggestTab from "../../components/admin/suggestTab.vue";
import postRequest from "../../components/admin/postRequest.vue";
import logTab from "../../components/admin/logTab.vue";
import CommentTab from "../../components/admin/commentTab.vue";
import VList from '../../components/admin/voulnteerList.vue'
export default {
  name: "EventVolunteerList",
  components: {
    eventList,
    HomeTab,
    SuggestTab,
    postRequest,
    logTab,
    CommentTab,
    VList
  },
  data() {
    return {
      nonActive: "none",
      search: "",
      Volunteerdata: [
        "img/theme/v1.png",
        "img/theme/v2.png",
        "img/theme/v3.png",
        "img/theme/v4.png",
        "img/theme/v5.png",
        "img/theme/v6.png",
        "img/theme/v7.png",
        "img/theme/v8.png",
      ],
      homeTab: [
        {
          image: "img/theme/v1.png",
          title: "Volunteer Name",
          publishDate: "Posted on 12:20am",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v1.png",
          title: "Volunteer Name",
          publishDate: "Posted on 12:20am",
          postImages: [
            "img/theme/j1.png",
            "img/theme/j2.png",
            "img/theme/j3.png",
            "img/theme/j4.png",
          ],
        },
        {
          image: "img/theme/v1.png",
          title: "Volunteer Name",
          publishDate: "Posted on 12:20am",
          content:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v1.png",
          title: "Volunteer Name",
          publishDate: "Posted on 12:20am",
          postImages: [
            "img/theme/j1.png",
            "img/theme/j2.png",
            "img/theme/j3.png",
            "img/theme/j4.png",
          ],
        },
      ],
      suggestionBox: [
        {
          title: "Alice Mark",
          publishDate: "Posted On 08:00 am",
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          title: "Jason Mark",
          publishDate: "Posted On 08:00 am",
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          title: "Jhon Mark",
          publishDate: "Posted On 08:00 am",
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
      ],
      PostTab: [
        {
          image: "img/theme/v1.png",
          title: "Volunteer Name",
          publishDate: "Posted on 12:20am",
          postImages: [
            "img/theme/j1.png",
            "img/theme/j2.png",
            "img/theme/j3.png",
            "img/theme/j4.png",
          ],
        },
        {
          image: "img/theme/v1.png",
          title: "Volunteer Name",
          publishDate: "Posted on 12:20am",
          postImages: [
            "img/theme/j1.png",
            "img/theme/j2.png",
            "img/theme/j3.png",
            "img/theme/j4.png",
          ],
        },
      ],
      logList: [
        {
          title: "Jason Marksss",
          image: "img/theme/v8.png",
          status: "Check In",
          value: 3.7,
        },
        {
          title: "Kate Austen",
          image: "img/theme/v8.png",
          status: "Check In",
          value: 4,
        },
        {
          title: "Somia Mark",
          image: "img/theme/v8.png",
          status: "Check In",
          value: 4.5,
        },
        {
          title: "Somia Mark",
          image: "img/theme/v8.png",
          checkTime: "Check in: 09:00 am",
          value: 5,
        },
      ],
      commentBox: [
        {
          title: "Alice Mark",
          publishDate: "Posted On 08:00 am",
          image: "img/theme/v1.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          title: "Jason Mark",
          publishDate: "Posted On 08:00 am",
          image: "img/theme/v2.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          title: "Jhon Mark",
          publishDate: "Posted On 08:00 am",
          image: "img/theme/v3.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          title: "Jhon Mark",
          publishDate: "Posted On 08:00 am",
          image: "img/theme/v4.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          title: "Jhon Mark",
          publishDate: "Posted On 08:00 am",
          image: "img/theme/v5.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
      ],
    };
  },
};
</script>

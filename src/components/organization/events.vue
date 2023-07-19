<template>
  <div class="eventDetailSecion">
    <div class="cardBox" v-for="(item, index) in eventdata" :key="index">
      <div
        class="eventDetailBox"
        v-bind:style="{ backgroundImage: `url(${item.eventimage})` }"
      >
        <div
          class="position-relative eventImage d-inline-block bg-white px-5 detailComing"
          v-if="status"
        >
          <div class="upComingBox">
            <p class="mb-0 text-theme-primary font-weight-600">{{ status }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="eventDetail px-3 shadow">
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2">
          <h3 class="mb-0 font-weight-900">Society Event</h3>
          <p class="text-gray mb-0">Organizer Name</p>
        </div>
        <div class="editOption pr-3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline">
                <span @click="suggestionBox = true"> Edit</span></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-delete">
                <span @click="editOptions = true">Report</span></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="w-50">
          <p class="font-weight-400">
            <span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-calendar pr-2" aria-hidden="true"></i
              >October 15, 2021</span
            >
            <span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-clock pr-2" aria-hidden="true"></i
              >09:00am - 01:00pm</span
            >
            <span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-map-marker pr-2" aria-hidden="true"></i
              >463 Korey Inlet, Abu Dhabi Emirate United Arab Emirates, AE</span
            ><span class="pr-3 d-inline-block"
              ><i
                class="text-theme-primary fa fa-hourglass-half pr-2"
                aria-hidden="true"
              ></i
              >30 Total hour Required</span
            ><span class="pr-3 d-inline-block"
              ><i
                class="text-theme-primary fa fa-hand-spock-o pr-2"
                aria-hidden="true"
              ></i
              >400 Volunteers</span
            >
          </p>
        </div>
        <div class="mapBox d-flex justify-content-end">
          <img src="img/theme/liveEvent.png" alt="LiveEvent" class="w-25 mx-100" />
        </div>
      </div>
      <div class="contentInfo border-top py-3 mt-3">
        <h3 class="font-weight-900">About Us</h3>
        <p class="text-light">
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which don't look even slightly believable. If you are going to use a passage of
          Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC, making it over
          2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words, consectetur, There
          are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which
          don't look even slightly believable. If you are going to use a passage of Lorem
          Ipsum,
        </p>
        <div class="d-flex volunteerIcons align-items-center flex-column flex-md-row">
          <div class="volunteersImage mb-3">
            <img src="img/theme/v1.png" alt="volunteer user" class="position-relative" />
            <img src="img/theme/v2.png" alt="volunteer user" class="position-relative" />
            <img src="img/theme/v3.png" alt="volunteer user" class="position-relative" />
            <img src="img/theme/v4.png" alt="volunteer user" class="position-relative" />
            <img src="img/theme/v5.png" alt="volunteer user" class="position-relative" />
            <img src="img/theme/v6.png" alt="volunteer user" class="position-relative" />
            <img src="img/theme/v7.png" alt="volunteer user" class="position-relative" />
            <img src="img/theme/v8.png" alt="volunteer user" class="position-relative" />
          </div>
          <h3 class="text-light font-weight-500 ml-0 ml-md-5"><a @click="toggleList()">+400 Volunteers</a></h3>
        </div>
        <div class="volunteerRequest my-3">
          <p class="mb-0">
            <router-link
              :to="linkButton"
              class="btn-theme-primary btn-round d-block m-auto font-weight-600"
              v-if="buttonText != ''"
              >{{ buttonText }}</router-link
            >
          </p>
        </div>
      </div>
      <div class="tabspost mt-4">
        <el-tabs type="card" @tab-click="handleClick" v-model="activeName">
          <el-tab-pane label="Home">
            <searhBox />
            <div class="postcontentLive" v-if="$route.path == '/Organization/event-live'">
              <postTab dataShow="d-block" />
            </div>
            <div class="postcontent" v-else>
              <postTab />
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="Suggestions"
            v-if="
              $route.path == '/Organization/up-coming' ||
              $route.path == '/organization/up-coming'
            "
          >
            <Requested searchBox="d-none" />
          </el-tab-pane>
          <el-tab-pane label="Suggestion" v-else>
            <comments />
          </el-tab-pane>
          <el-tab-pane label="Post Requests" v-if="!buttonText">
            <div class="uploadBox">
              <div class="eventContent pl-2 d-flex align-items-center gap-15">
                <div class="autthorImage">
                  <figure class="mb-0">
                    <img src="img/theme/v1.png" alt="Author Image" class="mw-100" />
                  </figure>
                </div>
                <div class="authorContent">
                  <h4 class="mb-0 font-weight-900">Organizer Name</h4>
                  <p class="text-gray mb-0">Posted on 12:20am</p>
                </div>
              </div>
              <div class="d-flex flex-wrap">
                <img src="img/theme/template.png" alt="" class="mx-100" />
                <img src="img/theme/template.png" alt="" class="mx-100" />
                <img src="img/theme/template.png" alt="" class="mx-100" />
                <img src="img/theme/template.png" alt="" class="mx-100" />
              </div>
              <div class="d-flex flex-wrap gap-15 py-4">
                <a href="#" class="btn-theme-primary px-5 py-2 rounded-10">Accept</a>
                <a
                  href="#"
                  class="btn-theme-primary px-5 py-2 rounded-10 bg-light text-dark"
                  >Reject</a
                >
              </div>
            </div>
            <div class="uploadBox">
              <div class="eventContent pl-2 d-flex align-items-center gap-15">
                <div class="autthorImage">
                  <figure class="mb-0">
                    <img src="img/theme/v1.png" alt="Author Image" class="mw-100" />
                  </figure>
                </div>
                <div class="authorContent">
                  <h4 class="mb-0 font-weight-900">Organizer Name</h4>
                  <p class="text-gray mb-0">Posted on 12:20am</p>
                </div>
              </div>
              <div class="d-flex flex-wrap">
                <img src="img/theme/template.png" alt="" class="mx-100" />
                <img src="img/theme/template.png" alt="" class="mx-100" />
                <img src="img/theme/template.png" alt="" class="mx-100" />
                <img src="img/theme/template.png" alt="" class="mx-100" />
              </div>
              <div class="d-flex flex-wrap gap-15 py-4">
                <a href="#" class="btn-theme-primary px-5 py-2 rounded-10">Accept</a>
                <a
                  href="#"
                  class="btn-theme-primary px-5 py-2 rounded-10 bg-light text-dark"
                  >Reject</a
                >
              </div>
              <div class="text-center">
                <p><a href="" class="btn-round btn-theme-primary px-5">View More</a></p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Request" v-if="$route.path == '/Organization/up-coming' || $route.path == '/organization/up-coming'">
            <Requested searchBox="d-block" />
          </el-tab-pane>
          <el-tab-pane label="Comments" v-else>
            <comments />
            <div class="text-center">
              <p><a href="" class="btn-round btn-theme-primary px-5">View More</a></p>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div v-if="toggle" class="logsArea">
        <h4 class="font-weight-800">Volunteer List</h4>
        <div class="searhBox my-4">
          <el-input
            placeholder="Search Volunteers"
            prefix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
        </div>
        <div class="d-flex justify-content-end mr-md-3">
          <p class="mb-0">
            <a href="" class="btn-round btn-theme-primary px-5"
              >Download</a
            >
          </p>
        </div>
        <div v-for="(item, index) in awarded" :key="index">
          <Awards :awardItem="item" />
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
        <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">Report</h3>
        <div class="reviewBox">
          <el-form action="">
            <el-form-item class="textareaStyle">
              <el-input
                type="textarea"
                :rows="12"
                placeholder="Write Review"
                v-model="textarea"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="button"
                class="submit-theme-primary btn-round d-block m-auto font-weight-600"
                :plain="true"
                @click="success"
                >Submit</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      :visible.sync="suggestionBox"
      width="500px"
      center
      class="border-round report-box"
    >
      <div class="popup-content-box">
        <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
          Suggestion
        </h3>
        <div class="reviewBox">
          <el-form action="">
            <el-form-item class="textareaStyle">
              <el-input
                type="textarea"
                :rows="12"
                placeholder="Write Suggestion"
                v-model="textarea"
              >
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="button"
                class="submit-theme-primary btn-round d-block m-auto font-weight-600"
                :plain="true"
                @click="suggestionMessage"
                >Submit</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import postTab from "./postTab.vue";
import searhBox from "./uploadPost.vue";
import comments from "./suggestion.vue";
import Requested from "./requested.vue";
import Awards from "../../components/organization/awarded.vue";
export default {
  name: "upcoming",
  components: {
    postTab,
    searhBox,
    comments,
    Requested,
    Awards
  },
  props: {
    buttonText: {
      type: String,
      description: "Button Text",
    },
    linkButton: {
      type: String,
      description: "click Action",
    },
    status: {
      type: String,
    },
  },
  data() {
    return {
      editOptions: false,
      suggestionBox: false,
      reviewBox: false,
      ratingStar: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      textarea: "",
      review: "",
      activeName: "none",
      search: '',
      toggle: false,
      eventdata: [
        {
          eventimage: "/img/theme/banner.png",
          etitle: "Society Event",
          ecompany: "Organizer Name",
        },
      ],
      awarded: [
        {
          title: "Jason Marksss",
          image: "img/theme/v8.png",
          btntxt: "Check In",
        },
        {
          title: "Kate Austen",
          image: "img/theme/v8.png",
          btntxt: "Check In",
        },
        {
          title: "Jason Marksss",
          image: "img/theme/v8.png",
          btntxt: "Check In",
        },
        {
          title: "Kate Austen",
          image: "img/theme/v8.png",
          time: '09:00 PM',
          btntxt: "Check Out",
        },
      ],
    };
  },
  methods: {
    toggleList() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

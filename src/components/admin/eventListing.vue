<template>
  <div class="eventDetailSecion">
    <div class="cardBox">
      <div class="eventDetailBox" :style="{ backgroundImage: 'url(' + image + ')' }">
        <div
          class="position-relative eventImage d-inline-block bg-white px-5 detailComing"
          v-if="eventStatus"
        >
          <div class="upComingBox">
            <p class="mb-0 text-theme-primary font-weight-600">{{ eventStatus }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="eventDetail">
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2">
          <div class="ratingBox d-flex align-items-center flex-wrap gap-15">
            <h3 class="mb-0 font-weight-900">Mathew Corp</h3>
            <div
              class="d-flex align-items-center gap-15"
              v-if="
                $route.path == '/admin/past-events' ||
                $route.path == '/admin/certificate-management-detail'
              "
            >
              <el-rate v-model="value" disabled show-score text-color="#ff9900">
              </el-rate>
              <router-link class="text-theme-primary" to="#">Health</router-link>
            </div>
          </div>
          <p class="text-gray mb-0">Organizer Name</p>
        </div>
        <!-- <div class="editOption pr-3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline">
                <span @click="editOptions = true"> Edit</span></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-delete">
                <span @click="suggestionBox = true">Delete</span></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div> -->
        <div class="editOption actionBtn">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="#" class="text-theme-primary d-block"
                  >Generate Warning</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item>
                <router-link to="#" class="text-theme-primary d-block"
                  >Deactivate</router-link
                ></el-dropdown-item
              >
              <el-dropdown-item>
                <router-link to="#" class="text-theme-primary d-block"
                  >Delete</router-link
                ></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <div class="contentItem">
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
                ><i
                  class="text-theme-primary fa fa-map-marker pr-2"
                  aria-hidden="true"
                ></i
                >463 Korey Inlet, Abu Dhabi Emirate United Arab Emirates, AE
                <a href="#" class="text-theme-primary font-weight-600 px-3"
                  >View On Map</a
                > </span
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
        </div>
        <div class="col-md-5 mapBox d-flex justify-content-end">
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
        <div
          class="d-flexs volunteerIcons align-items-center flex-column flex-md-row"
          :class="showBox"
        >
          <div class="volunteersImage mb-3">
            <img
              :src="item"
              alt="volunteer user"
              class="position-relative"
              v-for="(item, index) in volunteerList"
              :key="index"
            />
          </div>
          <h3 class="font-weight-500 ml-0 ml-md-5">
            <router-link to="event-volunteer-list" class="text-light"
              >+200 Volunteer</router-link
            >
          </h3>
        </div>
      </div>
    </div>
    <!-- modal box -->
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
export default {
  name: "EventList",
  components: {},
  data() {
    return {
      image: "/img/theme/banner.png",
      editOptions: false,
      suggestionBox: false,
      value: 4.5,
    };
  },
  props: {
    volunteerList: {
      type: Array,
    },
    eventStatus: {
      type: String,
    },
    showBox: {
      type: String,
    },
  },
};
</script>

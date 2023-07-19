<template>
  <div class="eventDetailSecion">
    <div class="cardBox" v-for="(item, index) in eventdata" :key="index">
      <div
        class="eventDetailBox"
        v-bind:style="{ backgroundImage: `url(${item.eventimage})` }"
      >
        <div
          class="
            position-relative
            eventImage
            d-inline-block
            bg-white
            px-5
            detailComing
          "
        >
          <div class="upComingBox">
            <p class="mb-0 text-theme-primary font-weight-600">Upcoming</p>
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
                <span @click="editOptions = true"> Edit</span></el-dropdown-item
              >
              <el-dropdown-item icon="el-icon-delete"> <span @click="suggestionBox = true">Delete</span></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dialog
            :visible.sync="editOptions"
            width="500px"
            center
            class="border-round report-box"
          >
            <div class="popup-content-box">
              <h3
                class="
                  text-theme-secondary text-capatilize
                  font-weight-900
                  mb-4
                "
              >
                Report
              </h3>
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
                    <el-button type="button" class="submit-theme-primary btn-round d-block m-auto font-weight-600" :plain="true" @click="success"
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
              <h3
                class="
                  text-theme-secondary text-capatilize
                  font-weight-900
                  mb-4
                "
              >
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
                    <el-button type="button" class="submit-theme-primary btn-round d-block m-auto font-weight-600" :plain="true" @click="suggestionMessage"
                      >Submit</el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-dialog>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="w-50">
          <p class="font-weight-400">
            <span class="pr-3 d-inline-block"
              ><i
                class="text-theme-primary fa fa-calendar pr-2"
                aria-hidden="true"
              ></i
              >October 15, 2021</span
            >
            <span class="pr-3 d-inline-block"
              ><i
                class="text-theme-primary fa fa-clock pr-2"
                aria-hidden="true"
              ></i
              >09:00am - 01:00pm</span
            >
            <span class="pr-3 d-inline-block"
              ><i
                class="text-theme-primary fa fa-map-marker pr-2"
                aria-hidden="true"
              ></i
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
              >200 Volunteers</span
            >
          </p>
        </div>
        <div class="mapBox">
          <p class="mb-0">
            <a href="#" class="text-theme-primary font-weight-600"
              >View On Map</a
            >
          </p>
        </div>
      </div>
      <div class="contentInfo border-top py-3 mt-3">
        <h3 class="font-weight-900">About Us</h3>
        <p class="text-light">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words,
          consectetur, There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even slightly
          believable. If you are going to use a passage of Lorem Ipsum,
        </p>
        <div
          class="
            d-flex
            volunteerIcons
            align-items-center
            flex-column flex-md-row
          "
        >
          <div class="volunteersImage mb-3">
            <img
              src="img/theme/v1.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v2.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v3.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v4.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v5.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v6.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v7.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v8.png"
              alt="volunteer user"
              class="position-relative"
            />
          </div>
          <h3 class="text-light font-weight-500 ml-0 ml-md-5">
            +200 Volunteers
          </h3>
        </div>
        <div
          class="
            d-flex
            volunteerIcons
            align-items-center
            flex-column flex-md-row
          "
        >
          <div class="volunteersImage mb-3">
            <img
              src="img/theme/v1.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v2.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v3.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v4.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v5.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v6.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v7.png"
              alt="volunteer user"
              class="position-relative"
            />
            <img
              src="img/theme/v8.png"
              alt="volunteer user"
              class="position-relative"
            />
          </div>
          <h3 class="text-light font-weight-500 ml-0 ml-md-5">
            +320 Following
          </h3>
        </div>
        <div class="volunteerRequest my-3">
          <p class="mb-0">
            <router-link
              :to=linkButton
              class="btn-theme-primary btn-round d-block m-auto font-weight-600"
              >{{buttonText}}</router-link
            >
          </p>
        </div>
      </div>
        <searhBox/>
        <postTab/>
    </div>
  </div>
</template>
<script>
import postTab from "./postTab.vue"
import searhBox from "./uploadPost.vue"
export default {
  name: "upcoming",
  components: {
    postTab,
    searhBox
  },
  props: {
    buttonText: {
      type: String,
      description: 'Button Text'
    },
    linkButton: {
      type: String,
      description: 'click Action'
    }
  },
  data() {
    return {
      editOptions: false,
      suggestionBox: false,
      textarea: "",
      eventdata: [
        {
          eventimage: "/img/theme/banner.png",
          etitle: "Society Event",
          ecompany: "Organizer Name",
        },
      ],
    };
  },
  methods: {
    success() {
      this.$message({
        message: "Congrats, your review is successfuly submitted.",
        type: "success",
      });
    },
    suggestionMessage () {
      this.$message({
        message: "Congrats, your suggestion is successfuly submitted.",
        type: "success",
      });
    }
  },
};
</script>

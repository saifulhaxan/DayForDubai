<template>
  <div class="eventListning container-fluid">
    <div class="headBox mb-5">
      <h2 class="font-weight-900">
        <i class="el-icon-arrow-left"></i> Edit Event Details
      </h2>
    </div>
    <div class="eventsectionLive">
      <el-form>
        <div class="eventDetailSecion">
          <div class="cardBox">
            <div
              class="eventDetailBox"
              :style="{ backgroundImage: 'url(img/theme/editEvents.png)' }"
            >
              <!-- <div
                class="position-relative eventImage d-inline-block bg-white px-5 detailComing"
              >
                <div class="upComingBox">
                  <p class="mb-0 text-theme-primary font-weight-600">Upcoming</p>
                </div>
              </div> -->
            </div>
          </div>
          <div class="eventDetail">
            <div class="d-flex justify-content-between py-3">
              <div class="eventContents">
                <div class="ratingBox d-flex align-items-center flex-wrap gap-15">
                  <h6 class="mb-2 font-weight-900">Event Name</h6>
                </div>
                <el-input class="border" v-model="Oname"></el-input>
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
                    <el-dropdown-item icon="el-icon-delete">
                      <span @click="suggestionBox = true">Delete</span></el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div class="contentInfo border-top py-3 mt-3">
              <h6 class="text-dark font-weight-900">About Us</h6>
              <el-input
                type="textarea"
                v-model="textarea"
                show-word-limit
                placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text."
              >
              </el-input>
            </div>
            <div class="contentInfo border-top py-3 mt-3">
              <h6 class="text-dark font-weight-900">Time & Date</h6>
              <div
                class="d-flex align-items-center flex-wrap gap-15 mb-3 bg-secondary p-2"
              >
                <span class="demonstration">Date / Time</span>
                <el-date-picker
                  v-model="value3"
                  type="datetime"
                  placeholder="Select date and time"
                  default-time="12:00:00"
                >
                </el-date-picker>
                <span class="el-icon-circle-plus-outline text-theme-primary"></span>
              </div>
              <div
                class="d-flex align-items-center flex-wrap gap-15 mb-3 bg-secondary p-2"
              >
                <span class="demonstration">Date / Time</span>
                <el-date-picker
                  v-model="value3"
                  type="datetime"
                  placeholder="Select date and time"
                  default-time="12:00:00"
                >
                </el-date-picker>
                <span class="el-icon-circle-plus-outline text-theme-primary"></span>
              </div>
            </div>
            <div class="contentInfo border-top py-3 mt-3">
              <h6 class="text-dark font-weight-900">Location</h6>
              <el-input
                placeholder="Location"
                suffix-icon="el-icon-location-information"
                v-model="location"
                class="w-50"
              >
              </el-input>
            </div>
            <div class="contentInfo border-top py-3 mt-3">
              <h6 class="text-dark font-weight-900">Category</h6>
              <el-select v-model="value" placeholder="Select" class="w-50">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="contentInfo border-top py-3 mt-3">
              <h6 class="text-dark font-weight-900">No.of Volunteers Required</h6>
              <el-input placeholder="220" v-model="volunteer" class="w-50"> </el-input>
            </div>
            <div class="contentInfo border-top py-3 mt-3">
              <h6 class="text-dark font-weight-900">Hours Required For Certification</h6>
              <el-input placeholder="20" v-model="certificate" class="w-50"> </el-input>
            </div>
            <div class="actionBtn my-5 d-flex flex-wrap">
              <button
                type="submit"
                class="btn-theme-primary btn-round border-0 mr-2 py-2 w-btn"
                to="#"
              >
                Update
              </button>
              <button
                type="button"
                class="btn-theme-primary btn-round border-0 mr-2 py-2 w-btn"
                to="#"
              >
                Cancel
              </button>
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
              <h6 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
                Report
              </h6>
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
              <h6 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
                Suggestion
              </h6>
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
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditEvents",
  data() {
    return {
      nonActive: "none",
      search: "",
      editOptions: false,
      suggestionBox: false,
      Oname: "",
      textarea: "",
      value3: "",
      location: "",
      value: "",
      volunteer: "",
      certificate: "",
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
    };
  },
};
</script>

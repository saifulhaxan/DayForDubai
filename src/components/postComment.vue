<template>
  <div class="commet">
    <div class="d-flex justify-content-between">
      <div class="commenTitle">
        <h4 class="font-weight-600">Comments</h4>
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
              <span @click="suggestionBox = true"
                >Delete</span
              ></el-dropdown-item
            >
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
              class="text-theme-secondary text-capatilize font-weight-900 mb-4"
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
                  <el-button
                    type="button"
                    class="
                      submit-theme-primary
                      btn-round
                      d-block
                      m-auto
                      font-weight-600
                    "
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
            <h3
              class="text-theme-secondary text-capatilize font-weight-900 mb-4"
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
                  <el-button
                    type="button"
                    class="
                      submit-theme-primary
                      btn-round
                      d-block
                      m-auto
                      font-weight-600
                    "
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
    </div>
    <div
      class="d-flex w-100 px-0 px-md-3 flex-wrap"
      v-for="(item, index) in commentArea"
      :key="index"
    >
      <div class="commentitem d-flex w-100 align-items-md-center gap-15 my-4">
        <div class="commentImage">
          <img :src="item.image" alt="" class="mw-100 w-70px" />
        </div>
        <div class="commentbox w-100 shadow p-3 rounded-15">
          <p class="mb-0">{{ item.comment }}</p>
        </div>
      </div>
    </div>
    <div class="d-flex w-100 px-3 flex-column">
      <div
        class="commentitem d-flex w-100 align-items-center gap-15"
        v-for="(item, index) in commments"
        :key="index"
      >
        <img src="img/theme/v8.png" alt="" class="mw-100 w-70px" />
        <div class="commentbox w-100 shadow p-3 rounded-15 my-4">
          <p class="mb-0">{{ item.txt }}</p>
        </div>
      </div>
    </div>
    <div
      class="
        d-flex
        align-items-center
        gap-15
        px-4
        rounded-15
        border-shadow
        py-2
        my-3
      "
      v-if="!buttonText"
    >
      <p class="mb-0"><i class="fa fa-smile-o"></i></p>
      <div class="commentField w-100">
        <input
          type="text"
          value="abc"
          v-model="comment"
          class="w-100 border-0 no-focus"
        />
      </div>
      <div class="btnRemove">
        <i class="fa fa-location-arrow" @click="addComment()"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editOptions: false,
      suggestionBox: false,
      commments: [],
      comment: "",
      commentArea: [
        {
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
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

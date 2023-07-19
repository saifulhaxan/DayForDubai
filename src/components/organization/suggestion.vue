<template>
  <div class="commet">
    <div class="d-flex w-100 px-3 flex-column">
      <div
        class="commentitem d-flex w-100 align-items-start gap-15 my-4"
        v-for="(item, index) in suggestion"
        :key="index"
      >
        <div class="authotImage">
            <img :src="item.image" alt="" class="mw-100 w-70px" />
        </div>
        <div class="commentbox w-100 shadow p-3 rounded-15">
          <div class="d-flex justify-content-between">
            <div class="titleDescription">
              <h3 class="text-dark font-weight-600 mb-0">{{ item.title }}</h3>
              <p class="text-light">{{ item.date }}</p>
            </div>
            <div class="editOption pr-3">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <i class="fa fa-ellipsis-v fa-2x"></i>
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
              <el-dialog
                :visible.sync="editOptions"
                width="500px"
                center
                class="border-round report-box"
              >
                <div class="popup-content-box">
                  <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
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
          </div>
          <p class="mb-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'suggestion',
  data() {
    return {
      editOptions: false,
      suggestionBox: false,
      suggestion: [
        {
          title: "Jason Mark",
          date: "Posted On 08:00 am",
          image: "img/theme/v8.png",
          description:
            "or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          title: "Kate Austen",
          date: "Posted On 09:00 am",
          image: "img/theme/v8.png",
          description:
            "or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          title: "Somia Mark",
          date: "Posted On 05:00 am",
          image: "img/theme/v8.png",
          description:
            "or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="volunteer mx-md-3">
    <div class="contentManagment my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <h2 class="font-weight-900 pt-0">
            <router-link to="./content-management" class="text-dark"
              ><i class="el-icon-arrow-left"></i> Content Management</router-link
            >
          </h2>
        </div>
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-15 flex-wrap justify-content-md-end">
            <div class="editOption pr-3">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <i class="el-icon-more fa-2x"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-edit-outline">
                    <span @click="editOptions = true"> Edit</span></el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-12 text-center">
          <figure>
            <img src="img/theme/content.png" alt="" />
          </figure>
        </div>
        <div class="col-md-12">
          <h5 class="text-dark font-weight-900 my-5">Article XYZ</h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you are going
            to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur,
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
            in section 1.10.32.
          </p>
        </div>
        <div class="col-md-12">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="Contrary to popular belief," name="1">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem
                Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur,
              </p>
            </el-collapse-item>
            <el-collapse-item title="Contrary to popular belief," name="2">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem
                Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur,
              </p>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="col-md-12">
          <h5 class="text-dark font-weight-900 my-5">Important Discrlaimer</h5>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you are going
            to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur,
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
            Virginia, from a Lorem Ipsum passage, and going through the cites of the word
            in classical literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the Renaissance. The
            first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
            in section 1.10.32.
          </p>
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
        <h6 class="text-theme-secondary text-capatilize font-weight-900 mb-4">Report</h6>
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
  </section>
</template>

<script>
export default {
  name: "ContentManagementDetail",
  data() {
    return {
      editOptions: false,
      activeNames: ["1"],
    };
  },
};
</script>

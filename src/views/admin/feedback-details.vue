<template>
  <section class="volunteer mx-md-3">
    <div class="volunteerData my-5 px-3 rounded-30 py-5 shadow">
      <div class="row mb-4">
        <div class="col-md-8">
          <router-link to="feedback" class="text-dark"
            ><h3 class="font-weight-900 text-dark">
              <i class="el-icon-arrow-left"></i> Feedbacks Deatils
            </h3></router-link
          >
        </div>
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-15 flex-wrap justify-content-md-end">
            <p class="mb-0">
              <router-link
                to="chat-box"
                class="btn-theme-primary btn-round w-btn d-block m-auto font-weight-600"
                >Reply</router-link
              >
            </p>
          </div>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-md-12">
          <div class="form-controls d-md-flex gap-15 align-items-center">
            <label for="" class="mb-0 w-label">Name: </label>
            <el-input
              placeholder="Mark"
              v-model="name"
              :disabled="true"
              class="input-transparent"
            >
            </el-input>
          </div>
          <div class="form-controls d-md-flex gap-15 align-items-center">
            <label for="" class="mb-0 w-label">Email: </label>
            <el-input
              placeholder="Mark@gmail.com"
              v-model="email"
              :disabled="true"
              class="input-transparent"
            ></el-input>
          </div>
          <div class="form-controls d-md-flex gap-15 align-items-center">
            <label for="" class="mb-0 w-label">Date: </label>
            <el-input
              placeholder="20/05/2020"
              v-model="date"
              :disabled="true"
              class="input-transparent"
            ></el-input>
          </div>
          <div class="form-controls d-md-flex gap-15 align-items-center">
            <label for="" class="mb-0 w-label">Message: </label>
            <el-input
              type="textarea"
              :rows="2"
              :disabled="true"
              class="input-transparent"
              placeholder="For natively created Axure widgets, you do not have to look any further. For natively created Axure widgets, you do not have to look any further. For natively created Axure widgets, you do not have to look any further. For natively created Axure widgets, you do not have to look any further."
              v-model="textarea"
            >
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeedBackDetails",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      date: "",
      textarea: "",
    };
  },
};
</script>

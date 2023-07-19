<template>
    <div class="contact-us h-100vh">
      <div class="eventsecton">
        <div class="headBox mb-5">
          <h2 class="font-weight-900">
            <router-link to="./setting" class="text-dark"
              ><i class="el-icon-arrow-left"></i
            ></router-link>
            Contact Us
          </h2>
        </div>
        <div class="eventDetail shadow p-5 h-100vh">
          <div class="row">
            <div class="col-md-4 m-auto">
              <form action="#">
                <div class="vue-form-control my-3">
                  <el-input placeholder="Name*" v-model="user" id="name"> </el-input>
                </div>
                <div class="vue-form-control my-3">
                  <el-input placeholder="Email*" v-model="email" id="email"> </el-input>
                </div>
                <div class="vue-form-control my-3">
                  <el-input
                    placeholder="Subject*"
                    v-model="subject"
                    id="number"
                    type="text"
                  >
                  </el-input>
                </div>
                <div class="vue-from-control my-3 textArea">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 10, maxRows: 12 }"
                    placeholder="Message*"
                    v-model="textarea2"
                  >
                  </el-input>
                </div>
                <div class="submit-button d-flex justify-content-center">
                  <div class="volunteerBtn mt-3">
                    <button
                      type="button"
                      class="m-auto btn-theme-primary py-2 border-0 btnUpdate"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {
      user: "",
      email: "",
      subject: "",
      textarea2: ''
    };
  },
};
</script>

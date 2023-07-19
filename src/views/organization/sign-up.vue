<template>
  <section class="login">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 p-5">
          <div class="logoBox mb-5">
            <img src="img/theme/colorLogo.png" alt="Logo Dubai" />
          </div>
          <div class="login-content-box">
            <h2 class="text-theme-primary font-weight-bold">
              Let's Create Your
              <span class="text-theme-secondary">Account</span>
            </h2>
          </div>
          <div class="form-box col-md-10 px-0">
            <form action="./organization/home" method="POST">
              <div class="vue-form-control my-3">
                <el-input placeholder="Enter Name" v-model="user" id="name">
                  <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
              </div>
              <div class="vue-form-control my-3">
                <el-input placeholder="Enter Email Address" v-model="email" id="email">
                  <i slot="prefix" class="el-input__icon el-icon-message"></i>
                </el-input>
              </div>
              <div class="vue-form-control my-3 internationalFeild">
                <VuePhoneNumberInput v-model="number" placeholder="Enter Phone Number" />
              </div>
              <div class="vue-form-control my-3">
                <el-input
                  placeholder="Please input password"
                  v-model="Password"
                  show-password
                >
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </div>
              <div class="vue-form-control my-3">
                <el-input
                  placeholder="Please input password"
                  v-model="confirmPassword"
                  show-password
                >
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </div>
              <div class="vue-form-control my-3">
                <el-input
                  placeholder="Enter Organization Name (English)"
                  v-model="englishOrganization"
                  id="EnterGender"
                >
                  <i slot="prefix" class="el-input__icon el-icon-s-help"></i>
                </el-input>
              </div>
              <div class="vue-form-control my-3">
                <el-input
                  placeholder="Enter Organization Name (Arabic)"
                  v-model="arabicOrganization"
                  id="arabicOrganization"
                >
                  <i slot="prefix" class="el-input__icon el-icon-s-help"></i>
                </el-input>
              </div>
              <div class="vue-form-control my-3">
                <el-select
                  v-model="value"
                  clearable
                  placeholder="Select Organization Type"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                  <i slot="prefix" class="el-input__icon el-icon-s-help"></i>
                </el-select>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mt-2 flex-wrap mb-4"
              >
                <div class="vue-from-control">
                  <h6 class="mb-3 mb-md-0 text-light">Organization's Logo</h6>
                </div>
                <div class="vue-from-control">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                    :limit="1"
                    :file-list="fileList"
                  >
                    <el-button size="medium" class="w-255px" type="primary"
                      >Upload Image</el-button
                    >
                  </el-upload>
                </div>
              </div>
              <div
                class="d-flex justify-content-between align-items-center mt-2 flex-wrap"
              >
                <div class="vue-from-control">
                  <h6 class="mb-3 mb-md-0 text-light">
                    Organization's Authorization Letter
                  </h6>
                </div>
                <div class="vue-from-control">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                    :limit="1"
                    :file-list="fileList"
                  >
                    <el-button size="medium" class="w-255px" type="primary"
                      >Upload</el-button
                    >
                  </el-upload>
                </div>
              </div>
              <div class="submit-button d-flex justify-content-center">
                <div class="volunteerBtn mt-5">
                  <button
                    type="submit"
                    class="btn-theme-secondary btn-round d-block"
                    @click="centerDialogVisible = true"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-7 mainLogin d-flex align-items-center px-5">
          <div class="content-right-box col-md-9">
            <h1 class="text-white font-weight-900">
              What People Say About Day for Dubai
            </h1>
            <p class="text-white">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock,
            </p>
            <div class="slide">
              <carousel>
                <slide v-for="(item, index) in testimonials" :key="index">
                  <div class="item-box text-center">
                    <img :src="item.img" alt="Boy" class="mw-100" />
                    <div class="item-content-box">
                      <h3 class="text-theme-primary">{{ item.name }}</h3>
                      <h4 class="text-dark">{{ item.designation }}</h4>
                      <p>{{ item.text }}</p>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="centerDialogVisible"
      width="500px"
      center
      class="border-round"
    >
      <div class="popup-content-box text-center">
        <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
          Thank You For <span class="text-theme-primary">Signing Up !</span>
        </h3>
        <p class="text-light">Hey!</p>
        <p class="text-light mb-0">
          We are glad you came on our platform. Your Profile has been sent for
          verification. You will be informed once its verified. Thank you for your
          Patience!
        </p>
        <figure class="position-relative arrowImage mb-0">
          <img src="img/theme/arrow.png" alt="" class="mw-100" />
        </figure>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
Vue.component("vue-phone-number-input", VuePhoneNumberInput);
import Vue from "vue";
import VueCarousel from "vue-carousel";
import { Carousel, Slide } from "vue-carousel";
Vue.use(VueCarousel);
export default {
  name: "Login",
  components: {
    Carousel,
    Slide,
    VuePhoneNumberInput,
  },
  data() {
    return {
      centerDialogVisible: false,
      fileList: [],
      radio: 3,
      user: "",
      email: "",
      number: "",
      englishOrganization: "",
      arabicOrganization: "",
      emiritas: "",
      expiry: "",
      nationality: "",
      Password: "",
      confirmPassword: "",
      value: "100",
      value: "",
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
      testimonials: [
        {
          name: "Katty Wilson",
          designation: "Founder & CEO",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
          img: "img/theme/boy.png",
        },
        {
          name: "Katty Wilson",
          designation: "Founder & CEO",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
          img: "img/theme/girl.png",
        },
        {
          name: "Katty Wilson",
          designation: "Founder & CEO",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
          img: "img/theme/boy.png",
        },
        {
          name: "Katty Wilson",
          designation: "Founder & CEO",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
          img: "img/theme/girl.png",
        },
        {
          name: "Katty Wilson",
          designation: "Founder & CEO",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
          img: "img/theme/boy.png",
        },
        {
          name: "Katty Wilson",
          designation: "Founder & CEO",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
          img: "img/theme/girl.png",
        },
        {
          name: "Katty Wilson",
          designation: "Founder & CEO",
          text:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
          img: "img/theme/boy.png",
        },
      ],
    };
  },
};
</script>

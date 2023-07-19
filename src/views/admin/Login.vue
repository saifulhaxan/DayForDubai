<template>
  <section class="login">
    <div class="container-fluid">
      <div class="row align-items-center h-f100">
        <div class="col-md-5 px-5">
          <div class="logoBox mb-5">
            <img src="img/theme/colorLogo.png" alt="Logo Dubai" />
          </div>
          <div class="login-content-box">
            <h1 class="text-theme-primary font-weight-900 text-capitalize">
              Welcome back! <span class="d-block">sign In</span> 
            </h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has
              roots in a piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock,
            </p>
          </div>
          <div class="form-box">
            <form action="/admin/dashboard" class="w-75">
              <div class="vue-form-control my-3">
                <label for="email"> Email: <span class="required">*</span> </label>
                <el-input placeholder="Please input" v-model="email" id="email" border-50>
                  <i slot="prefix" class="el-input__icon el-icon-message"></i>
                </el-input>
              </div>
              <div class="vue-form-control my-3">
                <label for="Password"> Password: <span class="required">*</span> </label>
                <el-input
                  placeholder="Please input password"
                  v-model="password"
                  show-password
                >
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </div>
              <div class="d-flex justify-content-end">
                <div class="forgot-password">
                  <p><a href="./admin/forgot" class="text-dark">Forgot Password?</a></p>
                </div>
              </div>
              <div class="submit-button d-flex justify-content-center">
                <div class="volunteerBtn mt-5">
                    <!-- <button type="submit" class="btn-theme-primary btn-round d-block border-0" @click="window.redirect = '../admin/dasboard'">Sign in</button> -->
                
                <router-link to="./dashboard" class="btn-theme-primary btn-round d-block border-0" >Sign in</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-7 mainLogin d-flex align-items-center px-5 h-100">
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
                    <img :src="item.img" alt="Boy" class="mw-100">
                    <div class="item-content-box">
                      <h3 class="text-theme-primary">{{item.name}}</h3>
                      <h4 class="text-dark">{{item.designation}}</h4>
                      <p>{{item.text}}</p>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import MainScreen from '.'
import Vue from "vue";
import VueCarousel from "vue-carousel";
import { Carousel, Slide } from 'vue-carousel';
Vue.use(VueCarousel);
export default {
  name: "Login",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      email: "",
      password: "",
      value: "100",
      testimonials: [
        {
        name: 'Katty Wilson' ,
        designation: 'Founder & CEO',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        img: 'img/theme/boy.png'
        },
        {
        name: 'Katty Wilson' ,
        designation: 'Founder & CEO',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        img: 'img/theme/girl.png'
        },
        {
        name: 'Katty Wilson' ,
        designation: 'Founder & CEO',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        img: 'img/theme/boy.png'
        },
        {
        name: 'Katty Wilson' ,
        designation: 'Founder & CEO',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        img: 'img/theme/girl.png'
        },
        {
        name: 'Katty Wilson' ,
        designation: 'Founder & CEO',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        img: 'img/theme/boy.png'
        },
        {
        name: 'Katty Wilson' ,
        designation: 'Founder & CEO',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        img: 'img/theme/girl.png'
        },
        {
        name: 'Katty Wilson' ,
        designation: 'Founder & CEO',
        text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,',
        img: 'img/theme/boy.png'
        }
      ]
    };
  },
};
</script>

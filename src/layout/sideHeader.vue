<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 500px;
}
</style>

<template>
<vue-custom-scrollbar class="scroll-container p-0">
  <div class="sideBar position-relative overflow-auto">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo h-100vh overflow-auto"
    >
      <div class="logoBox text-center py-3">
        <img src="img/theme/colorLogo.png" alt="Logo" class="mw-100" />
      </div>
      <div class="avatarBox text-center py-3">
        <img src="img/theme/girlMenu.png" alt="Avatar" class="mw-100" />
      </div>
      <div class="avatarInfo text-center">
        <h5 class="font-weight-900 text-theme-primary">Amanda Charles</h5>
        <p><i class="el-icon-location-outline"></i> Dubai, UAE</p>
      </div>
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title"><router-link class="text-dark" to="./home">Home</router-link></span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-medal"></i>
        <span slot="title"
          ><router-link class="text-dark" to="./certificate">Certificates</router-link></span
        >
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title"><router-link class="text-dark" to="./setting">Settings</router-link></span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-time"></i>
        <span slot="title"><router-link class="text-dark" to="./logs">Logs</router-link></span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-document"></i>
        <span slot="title"
          ><router-link class="text-dark" to="./term-and-condition">Term & Conditions</router-link></span
        >
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-folder-checked"></i>
        <span slot="title"
          ><router-link class="text-dark" to="./privacy-policy">Privacy Policy</router-link></span
        >
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-warning-outline"></i>
        <span slot="title"><router-link class="text-dark" to="./about-us">About Us</router-link></span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-phone-outline"></i>
        <span slot="title"><router-link class="text-dark" to="./contact-us">Contact Us</router-link></span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-chat-round"></i>
        <span slot="title"><router-link class="text-dark" to="./faqs">FAQs</router-link></span>
      </el-menu-item>
      <el-menu-item index="10">
        <i class="el-icon-switch-button"></i>
        <span slot="title"><router-link class="text-dark" to="./">Logout</router-link></span>
      </el-menu-item>
    </el-menu>
  </div>
  </vue-custom-scrollbar>
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
    name: 'sidebar',
    components: {
      vueCustomScrollbar
    }
};
</script>

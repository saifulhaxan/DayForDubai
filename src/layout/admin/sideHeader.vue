<style>
.el-menu-vertical-demo {
  width: 200px;
  min-height: 500px;
}
</style>

<template>
  <vue-custom-scrollbar class="scroll-container p-0 adminBar">
    <div class="sideBar position-relative overflow-auto">
      <el-menu default-active="2" class="el-menu-vertical-demo h-100vh overflow-auto">
        <div class="logoBox text-center py-3">
          <img src="img/theme/colorLogo.png" alt="Logo" class="mw-100" />
        </div>
        <div class="avatarBox text-center py-3">
          <figure>
            <img
              src="img/theme/ex-1.png"
              alt=""
              class="mw-100 rounded-50"
              width="50px"
              height="50px"
            />
          </figure>
        </div>
        <div class="avatarInfo text-center">
          <h5 class="font-weight-900 text-theme-primary">Methew Corp</h5>
          <p><i class="el-icon-location-outline"></i> Dubai, UAE</p>
        </div>
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./dashboard">Dashboard</router-link></span
          >
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-medal"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./volunteer"
              >Volunteers</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./organization"
              >Organizations
            </router-link></span
          >
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-time"></i>
          <span slot="title"
            ><router-link class="text-dark" to="events"
              >Event Management</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-document"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./attandence-management"
              >Attendence Magnagement</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-folder-checked"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./certificate-management"
              >Certificates Management</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-warning-outline"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./category-management"
              >Category Management</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-phone-outline"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./content-management"
              >Content Management</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-chat-round"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./report-management"
              >Report Issue</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-chat-round"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./admin-table">Admin</router-link></span
          >
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-chat-round"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./feedback">Feedbacks</router-link></span
          >
        </el-menu-item>
        <el-menu-item index="10">
          <i class="el-icon-switch-button"></i>
          <span slot="title"
            ><router-link class="text-dark" to="./login">Logout</router-link></span
          >
        </el-menu-item>
      </el-menu>
    </div>
  </vue-custom-scrollbar>
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  name: "sidebar",
  components: {
    vueCustomScrollbar,
  },
};
</script>

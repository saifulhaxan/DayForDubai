<style>
.main-sidebar {
  height: 100vh;
  position: fixed;
  border-radius: 15px;
  z-index: 9;
  top: 0;
  left: 20px;
}

.h-100vh {
  height: 100vh;
}
.navbar-main {
  height: 100vh;
}

@media (max-width: 999px) {
  .navbar-collapse {
    height: 100vh !important;
    width: 60%;
    left: -33px;
    position: fixed;
  }

  .navbar-main {
    position: absolute;
    right: 0;
    z-index: 9999;
    height: auto;
  }
.navbar-collapse.show {
    height: 100vh !important;
    background-color: #051441 !important;
    color: #fff !important;
    position: fixed;
    margin: 0 !important;
    width: 100%;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.95) !important;
}

    .toggle-menu-close {
        position: absolute;
        z-index: 99999;
        right: 50px;
        font-size: 22px;
        top: 10px;
        display: block !important;
    }
}
</style>
<template>
  <base-nav class="navbar-main" type="" effect="dark" expand>
    <div class="main-sidebar">
      <div class="justify-content-end py-3 text-center">
        <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
          <img src="img/theme/logo-white.png" alt="logo" />
        </router-link>
        <ul
          class="
            navbar-nav
            ml-lg-auto
            flex-column
            text-left
            justify-content-center
            mt-4
          "
        >
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="./dashboard"
              rel="noopener"
              data-toggle="tooltip"
              title="Dashboard"
            >
              <i class="fa fa-home"></i>
              <span class="nav-link-inner--text">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="./artist-management"
              rel="noopener"
              data-toggle="tooltip"
              title="Artist Management"
            >
              <i class="fa fa-folder"></i>
              <span class="nav-link-inner--text">Artist Management</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="./submission"
              rel="noopener"
              data-toggle="tooltip"
              title="Submissions"
            >
              <i class="fa fa-pie-chart" aria-hidden="true"></i>
              <span class="nav-link-inner--text">Submissions</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="./form-request-pending"
              rel="noopener"
              data-toggle="tooltip"
              title="Form Request Management"
            >
              <i class="fa fa-sliders rotateIcon" aria-hidden="true" ></i>
              <span class="nav-link-inner--text">Form Request Management</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="./category-management"
              rel="noopener"
              data-toggle="tooltip"
              title="Category Management"
            >
              <i class="fa fa-cog" aria-hidden="true"></i>
              <span class="nav-link-inner--text">Category Management</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </base-nav>
</template>

<script>
import BaseNav from "../components/BaseNav.vue";
import Vue from "vue";
export default {
  components: {
    BaseNav,
  },
  data() {
    return {
      buttonShow: false,
      switches: true
    };
  },
};
</script>

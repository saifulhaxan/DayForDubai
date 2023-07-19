<template>
  <header class="header-global">
    <div
      class="d-flex rounded-3 shadow justify-content-between p-3 w-100 align-items-center"
    >
      <div @click="hel()" class="menuButton">
        <a><i class="fa fa-bars" aria-hidden="true"></i></a>
      </div>
      <div class="profile-info">
        <router-link to="./inbox" class="position-relative px-2"
          ><i class="fa fa-envelope text-dark" aria-hidden="true"></i
        ></router-link>
        <router-link to="./notification" class="position-relative px-2"
          ><i class="fa fa-bell text-dark" aria-hidden="true"></i
          ><span class="count">3</span></router-link
        >
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" class="nav-link text-dark" data-toggle="dropdown" role="button">
            <img
              src="img/theme/ex-1.png"
              alt=""
              class="mw-100 rounded-50"
              width="35px"
              height="35px"
            />
            <span class="nav-link-inner--text pr-2 pl-3">Methew Corp</span>
            <i class="fa fa-chevron-down text-dark"></i>
          </a>
          <router-link class="dropdown-item" to="#">Profile</router-link>
          <!-- <router-link class="dropdown-item" to="./forgot">Forgot Password</router-link>
          <router-link class="dropdown-item" to="./verification-code">Verification Code</router-link>
          <router-link class="dropdown-item" to="./confirm-password">Confirm Password</router-link>
          <router-link class="dropdown-item" to="./dashboard">Dashboard</router-link>
          <router-link class="dropdown-item" to="./volunteer">Volunteer</router-link>
          <router-link class="dropdown-item" to="./add-volunteer">Add Volunteer</router-link>
          <router-link class="dropdown-item" to="./volunteer-detail">Volunteer Details</router-link>
          <router-link class="dropdown-item" to="./volunteer-events">Volunteer Events</router-link>
          <router-link class="dropdown-item" to="./volunteer-detail-id">Volunteer Detail Id</router-link>
          <router-link class="dropdown-item" to="./organization">Organization</router-link>
          <router-link class="dropdown-item" to="./add-organization">Add Organization</router-link>
          <router-link class="dropdown-item" to="./organization-details">Organization Details</router-link>
          <router-link class="dropdown-item" to="./organization-request">Organization Request</router-link>
          <router-link class="dropdown-item" to="./organization-request-details">Organization Request Details</router-link>
          <router-link class="dropdown-item" to="./events">Events</router-link>
          <router-link class="dropdown-item" to="./event-listning-detail">Events Listning</router-link> -->
        </base-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  methods: {
    hel() {
      var getMenu = document.querySelector(".el-menu-vertical-demo");
      var getMain = document.querySelector(".eventHome");
      var getAvatars = document.querySelector(".avatarInfo");
      if (
        getMenu.classList.contains("collapseMenu") ||
        getMain.classList.contains("collapseBody") ||
        getMain.classList.contains("collaspeFont")
      ) {
        getMenu.classList.remove("collapseMenu");
        getMain.classList.remove("collapseBody");
        getAvatars.classList.remove("collaspeFont");
      } else {
        getMenu.classList.add("collapseMenu");
        getMain.classList.add("collapseBody");
        getAvatars.classList.add("collaspeFont");
      }
    },
  },
};
</script>
<style></style>

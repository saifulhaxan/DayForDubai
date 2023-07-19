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
          <router-link to="./add-event" class="dropdown-item">Add Event</router-link>
          <router-link to="./certificate" class="dropdown-item">Certificate</router-link>
          <router-link to="./profile" class="dropdown-item">Profile</router-link>

          <!-- UAT LINK -->

          <!-- <router-link to="./volunteer-attendence" class="dropdown-item">Volunteer Attendence</router-link>
          <router-link to="./add-new-post" class="dropdown-item">Add Post</router-link>
          <router-link to="./change-password" class="dropdown-item">Change Password</router-link>
          <router-link to="./contact-us" class="dropdown-item">Contact Us</router-link>
          <router-link to="./about-us" class="dropdown-item">About Us</router-link>
          <router-link to="./term-and-condition" class="dropdown-item">Term & Conditions</router-link>
          <router-link to="./privacy-policy" class="dropdown-item">Privacy Polivy</router-link>
          <router-link to="./notification" class="dropdown-item">Notification</router-link>
          <router-link to="./faqs" class="dropdown-item">Faq's</router-link>
          <router-link to="./profile" class="dropdown-item">Profile</router-link>
          <router-link to="./edit-profile" class="dropdown-item">Edit Profile</router-link> -->
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

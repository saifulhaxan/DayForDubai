<template>
  <header class="header-global">
    <div
      class="d-flex rounded-3 shadow justify-content-between p-3 w-100 align-items-center"
    >
      <div @click="hel()" class="menuButton">
        <a><i class="fa fa-bars" aria-hidden="true"></i></a>
      </div>
      <div class="profile-info">
        <router-link to="./inbox" class="position-relative px-2"><i class="fa fa-envelope text-dark" aria-hidden="true"></i
        ></router-link>
        <router-link to="./notification" class="position-relative px-2"><i class="fa fa-bell text-dark" aria-hidden="true"></i
          ><span class="count">3</span></router-link>
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" class="nav-link text-dark" data-toggle="dropdown" role="button">
            <img src="img/theme/girl.png" alt="" class="mw-100 logoImage" />
            <span class="nav-link-inner--text pr-2">Amanda Charles</span>
            <i class="fa fa-chevron-down text-dark"></i>
          </a>
          <router-link to="./explore" class="dropdown-item">Explore</router-link>
          <router-link to="./myevent" class="dropdown-item">My Event</router-link>
          <router-link to="./invitation" class="dropdown-item">Invitation</router-link>
          <router-link to="./profile" class="dropdown-item">Profile</router-link>
           <router-link to="./login" class="dropdown-item">Login</router-link>
          <router-link to="./forgot" class="dropdown-item">Forgot</router-link> 
          <router-link to="./sign-up" class="dropdown-item">Sign Up</router-link>
          <router-link to="./home" class="dropdown-item">Home</router-link>
          <router-link to="./myevent" class="dropdown-item">My Event</router-link>
          <router-link to="./filter" class="dropdown-item">Filter</router-link>
          <router-link to="./invitation" class="dropdown-item">Invitation</router-link>
          <router-link to="./up-coming" class="dropdown-item">Up coming</router-link>
          <router-link to="./up-coming-requested" class="dropdown-item">Up Coming Requested</router-link>
          <router-link to="./up-coming-going" class="dropdown-item">Up Coming Going</router-link>
          <router-link to="./add-new-post" class="dropdown-item">Add Post</router-link>
          <router-link to="./event-check-in" class="dropdown-item">Event CheckIn</router-link>
          <router-link to="./checkOut" class="dropdown-item">Event CheckOut</router-link>
          <router-link to="./event-page-ended" class="dropdown-item">Ended Event</router-link>
          <router-link to="./event-ivitation" class="dropdown-item">Event Invitation</router-link>
          <router-link to="./organizer-profile" class="dropdown-item">Organizer Profile</router-link>
          <router-link to="./inbox" class="dropdown-item">Inbox</router-link>
          <router-link to="./logs" class="dropdown-item">Logs</router-link>
          <router-link to="./log-detail" class="dropdown-item">Log Detail</router-link>
          <router-link to="./setting" class="dropdown-item">Setting</router-link>
          <router-link to="./change-password" class="dropdown-item">Change Password</router-link>
          <router-link to="./contact-us" class="dropdown-item">Contact Us</router-link>
          <router-link to="./about-us" class="dropdown-item">About</router-link>
          <router-link to="./term-and-condition" class="dropdown-item">Terms and Condition</router-link>
          <router-link to="./privacy-policy" class="dropdown-item">Privacy Policy</router-link>
          <router-link to="./notification" class="dropdown-item">Notification</router-link>
          <router-link to="./faqs" class="dropdown-item">FAQ's</router-link>
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
  name: 'VolunteerHeader',
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

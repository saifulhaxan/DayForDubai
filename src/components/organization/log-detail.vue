<template>
  <div class="eventDetailSecion">
    <div class="cardBox" v-for="(item, index) in eventdata" :key="index">
      <div
        class="eventDetailBox"
        v-bind:style="{ backgroundImage: `url(${item.eventimage})` }"
      ></div>
    </div>
    <div class="eventDetail px-3 shadow">
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2">
          <h3 class="mb-0 font-weight-900">Society Event</h3>
          <p class="text-gray mb-0">Organizer Name</p>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="w-50">
          <p class="font-weight-400">
            <span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-calendar pr-2" aria-hidden="true"></i
              >October 15, 2021</span
            >
            <span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-clock pr-2" aria-hidden="true"></i
              >09:00am - 01:00pm</span
            >
            <span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-map-marker pr-2" aria-hidden="true"></i
              >463 Korey Inlet, Abu Dhabi Emirate United Arab Emirates, AE</span
            ><span class="pr-3 d-inline-block"
              ><i
                class="text-theme-primary fa fa-hourglass-half pr-2"
                aria-hidden="true"
              ></i
              >30 Total hour Required</span
            ><span class="pr-3 d-inline-block"
              ><i
                class="text-theme-primary fa fa-hand-spock-o pr-2"
                aria-hidden="true"
              ></i
              >200 Volunteers</span
            >
          </p>
        </div>
      </div>
      <div class="contentInfo border-top py-3 mt-3">
        <h3 class="font-weight-900">About Us</h3>
        <p class="text-light">
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which don't look even slightly believable. If you are going to use a passage of
          Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC, making it over
          2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words, consectetur, There
          are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which
          don't look even slightly believable. If you are going to use a passage of Lorem
          Ipsum,
        </p>
      </div>
      <div class="attendance">
          <h3 class="font-weight-900">Your Attendence</h3>
        <div class="d-flex justify-content-between border-bottom py-3 mt-3">
            <div class="w-100 d-flex">
                <p class="mb-0"><i class="fa fa-calendar text-theme-primary pr-3"></i></p>
                <p class="text-light mb-0 font-weight-600">October 15, 2021 <span class="d-block ">Monday</span></p>
            </div>
            <div class="d-flex w-100 gap-15">
                <div class="checkIn">
                    <h5 class="text-black font-weight-900">Check In</h5>
                    <p class="text-light font-weight-600">09:00am <span class="d-block">Total Hours:</span></p>
                </div>
                <div class="checkIn">
                    <h5 class="text-black font-weight-900">Check Out</h5>
                    <p class="text-light font-weight-600">09:00am <span class="d-block">Total Hours:</span></p>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between py-3">
            <div class="w-100 d-flex">
                <p class="mb-0"><i class="fa fa-calendar text-theme-primary pr-3"></i></p>
                <p class="text-light mb-0 font-weight-600">October 15, 2021 <span class="d-block ">Tuesday</span></p>
            </div>
            <div class="d-flex w-100 gap-15">
                <div class="checkIn">
                    <p class="text-light font-weight-600">09:00am <span class="d-block">Total Hours:</span></p>
                </div>
                <div class="checkIn">
                    <p class="text-light font-weight-600">09:00am <span class="d-block">Total Hours:</span></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "logDetails",
  data() {
    return {
      editOptions: false,
      suggestionBox: false,
      reviewBox: false,
      ratingStar: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      textarea: "",
      review: "",
      eventdata: [
        {
          eventimage: "/img/theme/banner.png",
          etitle: "Society Event",
          ecompany: "Organizer Name",
        },
      ],
    };
  },
  methods: {
    success() {
      this.$message({
        message: "Congrats, your review is successfuly submitted.",
        type: "success",
      });
    },
    suggestionMessage() {
      this.$message({
        message: "Congrats, your suggestion is successfuly submitted.",
        type: "success",
      });
    },
  },
};
</script>

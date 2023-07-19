<template>
  <div class="row explore">
    <div class="col-md-4" v-for="(item, index) in nearEvent" :key="index">
      <div class="eventBox shadow neadBy my-3">
        <div class="eventImage position-relative">
          <figure class="mb-0">
            <img :src="item.eventimage" alt="" class="mw-100 temWidth" />
          </figure>
          <div class="badges" v-if="tag">
            <a
              :href="item.btnLink"
              class="follow text-capitalize badge"
              v-bind:title="item.btntxt"
              :class="
                item.btntxt == 'Following'
                  ? 'bg-primary-color'
                  : item.btntxt == 'Requested'
                  ? 'bg-secondary-color'
                  : item.btntxt == 'Going'
                  ? 'bg-orange-color'
                  : item.btntxt == 'Ended'
                  ? 'bg-light-o-color'
                  : ''
              "
              >{{ item.btntxt }}</a
            >
          </div>
        </div>
        <div class="eventContent pl-2 px-3">
          <h3 class="mb-0 font-weight-900 mb-0 mt-3">{{ item.etitle }}</h3>
          <h6 class="text-gray mb-0 mb-3">{{ item.ecompany }}</h6>
          <p class="font-weight-400">
            <span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-calendar pr-2"></i
              >{{ item.edate }}</span
            ><span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-map-marker pr-2"></i
              >{{ item.location }}</span
            ><span class="pr-3 d-inline-block"
              ><i class="text-theme-primary fa fa-heartbeat pr-2"></i
              >{{ item.health }}</span
            >
          </p>
          <div
            class="d-flex volunteerIcons tabEvents align-items-center flex-column flex-md-row"
          >
            <div class="volunteersImage mb-3">
              <img
                src="img/theme/v1.png"
                alt="volunteer user"
                class="position-relative"
              />
              <img
                src="img/theme/v2.png"
                alt="volunteer user"
                class="position-relative"
              />
              <img
                src="img/theme/v3.png"
                alt="volunteer user"
                class="position-relative"
              />
              <img
                src="img/theme/v4.png"
                alt="volunteer user"
                class="position-relative"
              />
              <img
                src="img/theme/v5.png"
                alt="volunteer user"
                class="position-relative"
              />
              <img
                src="img/theme/v6.png"
                alt="volunteer user"
                class="position-relative"
              />
              <img
                src="img/theme/v7.png"
                alt="volunteer user"
                class="position-relative"
              />
              <img
                src="img/theme/v8.png"
                alt="volunteer user"
                class="position-relative"
              />
            </div>
            <p class="text-light font-weight-500 ml-0 ml-md-5">+200 Volunteers</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btnAll d-block m-auto py-4" v-if="btnShow">
      <p class="text-center">
        <a href="" class="submit-theme-primary btn-round d-block m-auto font-weight-600"
          >View More</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "evenTab",
  data() {
    return {
      tag: true,
      btnShow: false,
      nearEvent: [
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Society Event",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Going",
          btnLink: "./up-coming-going",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Requested",
          btnLink: "./up-coming-requested",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Going",
          btnLink: "./up-coming-going",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Going",
          btnLink: "./up-coming-going",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Requested",
          btnLink: "./up-coming-requested",
        },
        {
          eventimage: "/img/theme/ex-1.png",
          edate: "October 15, 2021",
          etitle: "Clean & Green Dubai",
          ecompany: "Organizer Name",
          location: "463 Korey Inlet, Abu Dhabi",
          health: "Health",
          time: "09:00am - 01:00pm",
          hour: "30 Total hour Required",
          person: "200 Volunteers",
          btntxt: "Going",
          btnLink: "./up-coming-going",
        },
      ],
    };
  },
  created() {
    if (this.$route.path == "/logs") {
      this.tag = false;
      this.btnShow = true;
    }
  },
};
</script>

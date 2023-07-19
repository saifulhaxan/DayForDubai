<template>
  <div>
    <div class="headBox mb-5" v-if="$route.path == './invitation'">
      <h2 class="font-weight-900" name="mainHead">{{ mainHead }}</h2>
    </div>
    <div class="explore px-3 shadow">
      <div class="scroll-containers">
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in nearEvent" :key="index">
            <div class="eventBox shadow neadBy my-3">
              <div class="eventImage position-relative">
                <figure class="mb-0">
                  <img :src="item.eventimage" alt="" class="mw-100 temWidth" />
                </figure>
              </div>
              <div class="eventContent pl-2">
                <h3 class="mb-0 font-weight-900"><router-link to="./event-ivitation" class="text-dark">{{ item.etitle }}</router-link></h3>
                <h6 class="text-gray mb-0 py-2">{{ item.ecompany }}</h6>
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
                  ><span class="pr-3 d-inline-block"
                    ><i class="text-theme-primary fa fa-clock pr-2"></i
                    >{{ item.time }}</span
                  ><span class="pr-3 d-inline-block"
                    ><i class="text-theme-primary fa fa-hourglass-half pr-2"></i
                    >{{ item.hour }}</span
                  ><span class="pr-3 d-inline-block"
                    ><i class="text-theme-primary fa fa-hand-spock-o pr-2"></i
                    >{{ item.person }}</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
export default {
  name: "eventHome",
  components: {
    vueCustomScrollbar,
  },
  props: {
    mainHead: {
      type: String,
    },
  },
  data() {
    return {
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
          btntxt: "Following",
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
          btntxt: "Following",
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
        },
      ],
    };
  },
};
</script>

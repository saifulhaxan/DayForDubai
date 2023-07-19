<template>
  <div class="volunteerDetails">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5">
        <h2 class="font-weight-900">
          <i class="el-icon-arrow-left"></i> Volunteer Details
        </h2>
      </div>
      <div class="volunteerDetail p-3 shadow">
        <div class="flex-column d-flex align-items-center">
          <div class="imageCra">
            <img src="img/theme/boy.png" alt="" class="mw-100" />
          </div>
          <div class="contentArea">
            <p class="text-theme-primary font-weight-900 mb-0">Casandra Wood</p>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <p class="mb-0 text-center">
              <a
                @click="editOptions = true"
                class="text-theme-primary font-weight-900 mb-0"
                >Send Invite</a
              >
            </p>
          </div>
        </div>
        <div class="volunteerTabs tabspost my-5">
          <el-tabs type="card" @tab-click="handleClick" v-model="activeName">
            <el-tab-pane label="Home">
              <div class="row">
                <div class="col-md-6 offset-md-6 m-auto">
                  <VolnteerForm
                    :information="gernelInformation"
                    :otherinformation="OtherInformation"
                  />
                </div>
              </div>
              <div class="row my-3">
                <div class="col-md-8 offset-md-4 m-auto">
                  <div class="titleBox d-flex my-2">
                    <h3 class="text-dark font-weight-900">Certificates:</h3>
                  </div>
                  <div class="cardstab">
                    <Cards />
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="Rate & Review">
              <Reviews />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="editOptions"
      width="500px"
      center
      class="border-round report-box"
    >
      <div class="popup-content-box">
        <h3 class="text-theme-secondary text-capatilize font-weight-900 mb-4">
          Send Invite
        </h3>
        <div class="searhBox px-3 mb-4">
          <el-input
            placeholder="Search Title"
            prefix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
        </div>
        <div class="reviewBox">
          <div
            class="inviteCard shadow d-flex align-items-center p-3 rounded-15 my-3 justify-content-around flex-wrap"
            v-for="(item, index) in inviteBox"
            :key="index"
          >
            <div class="inviteImage text-center">
              <figure>
                <img :src="item.image" alt="" class="mw-100" />
              </figure>
            </div>
            <div class="inviteContent">
              <div
                class="invitetitleBox d-flex justify-content-between align-items-center"
              >
                <h5 class="mb-0 text-dark font-weight-900 pr-5">{{ item.title }}</h5>
                <p class="mb-0"><a href="" class="btnTheme">Invite</a></p>
              </div>
              <div class="contentInvite">
                <p class="font-weight-400">
                  <span class="pr-3 d-block mb-1"
                    ><i
                      aria-hidden="true"
                      class="text-theme-primary fa fa-calendar pr-2"
                    ></i
                    >{{ item.date }}</span
                  >
                  <span class="pr-3 d-block mb-1"
                    ><i aria-hidden="true" class="text-theme-primary fa fa-clock pr-2"></i
                    >{{ item.time }}</span
                  >
                  <span class="pr-3 d-block mb-1"
                    ><i aria-hidden="true" class="text-theme-primary fa fa-heart pr-2"></i
                    >{{ item.category }}</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Reviews from "../../components/organization/tabReview.vue";
import Cards from "../../components/organization/certificate-cards.vue";
import VolnteerForm from "../../components/organization/volunteerForm.vue";
export default {
  name: "Volunteer Details",
  components: {
    Reviews,
    Cards,
    VolnteerForm,
  },
  data() {
    return {
      value: 4,
      editOptions: false,
      inviteBox: [
        {
          image: "img/theme/i1.png",
          title: "Jason Mark",
          date: "October 15, 2021",
          time: "09:00am - 01:00pm",
          category: "Health",
        },
        {
          image: "img/theme/i2.png",
          title: "Jason Parker",
          date: "October 15, 2021",
          time: "09:00am - 01:00pm",
          category: "Health",
        },
        {
          image: "img/theme/v8.png",
          title: "Jason Mark",
          date: "October 15, 2021",
          time: "09:00am - 01:00pm",
          category: "Health",
        },
      ],
      gernelInformation: [
        {
          title: "Email:",
          text: "Amandacharles@mail.com",
        },
        {
          title: "Date of Birth:",
          text: "02, 02, 2021",
        },
        {
          title: "Phone:",
          text: "+971-2342322",
        },
        {
          title: "User ID:",
          text: "DFD-78548",
        },
        {
          title: "Gender:",
          text: "Female",
        },
        {
          title: "Nationality:",
          text: "Dubai",
        },
        {
          title: "Emirates ID:",
          text: "4587694",
        },
        {
          title: "Expiry Date:",
          text: "4587694",
        },
        {
          title: "Total Volunteering Hours:",
          text: "4587694",
        },
      ],
      OtherInformation: [
        {
          title: "Emergency Contact:",
          text: "+971-23458769",
        },
        {
          title: "Emergency Contact Name:",
          text: "Smith",
        },
        {
          title: "Languages:",
          text: "English, Arabic",
        },
        {
          title: "Education:",
          text: "Bscs",
        },
        {
          title: "Skills:",
          text: "Abcd,Dhcj",
        },
        {
          title: "Job:",
          text: "Teacher",
        },
        {
          title: "Interest:",
          text: "Abcd,Dhcj",
        },
        {
          title: "Any Server Diseases:",
          text: "Teacher",
        },
      ],
      search: "",
    };
  },
  watch: {
    search(val, oldval) {
      if (val.length >= 2) {
        val = val.toLowerCase();
        this.inviteBox = this.inviteBox.filter((item) => {
          return item.title.toLowerCase().includes(val);
        });
      } else {
        this.inviteBox = [
          {
            image: "img/theme/i1.png",
            title: "Jason Mark",
            date: "October 15, 2021",
            time: "09:00am - 01:00pm",
            category: "Health",
          },
          {
            image: "img/theme/i2.png",
            title: "Jason Parker",
            date: "October 15, 2021",
            time: "09:00am - 01:00pm",
            category: "Health",
          },
          {
            image: "img/theme/v8.png",
            title: "Jason Mark",
            date: "October 15, 2021",
            time: "09:00am - 01:00pm",
            category: "Health",
          },
        ];
      }
    },
  },
};
</script>

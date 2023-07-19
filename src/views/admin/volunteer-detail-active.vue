<template>
  <div class="awardCertificatePage container-fluid">
    <div class="eventsecton ml-4">
      <div
        class="headBox pt-5 mb-5 d-flex justify-content-between align-items-center flex-wrap"
      >
        <h2 class="font-weight-900 pt-0">
          <router-link to="./profile" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Volunteer's Detail</router-link
          >
        </h2>
        <p class="mb-0">
          <router-link to="volunteer-events" class="btn-round btn-theme-primary px-5"
            >Events & Other Details</router-link
          >
        </p>
      </div>
      <div class="row shadow profile p-3 mb-4">
        <!-- information section -->
        <div class="row shadow p-2 m-1 mb-5 w-100">
          <div class="col-md-4">
            <div class="profileArea text-center pt-5">
              <div class="cardImage">
                <figure>
                  <img
                    src="img/theme/girlMenu.png"
                    alt=""
                    class="mw-100"
                    width="100px"
                    height="100px"
                  />
                </figure>
              </div>
              <div class="contentCard">
                <h5 class="text-theme-primary mb-0 font-weight-900">Casandra Wood</h5>
                <el-rate
                  v-model="value"
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
            </div>
          </div>
          <div class="profileBox col-md-8">
            <VDetails
              :information="gernelInformation"
              :otherinformation="OtherInformation"
              :referelUsed="referelUsedData"
            />
          </div>
        </div>
        <!-- Review Section -->
        <div class="row shadow p-2 py-4 m-1 w-100 mb-5">
          <div class="col-md-12 text-center">
            <h5 class="font-weight-900 text-dark">Rating & Review</h5>
          </div>
          <div class="col-md-6" v-for="(item, index) in ReviewData" :key="index">
            <ReviewDetail :Review="item" />
          </div>
          <div class="col-md-12 text-center my-4">
            <p class="mb-0">
              <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
                >View More</router-link
              >
            </p>
          </div>
        </div>
        <!-- certificate Section -->
        <div class="row shadow p-2 py-4 m-1 w-100">
          <div class="col-md-12 text-center mb-4">
            <h5 class="font-weight-900 text-dark">Certificates</h5>
          </div>
          <div
            class="col-md-3 text-center"
            v-for="(item, index) in certificateData"
            :key="index"
          >
            <div class="certificate-box">
              <figure>
                <img :src="item" alt="" class="mw-100" />
              </figure>
            </div>
          </div>
          <div class="col-md-12 text-center my-4">
            <p class="mb-0">
              <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
                >View More</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VDetails from "../../components/admin/Vdetails.vue";
import ReviewDetail from "../../components/admin/reviewBox.vue";
export default {
  name: "Profile",
  data() {
    return {
      value: 5,
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
          title: "Interest:Interest:",
          text: "Abcd,Dhcj",
        },
        {
          title: "Any Server Diseases:",
          text: "Teacher",
        },
        {
          title: "Referal Link:",
          text: "q=link&rlz=1C1GCEU_enPK968PK968&oq=link&aq",
        },
      ],
      ReviewData: [
        {
          img: "img/theme/boy.png",
          title: "James Corp",
          description:
            "or randomised words which don,t look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          img: "img/theme/boy.png",
          title: "James Corp",
          description:
            "or randomised words which don,t look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          img: "img/theme/boy.png",
          title: "James Corp",
          description:
            "or randomised words which don,t look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          img: "img/theme/boy.png",
          title: "James Corp",
          description:
            "or randomised words which don,t look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
      ],
      certificateData: [
        "img/theme/c1.png",
        "img/theme/c2.png",
        "img/theme/c3.png",
        "img/theme/c4.png",
      ],
      referelUsedData: [
        {
          title: "Email:",
          text: "Amandacharles@mail.com",
        },
        {
          title: "User Name:",
          text: "Amanda charles",
        },
        {
          title: "User ID:",
          text: "DFD _74362",
        },
        {
          title: "Link:",
          text: "q=link&rlz=1C1GCEU_enPK968PK968&oq=link&aq",
        },
      ],
    };
  },
  components: {
    VDetails,
    ReviewDetail,
  },
};
</script>

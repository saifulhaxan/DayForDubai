<template>
  <div class="eventListning container-fluid">
    <div class="row py-5">
      <div class="col-md-12">
        <h3 class="font-weight-900 pt-0">
          <router-link to="report-management" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Suggestion Report Detail</router-link
          >
        </h3>
      </div>
    </div>
    <div class="eventsectionLive pb-5">
      <eventList :volunteerList="Volunteerdata" showBox="d-none" />
      <div class="row">
        <div
          class="col-md-12 py-4 mb-5 border-top"
          v-for="(item, index) in ReviewData"
          :key="index"
        >
          <ReviewDetail :Review="item" />
        </div>
        <div class="profileBox text-center col-md-2 mx-auto">
          <div class="profileArea">
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
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
          </div>
        </div>
        <div class="col-md-10">
          <P class="MB-0"
            >There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you are going
            to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,</P
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import eventList from "../../components/admin/eventListing.vue";
import ReviewDetail from "../../components/admin/reviewBox.vue";
export default {
  name: "SuggestionReportDetail",
  components: {
    eventList,
    ReviewDetail,
  },
  data() {
    return {
      value: 4.5,
      ReviewData: [
        {
          img: "img/theme/boy.png",
          title: "James Corp",
          description:
            "or randomised words which don,t look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
      ],
    };
  },
};
</script>

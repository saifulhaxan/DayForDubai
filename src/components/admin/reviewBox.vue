<template>
  <div class="review-box d-flex my-4 gap-15 flex-wrap flex-md-nowrap">
    <figure class="mb-0">
      <img :src="Review.img" alt="" class="mw-100" :class="$route.path == '/admin/past-events' ? '' : 'imageCircle'"/>
    </figure>
    <div class="review-content shadow p-4 rounded-15">
      <div class="d-flex flex-wrap" :class="$route.path == '/admin/past-events' ? 'flex-column' : 'justify-content-between'">
        <p class="text-dark mb-0 font-weight-600">{{Review.title}}</p>
        <div v-if="$route.path != '/admin/comment-report-detail'">
          <el-rate v-model="value" show-score text-color="#ff9900" score-template="{value}">
        </el-rate>
        </div>
      </div>
      <div class="review-detail">
          <p class="mb-0">{{Review.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReviewBox",
  props: {
    Review: {
      type: Object,
    },
  },
  data(){
      return {
          value: 4.5
      }
  }
};
</script>

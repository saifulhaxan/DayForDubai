<template>
  <div class="reviewBox">
    <div
      class="d-flex px-3 flex-column my-4"
      v-for="(item, index) in reviews"
      :key="index"
    >
      <div class="commentitem d-flex align-items-start gap-15">
        <img :src="item.image" alt="" class="mw-100" />
        <div class="commentbox shadow p-3 rounded-15">
          <h4 class="font-weight-900">{{ item.title }}</h4>
          <div class="rateStars">
            <el-rate
              v-model="ratingStar"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
          </div>
          <p class="mb-0">
            {{ item.desciption }}
          </p>
        </div>
      </div>
    </div>
    <div class="reviewBtn my-4">
      <p class="mb-0">
        <a
          class="el-button submit-theme-primary btn-round d-block m-auto font-weight-600 el-button--button is-plain"
          >View More</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewBox",
  data() {
    return {
      ratingStar: 3.5,
      reviews: [
        {
          image: "img/theme/v8.png",
          title: "Jason Mark",
          desciption:
            "or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v8.png",
          title: "Kate Austen",
          desciption:
            "or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v8.png",
          title: "Somia Mark",
          desciption:
            "or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v8.png",
          title: "Jason Mark",
          desciption:
            "or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="reviewBox">
    <div class="d-flex w-100 px-3 flex-column my-4" v-for="(item, index) in commentArea" :key="index">
      <div
        class="
          commentitem
          d-flex
          w-100
          align-items-start
          gap-15
          justify-content-between
          flex-wrap
        "
      >
        <div class="reviewImage order-1">
          <img :src="item.image" alt="" class="mw-100 w-70px" />
        </div>
        <div
          class="commentbox col-md-9 shadow p-3 rounded-15 order-3 order-md-2"
        >
          <p class="mb-0">
            {{item.comment}}
          </p>
        </div>
        <div class="rateStars order-md-3 order-2">
          <el-rate v-model="ratingStar"></el-rate>
        </div>
      </div>
    </div>
    <div class="reviewBtn my-4">
      <p class="mb-0">
        <a
          class="
            el-button
            submit-theme-primary
            btn-round
            d-block
            m-auto
            font-weight-600
            el-button--button
            is-plain
          "
          >Submit</a
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
      commentArea: [
        {
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
        {
          image: "img/theme/v8.png",
          comment:
            "or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,",
        },
      ],
    };
  },
};
</script>

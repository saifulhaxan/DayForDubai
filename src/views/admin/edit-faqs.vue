<template>
  <section class="volunteer mx-md-3">
    <div class="container-fluid">
      <div class="row my-4">
        <div class="col-md-8">
          <h3 class="font-weight-900 text-dark mb-0">FAQ's</h3>
        </div>
        <div class="col-md-4">
          <div class="d-flex align-items-center gap-15 flex-wrap justify-content-md-end">
            <div class="editOption pr-3">
              <p class="mb-0">
                <router-link
                  to="/edit-faqs"
                  class="bg-light text-dark btn-round w-btn d-block m-auto font-weight-600"
                  >Update</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="contentManagment my-5 px-3 rounded-30 py-5 shadow">
        <div class="row mb-4">
          <div class="col-md-8 mx-auto">
            <el-collapse v-model="activeNames">
              <div
                class="collapseBox position-relative"
                v-for="(item, index) in faqs"
                :key="index"
              >
                <a class="position-absolute trashBtn" @click="deleteBox()"
                  ><i class="fa fa-trash-o"></i
                ></a>
                <el-collapse-item :title="item.title" :name="index">
                  <p>
                    {{ item.discription }}
                  </p>
                </el-collapse-item>
              </div>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EditFaq's",
  data() {
    return {
      activeNames: ["1"],
      faqs: [
        {
          title: "Contrary to popular belief",
          discription:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,looked up one of the more obscure Latin words, consectetur...",
        },
        {
          title: "Contrary to popular belief",
          discription:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,looked up one of the more obscure Latin words, consectetur.",
        },
        {
          title: "Contrary to popular belief",
          discription:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,looked up one of the more obscure Latin words, consectetur..",
        },
        {
          title: "Contrary to popular belief",
          discription:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,looked up one of the more obscure Latin words, consectetur.",
        },
        {
          title: "Contrary to popular belief",
          discription:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,looked up one of the more obscure Latin words, consectetur...",
        },
      ],
    };
  },
  methods: {
    deleteBox(index) {
      this.faqs.splice(index, 1);
    },
  },
};
</script>

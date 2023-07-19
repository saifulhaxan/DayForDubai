<template>
  <div class="suggesTab">
    <div
      class="d-flex w-100 px-0 px-md-3 flex-wrap"
      v-for="(item, index) in suggestionData"
      :key="index"
    >
      <div class="commentitem d-flex w-100 gap-15 my-4 flex-wrap flex-lg-nowrap">
        <div class="commentImage">
          <img :src="item.image" alt="" class="mw-100" />
        </div>
        <div class="suggestionArea commentbox shadow p-3 rounded-15">
          <div class="d-flex justify-content-between align-items-center flex-wrap">
            <div class="titleBox">
              <h5 class="text-dark font-weight-900 mb-0">{{ item.title }}</h5>
              <p class="text-light text-left mb-0">{{ item.publishDate }}</p>
            </div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-more fa-2x"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-delete"
                  ><a @click="deletBox(index)">Delete</a></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="w-100">
            <p class="mb-0">{{ item.comment }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="buttonBox text-center mt-4">
      <p><a href="" class="btn-theme-primary btn-round border-0 mr-2 px-4">View More</a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SuggestTab",
  props: {
    suggestionData: {
      type: Array,
    },
  },
  methods: {
    deletBox(index) {
      this.suggestionData.splice(index, 1);
    },
  },
};
</script>

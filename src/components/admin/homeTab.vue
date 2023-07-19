<template>
  <div class="homeTab">
    <div class="postImagesBox py-4" v-for="(item, index) in homeTabContent" :key="index" :class="index == homeTabContent.length - 1 ? '': 'border-bottom'">
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2 d-flex align-items-center gap-15">
          <div class="autthorImage">
            <figure class="mb-0">
              <img :src="item.image" alt="Author Image" class="mw-100" />
            </figure>
          </div>
          <div class="authorContent">
            <h4 class="mb-0 font-weight-900">{{item.title}}</h4>
            <p class="text-gray mb-0">{{item.publishDate}}</p>
          </div>
        </div>
        <div class="editOption pr-3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-delete"><a @click="deleteBox(index)">Delete</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="contentimage">
        <div class="imageCollapse">
          <img alt="Gallery Image" class="mw-100 mr-3" v-for="(gallery, i) in item.postImages" :key="i" :src="gallery" />
        </div>
      </div>
      <div class="contentBox">
        <p class="text-light">
         {{item.content}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeTab",
  props: {
      homeTabContent: {
          type: Array
      }
  },
  methods: {
      deleteBox(index) {
          this.homeTabContent.splice(index, 1)
      }
  }
};
</script>

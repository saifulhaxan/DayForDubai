<template>
    <div class="addPost">
      <div class="addPost secton mx-4 d-flex align-items-center justify-content-between my-5">
        <div class="headBoxs">
          <h2 class="font-weight-900 mb-0"><i class="el-icon-arrow-left"></i> Create Post</h2>
        </div>
        <div class="postBtn">
          <p class="mb-0"><a href="" class="btn-round btn-theme-primary px-5">Post</a></p>
        </div>  
      </div>
      <div class="mainSecree mx-md-4 mx-2">
        <upComing/>  
      </div>
    </div>
</template>
<script>
import upComing from "../components/creatPost.vue";
export default {
  name: "AddPost",
  components: {
    upComing,
  },
};
</script>

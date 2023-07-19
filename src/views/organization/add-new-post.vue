<template>
    <div class="addPost">
      <div class="addPost secton mx-4 d-flex align-items-center justify-content-between my-5">
        <div class="headBoxs">
          <h2 class="font-weight-900 mb-0"><router-link to="./up-coming" class="text-dark"><i class="el-icon-arrow-left"></i></router-link>Create Post</h2>
        </div>
        <div class="postBtn">
          <p class="mb-0"><router-link to="./volunteer-attendence" class="btn-round btn-theme-primary px-5">Post</router-link></p>
        </div>  
      </div>
      <div class="mainSecree mx-4">
        <CreatePost/>  
      </div>
    </div>
</template>
<script>
import CreatePost from "../../components/organization/creatPost.vue";
export default {
  name: "AddPost",
  components: {
    CreatePost,
  },
};
</script>

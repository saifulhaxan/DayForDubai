<template>
  <div class="eventDetailSecion organization">
    <div class="d-flex align-items-center gap-15 p-3 shadow rounded-15">
      <div class="imageCard">
        <figure class="mb-0">
          <img
                src="img/theme/ex-1.png"
                alt=""
                class="mw-100 rounded-50"
                width="60px"
                height="60px"
              />
        </figure>
      </div>
      <div class="searchcontent position-relative w-100">
        <h4 class="mb-0 text-light">Methew Corp</h4>
      </div>
    </div>
    <div class="shadow p-3 rounded-15 my-4 uploadpic">
      <vue-custom-scrollbar class="scroll-container">
      <textarea name="" id="" cols="15" rows="10" class="w-100 t-mh border-0"></textarea></vue-custom-scrollbar>
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false"
        :multiple="true"
        class="boxUpload" :class="uploadBox ? 'showBox' : ''"
      >
        <div class="uploadBtn">
          <i slot="default" class="el-icon-plus">
            <span class="d-block">Add</span><span class="d-block">Images / Video</span></i
          >
          <p class="mb-0 font-weight-bolder"></p>
        </div>
        <div slot="file" slot-scope="{ file }" :id="file.uid">
          <video
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            v-if="file.raw.type == 'video/mp4'"
          ></video>
          <img class="el-upload-list__item-thumbnail" :src="file.url" v-else />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" class="text-center">
        <video
          width="100%"
          :src="dialogImageUrl"
          height="400px"
          alt=""
          v-if="dialogImage"
        ></video>
        <img
          width="100%"
          :src="dialogImageUrl"
          height="400px"
          class="mw-100"
          alt=""
          v-else
        />
      </el-dialog>
    </div>
    <div class="shadow p-3 rounded-15 my-4 d-flex justify-content-between" @click="uploadShow">
      <div class="postIcon d-flex gap-15 align-content-center">
        <i class="fa fa-smile-o text-light"></i>
        <p class="mb-0">Add a Post</p>
      </div>
      <div class="postIcon d-flex gap-15 align-content-center">
        <i class="el-icon-picture-outline text-light"></i>
        <i class="el-icon-video-camera text-light"></i>
      </div>
    </div>
  </div>
</template>
<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  name: "createPost",
  components: {
    VueUploadMultipleImage,
    vueCustomScrollbar,
  },
  props: {
    buttonText: {
      type: String,
      description: "Button Text",
    },
    linkButton: {
      type: String,
      description: "click Action",
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      uploadImg: "",
      uploadVid: "",
      dialogImage: false,
      uploadBox: false
    };
  },
  methods: {
    handleRemove(file) {
      var ab = document.getElementById(file.uid).parentElement;
      ab.parentNode.removeChild(ab);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogImage = file.raw.type == "video/mp4" ? true : false;
      this.dialogVisible = true;
    },
    uploadShow() {
      this.uploadBox = !this.uploadBox;
    }
  },
};
</script>

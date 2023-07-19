<template>
  <div>
    <div class="postBox py-4">
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2 d-flex align-items-center gap-15">
          <div class="autthorImage">
            <figure class="mb-0">
              <img src="img/theme/v1.png" alt="Author Image" class="mw-100" />
            </figure>
          </div>
          <div class="authorContent">
            <h4 class="mb-0 font-weight-900">Organizer Name</h4>
            <p class="text-gray mb-0">Posted on 12:20am</p>
          </div>
        </div>
        <div class="editOption pr-3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline">Edit</el-dropdown-item>
              <el-dropdown-item icon="el-icon-delete">Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="contentBox">
        <p class="text-light">
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which don't look even slightly believable. If you are going to use a passage of
          Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC, making it over
          2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia,
        </p>
      </div>
    </div>
    <div class="commentArea" style="display: none" :class="dataShow">
      <div
        class="d-flex justify-content-between align-items-center border-top border-bottom py-3"
      >
        <div class="commentSection">
          <p class="mb-0">
            <a href="" class="text-light"
              ><i class="pr-2 fa fa-comment-o" aria-hidden="true"></i>5.0k
            </a>
          </p>
        </div>
        <div class="vewBox">
          <p class="mb-0">
            <a href="" class="text-light"
              ><i class="pr-2 fa fa-eye" aria-hidden="true"></i>1.2k
            </a>
          </p>
        </div>
        <div class="shareBox">
          <p class="mb-0">
            <a href="" class="text-light"
              ><i class="pr-2 fa fa-share" aria-hidden="true"></i>Share
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="postImagesBox py-4 border-bottom">
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2 d-flex align-items-center gap-15">
          <div class="autthorImage">
            <figure class="mb-0">
              <img src="img/theme/v1.png" alt="Author Image" class="mw-100" />
            </figure>
          </div>
          <div class="authorContent">
            <h4 class="mb-0 font-weight-900">Organizer Name</h4>
            <p class="text-gray mb-0">Posted on 12:20am</p>
          </div>
        </div>
        <div class="editOption pr-3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline">Edit</el-dropdown-item>
              <el-dropdown-item icon="el-icon-delete">Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="contentimage">
        <div class="imageCollapse">
          <img src="img/theme/j1.png" alt="Gallery Image" class="mw-100 mr-3" />
          <img src="img/theme/j2.png" alt="Gallery Image" class="mw-100 mr-3" />
          <img src="img/theme/j3.png" alt="Gallery Image" class="mw-100 mr-3" />
          <img src="img/theme/j4.png" alt="Gallery Image" class="mw-100 mr-3" />
        </div>
      </div>
    </div>
    <div class="postBox py-4 border-bottom">
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2 d-flex align-items-center gap-15">
          <div class="autthorImage">
            <figure class="mb-0">
              <img src="img/theme/v1.png" alt="Author Image" class="mw-100" />
            </figure>
          </div>
          <div class="authorContent">
            <h4 class="mb-0 font-weight-900">Organizer Name</h4>
            <p class="text-gray mb-0">Posted on 12:20am</p>
          </div>
        </div>
        <div class="editOption pr-3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline">Edit</el-dropdown-item>
              <el-dropdown-item icon="el-icon-delete">Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="contentBox">
        <p class="text-light">
          There are many variations of passages of Lorem Ipsum available, but the majority
          have suffered alteration in some form, by injected humour, or randomised words
          which don't look even slightly believable. If you are going to use a passage of
          Lorem Ipsum, Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC, making it over
          2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia,
        </p>
      </div>
    </div>
    <div class="commentArea" style="display: none" :class="dataShow">
      <div
        class="d-flex justify-content-between align-items-center border-top border-bottom py-3"
      >
        <div class="commentSection">
          <p class="mb-0">
            <a href="" class="text-light"
              ><i class="pr-2 fa fa-comment-o" aria-hidden="true"></i>5.0k
            </a>
          </p>
        </div>
        <div class="vewBox">
          <p class="mb-0">
            <a href="" class="text-light"
              ><i class="pr-2 fa fa-eye" aria-hidden="true"></i>1.2k
            </a>
          </p>
        </div>
        <div class="shareBox">
          <p class="mb-0">
            <a href="" class="text-light"
              ><i class="pr-2 fa fa-share" aria-hidden="true"></i>Share
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="postImagesBox py-4">
      <div class="d-flex justify-content-between py-3">
        <div class="eventContent pl-2 d-flex align-items-center gap-15">
          <div class="autthorImage">
            <figure class="mb-0">
              <img src="img/theme/v1.png" alt="Author Image" class="mw-100" />
            </figure>
          </div>
          <div class="authorContent">
            <h4 class="mb-0 font-weight-900">Organizer Name</h4>
            <p class="text-gray mb-0">Posted on 12:20am</p>
          </div>
        </div>
        <div class="editOption pr-3">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="el-icon-more fa-2x"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-edit-outline">Edit</el-dropdown-item>
              <el-dropdown-item icon="el-icon-delete">Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="contentimage">
        <div class="imageCollapse">
          <img src="img/theme/j1.png" alt="Gallery Image" class="mw-100 mr-3" />
          <img src="img/theme/j2.png" alt="Gallery Image" class="mw-100 mr-3" />
          <img src="img/theme/j3.png" alt="Gallery Image" class="mw-100 mr-3" />
          <img src="img/theme/j4.png" alt="Gallery Image" class="mw-100 mr-3" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
export default {
  name: "postTab",
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
  },
  props: {
    dataShow: {
      type: String,
      description: "comment box show",
    },
  },
};
</script>

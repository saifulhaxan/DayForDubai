<template>
  <div>
    <el-row class="mainLogin">
      <el-col :span="24">
        <div class="d-flex justify-content-center align-items-center h-100vh flex-column">
          <div class="logoBox mb-4">
            <img src="img/theme/logo.png" alt="Logo Dubai" class="mw-100" />
          </div>
          <div class="volunteerBtn mt-5">
            <p><a href="./login" class="btn-theme-primary btn-round d-block">As a Volunteer</a></p>
            <p><a href="./organization/login" class="btn-theme-secondary btn-round d-block">As a Organization</a></p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    name: 'mainScreen'
}
</script>

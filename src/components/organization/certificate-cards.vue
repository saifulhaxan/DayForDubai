<template>
  <div class="awardCertificate">
    <div class="templateBoxs logsDeatail">
      <el-form action="">
        <el-form-item class="textareaStyle">
          <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">
              <div class="imageCard">
                <img :src="city.image" alt="" />
              </div>
              <div class="contentBox">
                <h4 class="mb-0">{{ city.name }}</h4>
                <p class="mb-0">{{ city.sub }}</p>
                <p>
                  <a class="btnCertificate">{{ city.btntxt }}</a>
                </p>
              </div>
            </el-checkbox-button>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button
            type="button"
            class="submit-theme-primary btn-round d-block m-auto font-weight-600"
            :plain="true"
            @click="(Completed = true), (editOptions = false)"
            >View More</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
const certificate = [
  {
    image: "img/theme/cer1.png",
    name: "Social Event",
    sub: "Best Work",
    btntxt: "Award Certificate",
  },
  {
    image: "img/theme/cer1.png",
    name: "Social Event",
    sub: "Best Work",
    btntxt: "Award Certificate",
  },
  {
    image: "img/theme/cer1.png",
    name: "Social Event",
    sub: "Best Work",
    btntxt: "Award Certificate",
  },
  {
    image: "img/theme/cer1.png",
    name: "Social Event",
    sub: "Best Work",
    btntxt: "Award Certificate",
  },
];
export default {
  name: "Certificate Card",
  data() {
    return {
      checkboxGroup1: [],
      cities: certificate,
    };
  },
};
</script>

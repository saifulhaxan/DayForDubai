<template>
  <div class="awardCertificatePage">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5 d-flex justify-content-between align-items-center">
        <h2 class="font-weight-900"><i class="el-icon-arrow-left"></i> Profile</h2>
        <p class="mb-0">
          <router-link to="./edit-profile" class="btn-round btn-theme-primary px-5"
            >Edit</router-link
          >
        </p>
      </div>
      <div class="row shadow profile p-3">
        <div class="profileBox text-center col-md-6 mx-auto">
          <div class="profileArea">
            <div class="cardImage">
              <figure>
                <img
                  src="img/theme/ex-1.png"
                  alt=""
                  class="mw-100 rounded-100"
                  width="150px"
                  height="150px"
                />
              </figure>
            </div>
            <div class="contentCard">
              <h5 class="text-theme-primary mb-0 font-weight-900">Methew Corp</h5>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
          </div>
          <form action="">
            <div class="row text-left my-4 pl-0 pl-md-5">
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Email:</label>
                <input
                  type="email"
                  value="Casandrawood@email.com"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Organization Name:</label>
                <input
                  type="email"
                  value="Methew Corp"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Landline:</label>
                <input
                  type="tel"
                  value="+971-73473583"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Phone No:</label>
                <input
                  type="tel"
                  value="+971-73473583"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Authorization:</label>
                <figure>
                  <img src="img/theme/cer1.png" alt="" class="mw-100" />
                </figure>
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Type:</label>
                <select
                  name="category"
                  id=""
                  class="border-0 bg-transparent d-block w-100 ap-none"
                  disabled
                >
                  <option value="Health" selected>Health</option>
                  <option value="Health">Health</option>
                  <option value="Health">Health</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      value: 4.4,
    };
  },
};
</script>

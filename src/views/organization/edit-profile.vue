<template>
  <div class="awardCertificatePage">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5 d-flex justify-content-between align-items-center">
        <h2 class="font-weight-900">
          <router-link to="./profile" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Profile</router-link
          >
        </h2>
        <p class="mb-0">
          <router-link to="./profile" class="btn-round btn-theme-primary px-5"
            >Update</router-link
          >
        </p>
      </div>
      <div class="row shadow profile p-3">
        <div class="profileBox text-center col-md-6 mx-auto">
          <div class="profileArea">
            <div class="cardImage postion-relative d-flex justify-content-center">
              <figure>
                <img
                  src="img/theme/ex-1.png"
                  alt=""
                  class="mw-100 rounded-100"
                  width="150px"
                  height="150px"
                />
                <label for="upload">
                  <a class="iconStyle"><i class="fa fa-edit"></i></a>
                  <input type="file" id="upload" class="d-none">
                </label>
              </figure>
            </div>
            <div class="contentCard">
              <h5 class="text-theme-primary mb-0 font-weight-900">Methew Corp</h5>
              <el-rate
                v-model="value"
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
                <label for="" class="font-weight-900 text-dark">Organization Name:</label>
                <input
                  type="email"
                  value="Methew Corp"
                  class="border rounded-15 px-3 bg-transparent d-block w-100"
                />
              </div>

              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Organizer Name:</label>
                <input
                  type="email"
                  value="Albert Willsom"
                  class="border rounded-15 px-3 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Type:</label>
                <select
                  name="category"
                  id=""
                  class="border rounded-15 px-3 bg-transparent d-block w-100 ap-none"
                >
                  <option value="Health" selected>Health</option>
                  <option value="Health">Health</option>
                  <option value="Health">Health</option>
                </select>
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Landline:</label>
                <input
                  type="tel"
                  value="+971-73473583"
                  class="border rounded-15 px-3 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-12 py-2">
                <label for="" class="font-weight-900 text-dark">Email:</label>
                <input
                  type="email"
                  value="Casandrawood@email.com"
                  class="border rounded-15 px-3 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-12 py-2">
                <label for="" class="font-weight-900 text-dark">Phone No:</label>
                <input
                  type="tel"
                  value="+971-73473583"
                  class="border rounded-15 px-3 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Authorization:</label>
                <figure>
                  <img src="img/theme/cer1.png" alt="" class="mw-100" />
                </figure>
              </div>
              <div class="col-md-6 py-2 align-items-center d-flex">
                <p class="mb-0">
                 <label for="Upload" class="uploadBtns bg-secondary text-dark btn-theme-primary px-2 d-inline-block px-5 py-2 rounded-30 font-weight-400">
                   Upload
                    <input id="Upload" type="file" class="d-none"
                    >
                 </label>
                </p>
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
  name: "EditProfile",
  data() {
    return {
      value: 3.5,
    };
  },
};
</script>

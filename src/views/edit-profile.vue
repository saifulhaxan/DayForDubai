<template>
  <div class="awardCertificatePage">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5">
        <h2 class="font-weight-900">
          <router-link to="./profile" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Edit Profile</router-link
          >
        </h2>
      </div>
      <div class="row shadow profile p-3">
        <div class="profileBox text-center col-md-6 mx-auto">
          <div class="profileArea">
            <div class="cardImage">
              <figure>
                <img
                  src="img/theme/girlMenu.png"
                  alt=""
                  class="mw-100"
                  width="100px"
                  height="100px"
                />
              </figure>
            </div>
            <div class="contentCard">
              <h5 class="text-theme-primary mb-0 font-weight-900">Casandra Wood</h5>
              <el-rate
                v-model="value"
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
          </div>
          <form action="./profile">
            <div class="row text-left my-4 pl-0 pl-md-5">
              <div class="col-md-12">
                <h5 class="font-weight-900">Basic Information:</h5>
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Email:</label>
                <input
                  type="email"
                  value="Casandrawood@email.com"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Date Of Birth:</label>
                <input
                  type="date"
                  value="10-06-2021"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Phone:</label>
                <input
                  type="tel"
                  value="+971-73473583"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">User ID</label>
                <input
                  type="num"
                  value="DFD-7854’"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Gender:</label>
                <input
                  type="text"
                  value="Female"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Nationality:</label>
                <input
                  type="text"
                  value="Dubai"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
            </div>
            <div class="row text-left my-4 pl-0 pl-md-5">
              <div class="col-md-12">
                <h5 class="font-weight-900">Other Infromations:</h5>
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Emergency Contact:</label>
                <input
                  type="tel"
                  value="+971-78945548"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark"
                  >Emergency Contact Name:</label
                >
                <input
                  type="name"
                  value="Alice"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Education:</label>
                <input
                  type="text"
                  value="Bscs"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Langauges:</label>
                <input
                  type="text"
                  value="English, Arabic"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Job:</label>
                <input
                  type="text"
                  value="Teacher"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Skills:</label>
                <input
                  type="text"
                  value="Teacher"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Interests:</label>
                <input
                  type="text"
                  value="Games"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark"
                  >Any Severe Disease:</label
                >
                <input
                  type="text"
                  value="No"
                  class="rounded-30 border px-3 py-1 d-block w-100"
                />
              </div>
              <div class="col-md-12 pt-5 pb-3">
                <button
                  type="update"
                  class="submit-theme-primary btn-round d-block m-auto font-weight-600"
                  :plain="true"
                  >Update</button
                >
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
      value: 3.5,
    };
  },
};
</script>

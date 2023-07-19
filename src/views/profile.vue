<template>
  <div class="awardCertificatePage">
    <div class="eventsecton ml-4">
      <div class="headBox mb-5 d-flex justify-content-between align-items-center pt-4">
        <h2 class="font-weight-900 pt-0">
          <i class="el-icon-arrow-left"></i> Profile
        </h2>
        <p class="mb-0"><router-link to="./edit-profile" class="btn-round btn-theme-primary px-5">Edit</router-link></p>
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
              <h5 class="text-theme-primary mb-0 font-weight-900">
                Casandra Wood
              </h5>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
            </div>
            <div class="certidicateBtn">
              <a href="#" class="text-dark">Generate Certificate </a>
            </div>
          </div>
          <form action="">
            <div class="row text-left my-4 pl-0 pl-md-5">
              <div class="col-md-12">
                <h5 class="font-weight-900">Basic Information:</h5>
              </div>
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
                <label for="" class="font-weight-900 text-dark"
                  >Date Of Birth:</label
                >
                <input
                  type="date"
                  value="10-06-2021"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Phone:</label>
                <input
                  type="tel"
                  value="+971-73473583"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark"
                  >User IDUser ID</label
                >
                <input
                  type="num"
                  value="DFD-7854"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Gender:</label>
                <input
                  type="text"
                  value="Female"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark"
                  >Nationality:</label
                >
                <input
                  type="text"
                  value="Dubai"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
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
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Emergency Contact Name:</label>
                <input
                  type="name"
                  value="Jhon Alice"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark"
                  >Education:</label
                >
                <input
                  type="text"
                  value="Bscs"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Langauges:</label>
                <input
                  type="text"
                  value="English, Arabic"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark"
                  >Job:</label
                >
                <input
                  type="text"
                  value="Teacher"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark">Skills:</label>
                <input
                  type="text"
                  value="Teaching"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark"
                  >Interests:</label
                >
                <input
                  type="text"
                  value="Games"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
              </div>
              <div class="col-md-6 py-2">
                <label for="" class="font-weight-900 text-dark"
                  >Any Severe Disease:</label
                >
                <input
                  type="text"
                  value="No"
                  disabled
                  class="border-0 bg-transparent d-block w-100"
                />
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

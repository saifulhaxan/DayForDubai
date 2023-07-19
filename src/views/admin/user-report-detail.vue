<template>
  <section class="volunteer mx-md-3">
    <div class="container-fluid">
      <div class="row py-5">
        <div class="col-md-12">
          <h3 class="font-weight-900 pt-0">
            <router-link to="report-management" class="text-dark"
              ><i class="el-icon-arrow-left"></i> User Report Detail</router-link
            >
          </h3>
        </div>
      </div>
      <div class="row mb-5 px-3 rounded-30 py-5 shadow">
        <div class="profileBox col-md-6">
          <div class="profileArea d-flex justify-content-md-end">
            <div class="user-profile">
              <div class="cardImage text-center">
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
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-md-end">
            <div class="editOption actionBtn">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <i class="el-icon-more fa-2x"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <router-link to="#" class="text-theme-primary d-block"
                      >Generate Warning</router-link
                    ></el-dropdown-item
                  >
                  <el-dropdown-item>
                    <router-link to="#" class="text-theme-primary d-block"
                      >Deactivate</router-link
                    ></el-dropdown-item
                  >
                  <el-dropdown-item>
                    <router-link to="#" class="text-theme-primary d-block"
                      >Delete</router-link
                    ></el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
        <div class="col-md-12 py-5 mt-5">
          <div class="d-flex gap-15 flex-md-nowrap flex-wrap">
            <div class="image-card">
              <figure>
                <img
                  src="img/theme/girlMenu.png"
                  alt=""
                  class="mw-100"
                  width="300px"
                  height="auto"
                />
              </figure>
            </div>
            <div class="content-card">
              <h4 class="font-weight-900 text-dark mb-1">Organizer Name</h4>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
              >
              </el-rate>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injected humour, or
                randomised words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, Contrary to popular belief, Lorem
                Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserReport",
  data() {
    return {
      value: 4.5,
    };
  },
};
</script>

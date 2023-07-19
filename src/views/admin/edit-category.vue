<template>
  <div class="organizerFilter container-fluid">
    <div class="eventsecton ml-4">
      <div class="headBox my-5">
        <h2 class="font-weight-900 pt-0">
          <router-link to="./category-management" class="text-dark"
            ><i class="el-icon-arrow-left"></i> Edit Category</router-link
          >
        </h2>
      </div>
      <div class="row shadow p-3 py-5 h-100vh">
        <div class="col-md-8">
          <div class="awardCertificate">
            <div class="enventCategory">
              <el-form ref="form" :v-model="form" action="./admin/category-management">
                <div class="d-flex flex-column gap-15 add-new-form py-3">
                  <div class="flex-grow-1">
                    <el-form-item label="Category Name:">
                      <el-input v-model="form.name" class="w-100 rounded-15"> </el-input>
                    </el-form-item>
                  </div>
                  <div class="flex-grow-1">
                    <el-form-item label="Status:">
                      <el-select
                        v-model="form.event"
                        placeholder="Select Status"
                        class="w-100 rounded-15"
                      >
                        <el-option label="Active" value="Active"></el-option>
                        <el-option label="Inactive" value="Inactive"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                </div>
                <div class="btn-filter">
                  <button class="btn-theme-primary btn-round border-0 mr-2 w-180px">
                    Add
                  </button>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EditCategory",
  data() {
    return {
      form: {
        name: "Health",
        event: "Active",
      },
    };
  },
};
</script>

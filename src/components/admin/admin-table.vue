<template>
  <div class="admin-tables">
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped table-responsive d-md-table">
          <thead>
            <tr>
              <th scope="col" v-for="(item, index) in columnData" :key="index">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
              <th scope="row">{{ index }}</th>
              <template v-if="delete(item[link])">
                <td
                  v-for="(data, dataindex) in Object.values(item)"
                  :key="dataindex"
                  v-show="dataindex != 7 && dataindex != 8"
                  delete
                  data.link
                >
                  {{ data }}
                </td>
              </template>
              <td>
                <el-select v-model="item.value" placeholder="Select" class="status-style">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </td>
              <td>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-more-outline rotate-90"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      ><router-link :to="item.link" class="text-dark">View</router-link></el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tableComponent",
  props: {
    tableData: Array,
    columnData: Array,
  },
  data() {
    return {
      options: [
        {
          value: "Active",
          label: "Active",
        },
        {
          value: "In Active",
          label: "In Active",
        },
      ],
    };
  },
  created() {
    
  }
};
</script>

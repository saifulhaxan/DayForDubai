<template>
  <div class="searhBox px-3 mb-4">
    <el-input placeholder="Search Title" prefix-icon="el-icon-search" v-model="search">
    </el-input>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
      return {
          search: '',
      }
  }
};
</script>

<template>
  <div class="searhBox px-3 mb-4">
    <h3 class="font-weight-600" name="title">{{title}}</h3>
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
  },
  props: {
    title: {
      type: String,
      description: 'search Headu'
    }
  }
};
</script>

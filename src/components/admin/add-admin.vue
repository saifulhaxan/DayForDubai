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
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.nationality }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.contact }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.actions }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Addtable",
  props: {
    tableData: Array,
    columnData: Array,
  },
};
</script>

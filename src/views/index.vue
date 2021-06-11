<template>
  <div>
    <div class="header-page">
      <router-link to="/create" class="btn btn-success">Create</router-link>
      <h2 class="title">Stock List</h2>
    </div>
    <table class="table">
      <thead>
        <th>Characteristics</th>
        <th>Name</th>
        <th>Barcode</th>
        <th>Unit Price</th>
        <th>Cost Price</th>
        <th>Units per Tray</th>
        <th>Date Created</th>
        <th>Actions</th>
      </thead>
      <tbody v-if="stocks.length > 0">
        <tr v-for="(item, index) in stocks" :key="index">
          <td>{{ item.characteristics }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.barcode }}</td>
          <td>{{ item.unit_price }}</td>
          <td>{{ item.cost_price }}</td>
          <td>{{ item.unit_per_tray }}</td>
          <td>{{ item.timestamp }}</td>
          <td>
            <router-link
              :to="'/' + item.id + '/edit'"
              class="btn btn-warning btn-sm text-white"
              >Edit</router-link
            >
            |
            <button
              class="btn btn-danger btn-sm text-white"
              @click="deleteStock(item.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
      <tr v-else>
        <td colspan="7" class="text-center">No data available...</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    stocks: "stocks/stocks",
  }),
  async created() {
    const { data } = await axios.get(`/`);
    this.$store.commit("stocks/SET_STOCKS", { stocks: data });
  },
  methods: {
    async deleteStock(item) {
      if (confirm("Are you sure you want to delete this?")) {
        await axios.delete(`/${item}`);

        let index = this.stocks.findIndex((x) => x.id === item);
        this.stocks.splice(index, 1);
      }
    },
  },
};
</script>

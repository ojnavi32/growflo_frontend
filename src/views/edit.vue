<template>
  <div>
    <h2>Update Stock</h2>
    <StocksForm :stock="stock" />
  </div>
</template>

<script>
import StocksForm from "./../components/Forms/StocksForm.vue";
export default {
  components: {
    StocksForm,
  },
  computed: {
    stock() {
      return this.$store.getters["stocks/stocks"].find(
        (x) => x.id === this.$route.params.id
      );
    },
  },
};
</script>

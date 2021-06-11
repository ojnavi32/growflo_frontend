<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="control-label"
        >Characteristics <span class="text-danger">*</span></label
      >
      <textarea
        v-model="model.characteristics"
        placeholder="put characteristics separated by comma ( , )"
        class="form-control"
      ></textarea>
    </div>
    <base-input label="Name" type="text" v-model="model.name" required />
    <base-input label="Bar Code" type="text" v-model="model.barcode" required />
    <base-input
      label="Unit Price"
      type="text"
      v-model="model.unit_price"
      required
    />
    <base-input
      label="Cost Price"
      type="text"
      v-model="model.cost_price"
      required
    />
    <base-input
      label="Units per Tray"
      type="text"
      v-model="model.unit_per_tray"
      required
    />

    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: ["stock"],
  data() {
    return {
      model: {
        characteristics: "",
        name: "",
        barcode: "",
        unit_price: "",
        cost_price: "",
        unit_per_tray: "",
      },
    };
  },
  created() {
    if (this.stock) this.model = this.stock;
  },
  methods: {
    async submit() {
      if (this.stocks) {
        await axios.put(`/stocks/${this.route.params.id}`, this.model);
      } else {
        await axios.post(`/stocks`, this.model);
      }

      this.$router.push("/");
    },
  },
};
</script>

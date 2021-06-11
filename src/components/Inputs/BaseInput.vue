<template>
  <div class="form-group my-3">
    <slot name="label">
      <label v-if="label" class="control-label"
        >{{ label }}
        <span v-if="required" class="text-danger">{{
          required ? "*" : ""
        }}</span></label
      >
    </slot>
    <slot>
      <input
        :value="value"
        v-bind="$attrs"
        class="form-control"
        @input="$emit('input', $event.target.value)"
      />
    </slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "base-input",
  props: {
    required: Boolean,
    label: {
      type: String,
      description: "Input label",
    },
    value: {
      type: [String, Number],
      description: "Input value",
    },
  },
  model: {
    prop: "value",
    event: "input",
  },
};
</script>

<template>
  <div class="col-sm">
    <label :for="name.toLowerCase()" class="form-label">{{ name }}</label>
    <input
      :id="name.toLowerCase()"
      v-model="value"
      type="text"
      class="form-control"
      :class="{
        'is-invalid': invalid,
        'is-valid': valid,
      }"
      @change="emitValue"
    />
    <div v-if="invalid" class="invalid-feedback">
      {{ invalidFeedback }}
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "@vuelidate/validators";

export default {
  data() {
    return {
      value: null,
    };
  },
  validations() {
    return {
      value: {
        required,
        $autoDirty: true,
        minLength: minLength(this.minLength),
        maxLength: maxLength(this.maxLength),
      },
    };
  },
  props: {
    name: { type: String, required: true },
    minLength: { type: Number },
    maxLength: { type: Number },
    invalidFeedback: { type: String, default: "Invalid input" },
  },
  emits: ["validated-value"],
  computed: {
    invalid() {
      return this.$v.value.$dirty && this.$v.value.$error ? true : false;
    },
    valid() {
      return this.$v.value.$dirty && !this.$v.value.$error ? true : false;
    },
  },
  methods: {
    emitValue() {
      if (this.valid) {
        this.$emit("validated-value", this.value);
      }
    },
  },
};
</script>

<style></style>

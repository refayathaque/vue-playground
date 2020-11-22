<template>
  <div class="container mt-5">
    <div class="row">
      <FlexibleInput
        @validated-value="name = $event"
        inputType="text"
        :minLength="3"
        :maxLength="10"
        name="Name"
        invalidFeedback="Length of name must be between 3 and 10 letters"
      />
      <FlexibleInput
        @validated-value="age = $event"
        inputType="number"
        :minValue="21"
        :maxValue="30"
        name="Age"
        invalidFeedback="Age must be between 21 and 30"
      />
    </div>
  </div>
</template>

<script>
import FlexibleInput from "./FlexibleInput.vue";

export default {
  name: "App",
  components: {
    FlexibleInput,
  },
  data() {
    return {
      name: "",
      age: null,
    };
  },
};
</script>

<style></style>

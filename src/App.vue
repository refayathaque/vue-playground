<template>
  <div class="container mt-5">
    <div class="row">
      <!-- <FlexibleInput
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
      /> -->
    </div>
    <div class="row">
      <TextInput
        @validated-value="name = $event"
        :minLength="3"
        :maxLength="10"
        name="Name"
        invalidFeedback="Length of name must be between 3 and 10 letters"
      />
      <TextInput
        @validated-value="greeting = $event"
        :minLength="5"
        :maxLength="7"
        name="Greeting"
        invalidFeedback="Greeting must be between 5 and 7 letters"
      />
      <NumberInput
        @validated-value="age = $event"
        :minValue="21"
        :maxValue="30"
        name="Age"
        invalidFeedback="Age must be between 21 and 30"
      />
      <NumberInput
        @validated-value="temperature = $event"
        :minValue="0"
        :maxValue="10"
        name="Temperature"
        invalidFeedback="Temperature must be between 0 and 10"
      />
    </div>
  </div>
</template>

<script>
// import FlexibleInput from "./FlexibleInput.vue";
import NumberInput from "./NumberInput.vue";
import TextInput from "./TextInput.vue";

export default {
  components: {
    // FlexibleInput,
    NumberInput,
    TextInput,
  },
  data() {
    return {
      name: "",
      greeting: "",
      age: null,
      temperature: null,
    };
  },
};
</script>

<style></style>

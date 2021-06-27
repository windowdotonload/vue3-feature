<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
    />
    <span v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, PropType } from "vue";
import { ruleProp } from "@/types/types";
type rulesProp = ruleProp[];
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default defineComponent({
  name: "validateInput",
  props: {
    rules: Array as PropType<rulesProp>,
    modelValue: String,
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: "",
    });

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((item) => {
          let passed = true;
          inputRef.message = item.message;
          switch (item.type) {
            case "required":
              passed = inputRef.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(inputRef.val);
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
      }
    };

    const updateValue = (e: KeyboardEvent) => {
      inputRef.val = (e.target as HTMLInputElement).value;
      context.emit("update:modelValue", inputRef.val);
    };

    return {
      inputRef,
      validateInput,
      updateValue,
    };
  },
});
</script>

<style lang='scss'>
</style>
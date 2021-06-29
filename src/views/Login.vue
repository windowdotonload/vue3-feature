<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <validate-form action="" @formSubmit="formsubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <validate-input
        :rules="rules"
        v-model="emailVal"
        type="text"
        placeholder="请输入邮箱"
      ></validate-input>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">密码</label>
      <validate-input
        :rules="passwordRules"
        v-model="password"
        type="password"
        placeholder="请输入密码"
      ></validate-input>
    </div>
  </validate-form>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import validateForm from "@/components/validateFrom.vue";
import validateInput from "@/components/validateInput.vue";
import { ruleProp } from "@/types/types";
export default defineComponent({
  name: "Login",
  props: {},
  components: {
    validateInput,
    validateForm,
  },
  setup(props, context) {
    const rules: ruleProp[] = [
      { type: "required", message: "请输入信息" },
      { type: "email", message: "请输入正确的邮箱" },
    ];
    const passwordRules: ruleProp[] = [
      { type: "required", message: "请输入信息" },
    ];
    const emailVal = ref("");
    const password = ref("");
    const formsubmit = (res: boolean) => {
      console.log(res);
    };

    return {
      rules,
      passwordRules,
      emailVal,
      password,
      formsubmit,
    };
  },
});
</script>

<style lang='scss'>
</style>

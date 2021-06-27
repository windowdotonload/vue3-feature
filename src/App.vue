
<template>
  <div class="continer">
    <global-header :user="testUser" />
    <form action="">
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
    </form>
    <column-list :list="testList" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import columnList, { columnProps } from "@/components/columnList.vue";
import globalHeader, { userProps } from "@/components/globalHeader.vue";
import { testUser, testData } from "@/mock/mockData";
import validateInput from "@/components/validateInput.vue";
import { ruleProp } from "@/types/types";

export default defineComponent({
  components: {
    columnList,
    globalHeader,
    validateInput,
  },
  setup(props) {
    const rules: ruleProp[] = [
      { type: "required", message: "请输入信息" },
      { type: "email", message: "请输入正确的邮箱" },
    ];
    const passwordRules: ruleProp[] = [
      { type: "required", message: "请输入信息" },
    ];

    const emailVal = ref("");
    const password = ref("");
    return {
      testList: testData,
      testUser: testUser,
      rules,
      passwordRules,
      emailVal,
      password,
    };
  },
});
</script>

<style lang="scss">
.continer {
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
}
</style>

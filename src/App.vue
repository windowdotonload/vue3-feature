<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->

<template>
  <div class="continer">
    <global-header :user="testUser" />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import globalHeader, { userProps } from "@/components/globalHeader.vue";
import { testUser, testData } from "@/mock/mockData";
export default defineComponent({
  components: {
    globalHeader,
  },
  setup(props) {
    return {
      testUser: testUser,
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

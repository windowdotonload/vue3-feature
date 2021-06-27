
<template>
  <div class="continer">
    <global-header :user="testUser" />
    <column-list :list="testList" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import columnList, { columnProps } from "@/components/columnList.vue";
import globalHeader, { userProps } from "@/components/globalHeader.vue";
import { testUser, testData } from "@/mock/mockData";

export default defineComponent({
  components: {
    columnList,
    globalHeader,
  },
  setup() {
    return {
      testList: testData,
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

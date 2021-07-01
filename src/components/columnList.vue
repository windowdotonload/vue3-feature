<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a @click="goDetail" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import component from "*.vue";
import { computed, defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
export interface columnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: "columnList",
  props: {
    list: {
      type: Array as PropType<columnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map((item) => {
        if (!item.avatar) {
          item.avatar = require("@/assets/default.jpeg");
        }
        return item;
      });
    });

    const router = useRouter();

    const goDetail = () => {
      router.push({ name: "column", params: { id: 1 } });
    };

    return {
      columnList,
      goDetail,
    };
  },
});
</script>

<style lang='scss'>
</style>
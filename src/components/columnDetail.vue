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
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
      <post-list :list="list"></post-list>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent ,computed} from "vue";
import { testData, testPosts } from "@/mock/mockData";
import { useRoute } from "vue-router";
import {useStore} from 'vuex'
import postList from "@/components/postList.vue";
import component from "*.vue";
export default defineComponent({
  name: "columnDetail",
  props: {},
  components: {
    postList,
  },
  setup(props, context) {
    const route = useRoute();
    const store = useStore()
    const id = +route.params.id;

    // const column = testData.find((item) => item.id === id);
    // const list = testPosts.filter((item) => item.columnId == id);
    const column = computed(() => store.getters.getColumnByid(id))
    const list = computed(() => store.getters.getPostsByCid(id))
    return {
      column,
      list,
    };
  },
});
</script>

<style lang='scss'>
</style>
<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <input ref="uploader" type="file" @change="changeFile" multiple="multiple" />
  <button @click="submit">提交</button>
</template>

<script lang='ts'>
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "",
  props: {},
  setup() {
    const uploader = ref<null | HTMLInputElement>(null);
    const changeFile = (e: Event) => {
      const target = e.target as HTMLInputElement;
      console.log(target.files);
    };
    const submit = () => {
      console.log("ok");
      if (uploader.value) {
        uploader.value.click();
      }
    };

    return {
      changeFile,
      submit,
      uploader,
    };
  },
});
</script>

<style lang='scss'>
</style>
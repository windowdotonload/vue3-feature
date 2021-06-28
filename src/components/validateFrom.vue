<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
type ValidateFunc = () => boolean;

export const emitter = mitt();
export default defineComponent({
  name: "",
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];
    const callback = (func: any) => {
      funcArr.push(func);
    };

    emitter.on("form-item-created", callback);

    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      funcArr = [];
    });

    const submitForm = () => {
      const result = funcArr.map((item) => item()).every((item) => item);
      context.emit("form-submit", result);
    };

    return {
      submitForm,
    };
  },
});
</script>

<style lang='scss'>
</style>
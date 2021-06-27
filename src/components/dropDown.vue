<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, onMounted } from "vue";
import { isClickOutside } from "@/hooks/uitls";

export default defineComponent({
  name: "dropDown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const dropdownRef = ref<null | HTMLElement>(null);

    const flag = isClickOutside(dropdownRef);

    watch(flag, (cur) => {
      if (cur) {
        isOpen.value = true;
      } else {
        isOpen.value = false;
      }
    });

    return {
      isOpen,
      toggleOpen,
      dropdownRef,
    };
  },
});
</script>

<style lang='scss'>
</style>
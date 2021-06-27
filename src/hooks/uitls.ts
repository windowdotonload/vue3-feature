/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */
import { ref, Ref, onMounted, onUnmounted } from "vue";

export function isClickOutside(element: Ref<null | HTMLElement>) {
    const isClickOutside = ref(false)

    const handler = (e: MouseEvent) => {
        if (element.value?.contains(e.target as HTMLElement)) {
            isClickOutside.value = true
        } else {
            isClickOutside.value = false
        }

    }

    onMounted(() => {
        document.addEventListener('click', handler)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })

    return isClickOutside
}
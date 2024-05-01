import { Ref, onMounted, onUnmounted } from "vue";
function useClickOutside(elementRef: Ref<undefined | HTMLElement>, callback: (e: MouseEvent) => void) {
    function handler(e: MouseEvent) {
        if (elementRef.value && e.target) {
            if (!elementRef.value.contains(e.target as HTMLElement)) {
                callback(e)
            }
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler)
    })
    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })
}

export {
    useClickOutside
}
<template>
  <div class="vk-collapse">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, provide } from 'vue'
import { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'
import { watch } from 'vue'
import './style.css'

defineOptions({
  name: 'VKCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  }
)
const handlerItemClick = (item: NameType) => {
  console.log(activeNames.value)
  if (props.accordion) {
    activeNames.value = activeNames.value[0] === item ? [] : [item]
  } else {
    const index = activeNames.value.indexOf(item)
    if (index !== -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(item)
    }
    emits('update:modelValue', activeNames.value)
    emits('change', activeNames.value)
  }
}
provide(collapseContextKey, {
  activeNames,
  handlerItemClick
})
</script>

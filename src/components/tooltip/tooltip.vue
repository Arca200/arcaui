<template>
  <div
    class="vk-tooltip"
    v-on="outerevents"
    ref="popperContainerNode">
    <div
      class="vk-tooltip__trigger"
      ref="triggerNode"
      v-on="events">
      <slot />
    </div>
    <Transition :name="transition">
      <div
        v-if="isOpen"
        class="vk-tooltip__popper"
        ref="popperNode">
        <slot name="content">{{ content }}</slot>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import './style.css'
import { onUnmounted, reactive, ref, watch, computed } from 'vue'
import { createPopper, type Instance } from '@popperjs/core'
import { useClickOutside } from '../../hooks/useClickOutside'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import { debounce } from 'lodash-es'
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 400,
  closeDelay: 400
})
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
let popperInstance: null | Instance = null
let events: Record<string, any> = reactive({})
let outerevents: Record<string, any> = reactive({})
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      }
    ],
    ...props.popperOptions
  }
})
function togglePopper() {
  if (isOpen.value) {
    close()
  } else {
    open()
  }
}
const debounceopen = debounce(() => {
  isOpen.value = true
  emits('visible-change', true)
}, props.openDelay)
const debounceclose = debounce(() => {
  isOpen.value = false
  emits('visible-change', false)
}, props.closeDelay)
const open = () => {
  debounceclose.cancel()
  debounceopen()
}
const close = () => {
  debounceopen.cancel()
  debounceclose()
}
function attachEvents() {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    outerevents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(
          triggerNode.value,
          popperNode.value,
          popperOptions.value
        )
      } else {
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' }
)
watch(
  () => props.trigger,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      events = {}
      outerevents = {}
      attachEvents()
    }
  }
)
watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events = {}
      outerevents = {}
    } else {
      attachEvents()
    }
  }
)
useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value === true && !props.manual) {
    close()
  }
})
if (!props.manual) {
  attachEvents()
}
onUnmounted(() => {
  popperInstance?.destroy()
})
defineExpose<TooltipInstance>({
  show: open,
  hide: close
})
</script>
<style scoped></style>

<template>
  <Transition
      :name="transitionName"
      @after-leave="destroyComponent">
    <div
        ref="messageRef"
        class="vk-message"
        :class="{
        [`vk-message--${type}`]: type,
        'is-close': showClose
      }"
        v-show="visible"
        :style="cssStyle">
      <div class="vk-message__content">
        <slot>
          <RenderVnode
              :vNode="message"
              v-if="message"></RenderVnode>
        </slot>
      </div>
      <div
          @click="close"
          class="vk-message__close"
          v-if="showClose">
        <Icon icon="xmark"></Icon>
      </div>
    </div
    >
  </Transition>
</template>
<script setup lang="ts">
import './style.css'
import {MessageProps} from './types'
import {computed, nextTick, onMounted, ref, withDefaults} from 'vue'
import Icon from '../icon/icon.vue'
import RenderVnode from '../common/renderVnode'
import {getLastBottomOffset} from './method'

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 20,
  transitionName: 'fade-up'
})
const messageRef = ref<HTMLElement>()
const height = ref(0)
const lastOffset = computed(() => getLastBottomOffset(props.id))
const topOffset = computed(() => {
  if (props.offset) {
    return props.offset + lastOffset.value
  } else {
    return 0
  }
})
const bottomOffset = computed(() => height.value + topOffset.value)
const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex
}))
const visible = ref(true)

function startTimer() {
  if (props.duration !== 0) {
    setTimeout(() => {
      visible.value = false
    }, props.duration)
  }
}

function close() {
  visible.value = false
}

// watch(visible, (newV) => {
//   if (!newV) {
//     props.onDestory()
//   }
// })
function destroyComponent() {
  props.onDestory()
}


onMounted(async () => {
  visible.value = true
  startTimer()
  await nextTick()
  height.value = messageRef.value!.getBoundingClientRect().height
})
defineExpose({
  bottomOffset,
  visible
})
</script>

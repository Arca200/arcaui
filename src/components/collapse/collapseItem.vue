<template>
  <div
    class="vk-collapse-item"
    :class="{
      'is-disabled': disabled
    }">
    <div
      class="vk-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="handleClick">
      <slot name="title"> {{ title }}</slot>
    </div>
    <!-- <Transition name="fade">
      <div
        class="vk-collapse-item__content"
        :id="`item__content-${name}`"
        v-show="isActive">
        <slot></slot></div
    ></Transition> -->
    <Transition
      name="slide"
      v-on="transitionEvents">
      <div
        class="vk-collapse-item__wrapper"
        v-show="isActive">
        <div
          class="vk-collapse-item__content"
          :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { CollapseItemProps, collapseContextKey } from './types'
import { inject, computed } from 'vue'
defineOptions({
  name: 'VKCollapseItem'
})
const collapseContext = inject(collapseContextKey)
const props = defineProps<CollapseItemProps>()
const isActive = computed(() => {
  return collapseContext?.activeNames.value.indexOf(props.name) !== -1
})
const handleClick = () => {
  if (props.disabled) {
    return
  } else {
    collapseContext?.handlerItemClick(props.name)
  }
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

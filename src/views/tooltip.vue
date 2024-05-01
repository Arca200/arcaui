<template>
  <Tooltip
    ref="popperInstance"
    :popper-options="options"
    content="HelloWorld"
    :trigger="Trigger"
    :manual="manual">
    <h1 style="height: 300px; width: 300px; background-color: aquamarine">
      Hello World!
    </h1>
    <template v-slot:content>
      <span>good</span>
    </template>
  </Tooltip>
  <Button
    v-if="manual"
    type="primary"
    plain
    @click="show"
    >显示</Button
  >
  <Button
    v-if="manual"
    type="success"
    plain
    @click="close"
    >关闭</Button
  >
</template>
<script setup lang="ts">
import Tooltip from '../components/tooltip/tooltip.vue'
import { ref } from 'vue'
import { trigger, TooltipInstance } from '../components/tooltip/types'
import Button from '../components/button/button.vue'
import type { Options } from '@popperjs/core'
const Trigger = ref<trigger>('hover')
const manual = ref(false)
const options: Partial<Options> = { placement: 'right-end', strategy: 'fixed' }
const popperInstance = ref<TooltipInstance | null>()
function show() {
  popperInstance.value?.show()
}
function close() {
  popperInstance.value?.hide()
}
// setTimeout(() => {
//   Trigger.value = 'hover'
// }, 2000)
</script>

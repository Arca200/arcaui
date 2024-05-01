<template>
  <Dropdown
    ref="popperInstance"
    :popper-options="options"
    content="HelloWorld"
    :trigger="Trigger"
    :manual="manual"
    :menu-options="items">
    <h1 style="height: 300px; width: 300px; background-color: aquamarine">
      Hello World!
    </h1>
    <template v-slot:content>
      <span>good</span>
    </template>
  </Dropdown>
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
import Dropdown from '../components/dropdown/dropdown.vue'
import { MenuOption } from '../components/dropdown/types'
import { ref, h } from 'vue'
import { trigger, TooltipInstance } from '../components/tooltip/types'
import Button from '../components/button/button.vue'
import type { Options } from '@popperjs/core'

const items: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true, divided: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4', divided: true }
]

const Trigger = ref<trigger>('click')
const manual = ref(true)
const options: Partial<Options> = { placement: 'bottom' }
const popperInstance = ref<TooltipInstance | null>()
function show() {
  popperInstance.value?.show()
}
function close() {
  popperInstance.value?.hide()
}
</script>

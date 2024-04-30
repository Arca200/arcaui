<template>
  <Collapse
    v-model="openValue"
    :accordion="true">
    <collapseItem name="first">
      <template #title>
        <h1>this is title</h1>
      </template>
      <h1>???</h1>
    </collapseItem>
    <collapseItem
      name="second"
      title="title b">
      <span>this is b</span>
    </collapseItem>
    <collapseItem
      name="third"
      title="title c">
      <span>this is c</span>
    </collapseItem>
  </Collapse>
</template>

<script setup lang="ts">
import Collapse from '../components/collapse/collapse.vue'
import collapseItem from '../components/collapse/collapseItem.vue'
import { ref } from 'vue'
const openValue = ref(['first'])
</script>
<style></style>

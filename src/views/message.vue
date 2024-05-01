<template></template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { createMessage } from '../components/message/method'

onMounted(() => {
  const instance1 = createMessage({
    type: 'danger',
    message: 'Hello',
    duration: 0,
    showClose: true
  })
  createMessage({
    message: 'World',
    duration: 0,
    showClose: true
  })
  createMessage({
    message: '?',
    duration: 0,
    showClose: true
  })
  //   setTimeout(() => {
  //     instance1.destory()
  //   }, 1000)
})
</script>

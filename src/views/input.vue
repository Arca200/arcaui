<template>
  <Input :modelValue="value" clearable showPassword></Input>
</template>
<script setup lang="ts">
import Input from '@/components/input/input.vue'
import {ref} from "vue";

const value = ref('this is input');

</script>
<style scoped>

</style>
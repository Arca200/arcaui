<template>
  <Select :options="options" placeholder="/" :disabled="false" modelValue="11"></Select>
</template>
<script setup lang="ts">
import Select from '@/components/select/select.vue'
import {ref} from "vue";

const options = ref([{
  label: '1',
  value: '1',
  key:'001'
}])
</script>
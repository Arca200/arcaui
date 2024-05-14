<template>
  <Button ref="buttonRef" type="success">success</Button>
  <Button type="primary">primary</Button>
  <Button type="warning">warning</Button>
  <Button type="danger">danger</Button>
  <Button type="info">info</Button>
  <Button
      type="success"
      plain
  >success
  </Button
  >
  <Button
      type="primary"
      plain
  >primary
  </Button
  >
  <Button
      type="warning"
      plain
  >warning
  </Button
  >
  <Button
      type="danger"
      plain
  >danger
  </Button
  >
  <Button
      type="info"
      plain
  >info
  </Button
  >
  <Button
      size="large"
      loading
  >Loading
  </Button
  >
  <Button
      size="large"
      icon="hippo"
  >Icon
  </Button
  >
  <Button size="small">small</Button>
  <Button size="normal">normal</Button>
  <Button size="large">large</Button>
  <Button plain>plain</Button>
  <Button round>round</Button>
  <Button circle>circle</Button>
  <Button disabled>disabled</Button>
  <Button autofocus>autofocus</Button>
</template>

<script setup lang="ts">
import Button from '../components/button/button.vue'
import {onMounted, ref} from "vue";

const buttonRef = ref('')
onMounted(() => {
  console.log(buttonRef.value.ref)
})

</script>

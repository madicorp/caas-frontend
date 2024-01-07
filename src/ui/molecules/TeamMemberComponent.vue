<template>
  <div class="team-block">
    <img :src="image" alt="img" />
    <h5 class="text-white">{{ name }}</h5>
    <h6 class="text-uppercase text-olive">{{ job }}</h6>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  image: string
  name: string
  job: string
}>()
</script>
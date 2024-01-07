<template>
  <div class="icon_box type-2">
    <img :src="image" alt="img" class="post-bg" />
    <div class="icon_box_inner">
      <img :src="icon" alt="Icon Box" />
      <h4 class="text-white">{{ title }}</h4>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  image: string
  icon: string
  title: string
  description: string
}>()
</script>
<template>
  <ul>
    <li class="facebook">
      <a target="_blank" :href="props?.socials?.linkedin"><i class="bi bi-linkedin"></i></a>
    </li>
    <li class="twitter">
      <a target="_blank" :href="props?.socials?.facebook"><i class="bi bi-facebook"></i></a>
    </li>
    <li class="instagram">
      <a target="_blank" :href="props?.socials?.instagram"><i class="bi bi-instagram"></i></a>
    </li>
    <li class="youbetube">
      <a target="_blank" :href="props?.socials?.youtube"><i class="bi bi-youtube"></i></a>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  socials: {
    facebook: string,
    twitter: string,
    instagram: string,
    youtube: string,
    linkedin: string
  }
}>()
</script>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from "vue";
import { loadScript, preloader, configure_navbar_sticky } from "@/utils/theme";

onMounted(() => {
  loadScript("/assets/plugins/cursor-effect/cursor-effect.js", "cursor_effect");
  loadScript("/assets/js/theme.js", "theme_js");
  preloader()
  configure_navbar_sticky()
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
.dark_logo {
  img {
    filter: invert(1);
  }
}
</style>
<template>
  <RouterLink to="/">
    <img :src="image" alt="logo" />
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps({
  image: String,
});
</script>
<template>
  <!-- Color Mode Switcher -->
  <div ref="mode_switcher" id="mode_switcher" @click="toggleDarkMode()">
    <span><i class="bi bi-moon-fill"></i></span>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mode_switcher = ref<HTMLElement | null>(null)

onMounted(() => {
  if(localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light')
  }
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('bg-white')
    if (mode_switcher.value != null)
      mode_switcher.value.innerHTML = '<span><i class="bi bi-sun-fill"></i></span>'
  } else {
    document.body.classList.remove('bg-white')
    if (mode_switcher.value != null)
      mode_switcher.value.innerHTML = '<span><i class="bi bi-moon-fill"></i></span>'
  }
})

function toggleDarkMode() {
  if (mode_switcher.value === null) return
  document.body.classList.toggle('bg-white')
  if (document.body.classList.contains('bg-white')) {
    mode_switcher.value.innerHTML = '<span><i class="bi bi-sun-fill"></i></span>'
    localStorage.setItem('theme', 'light')
  } else {
    mode_switcher.value.innerHTML = '<span><i class="bi bi-moon-fill"></i></span>'
    localStorage.setItem('theme', 'dark')
  }
}
</script>
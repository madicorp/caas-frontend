<template>
  <!-- Color Mode Switcher -->
  <div id="mode_switcher" @click="toggleDarkMode()">
    <span><i class="bi bi-moon-fill"></i></span>
  </div>
</template>
<script setup lang="ts">
function toggleDarkMode() {
  const icon = document.getElementById("mode_switcher");
  if (!icon) return;
  document.body.classList.toggle("bg-white");
  if (document.body.classList.contains("bg-white")){
    icon.innerHTML = '<span><i class="bi bi-sun-fill"></i></span>';
    localStorage.setItem("theme", "dark");
  } else {
    icon.innerHTML = '<span><i class="bi bi-moon-fill"></i></span>';
    localStorage.setItem("theme", "light");
  }
}
</script>
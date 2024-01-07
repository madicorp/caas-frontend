<template>
  <ModeSwitcherComponent/>
  <!-- Preloader -->
  <div id="preloader">
    <div class="preloader-inner">
      <div class="spinner"></div>
      <div class="loading-text">
        <span data-preloader-text="C" class="characters">C</span>
        <span data-preloader-text="A" class="characters">A</span>
        <span data-preloader-text="A" class="characters">A</span>
        <span data-preloader-text="S" class="characters">S</span>
      </div>
    </div>
  </div>
  <!-- Cursor Effect -->
  <div class="pointer bnz-pointer" id="bnz-pointer"></div>

  <MenuComponent />

  <AsideComponent />
  <!-- Main Wrapper-->
  <main class="wrapper">
    <slot name="header"></slot>
    <slot name="main"></slot>
  </main>
  <slot name="footer"></slot>
  <div class="totop">
    <a href="#">UP</a>
  </div>

  <!-- Page Grid Lines -->
  <ul class="grid_lines d-md-flex justify-content-between vh-100 position-fixed top-0">
    <li class="grid_line"></li>
    <li class="grid_line"></li>
    <li class="grid_line"></li>
    <li class="grid_line"></li>
    <li class="grid_line"></li>
    <li class="grid_line"></li>
    <li class="grid_line"></li>
  </ul>
</template>
<script setup lang="ts">
import AsideComponent from "@/ui/organisms/AsideComponent.vue";
import MenuComponent from "@/ui/organisms/MenuComponent.vue";
import ModeSwitcherComponent from "@/ui/molecules/ModeSwitcherComponent.vue";
</script>
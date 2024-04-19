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
  <slot name="menu">
    <MenuComponent />
    <AsideComponent />
  </slot>
  <!-- Main Wrapper-->
  <main class="wrapper">
    <slot name="header"></slot>
    <slot name="main"></slot>
  </main>
  <slot name="footer"></slot>
  <div class="totop">
    <a href="#">UP</a>
  </div>
</template>
<script setup lang="ts">
import AsideComponent from "@/ui/organisms/AsideComponent.vue";
import MenuComponent from "@/ui/organisms/MenuComponent.vue";
import ModeSwitcherComponent from "@/ui/molecules/ModeSwitcherComponent.vue";
</script>
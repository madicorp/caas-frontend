<style lang="scss">
  .copyright {
    text-align: center;
  }
</style>
<template>
  <!-- Header -->
  <header class="header">
    <div class="container-fluid">
      <div class="header_inner d-flex align-items-center justify-content-between">
        <LightAndDarkLogosComponents class="logo" />
        <div class="mainnav d-none">
          <ul class="main_menu">
            <li class="menu-item active">
              <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/qui-sommes-nous">Qui Sommes nous ?</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/prix-et-distinctions">Distinctions</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/devis">Devis</RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/contact">Contact</RouterLink>
            </li>
          </ul>
        </div>
        <div class="header_right_part d-flex align-items-center">
          <button class="aside_open" @click="toggle_menu('open')">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
          <div class="header_search">
            <button type="submit" class="form-control-submit"><i class="bi bi-search"></i></button>
          </div>
          <!-- Mobile Responsive Menu Toggle Button -->
          <button type="button" class="mr_menu_toggle" @click="toggle_aside('open')">
            <span class="bi bi-list"></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Responsive Menu -->
  <div class="mr_menu">
    <div class="mr_menu_overlay" @click="toggle_menu('close')"></div>
    <button type="button" class="mr_menu_close" @click="toggle_menu('close')"><i class="bi bi-x-lg"></i></button>
    <div class="logo"></div>
    <!-- Keep this div empty. Logo will come here by JavaScript -->
    <div class="mr_navmenu"></div>
    <!-- Keep this div empty. Menu will come here by JavaScript -->

    <!-- Footer-->
    <footer class="footer p-0">
      <div class="footer_inner pb-0">
        <div class="footer_elements d-flex align-items-center justify-content-center">
          <div class="footer_elements_inner">
            <div class="footer_social">
              <SocialButtonsComponent class="social_list justify-content-center" />
            </div>
           <CopyrightComponent />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { configure_menu, toggle_menu, toggle_aside } from "@/utils/theme";
import { RouterLink } from 'vue-router';
import { onMounted } from "vue";
import SocialButtonsComponent from "@/ui/molecules/SocialButtonsComponent.vue";
import CopyrightComponent from "@/ui/molecules/CopyrightComponent.vue";
import LightAndDarkLogosComponents from "@/ui/molecules/LightAndDarkLogosComponents.vue";

onMounted(() => {
  configure_menu()
})
</script>
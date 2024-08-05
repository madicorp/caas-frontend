<style scoped>
.dark_logo {
  background: rgba(0, 0, 0, .65);
}
</style>
<template>
  <div class="aside_info_wrapper">
    <button class="aside_close" @click="toggle_aside('close')"><i class="bi bi-x-lg"></i></button>
    <LightAndDarkLogosComponents class="aside_logo" />
    <div class="aside_info_inner">
      <p>Nous regardons dans la même direction pour mieux vous servir</p>

      <div class="aside_info_inner_box">
        <h5>Nos Contact</h5>
        <p>(+221) 33 832 54 84</p>
        <p>
          310, HLM Maristes BP : 3150, Dakar <br />
          Senegal
        </p>
        <p>contact@caas.sn</p>
      </div>
      <div class="social_sites">
        <SocialButtonsComponent class="d-flex align-items-center justify-content-center" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toggle_aside } from "@/utils/theme";
import { RouterLink } from "vue-router";
import LightAndDarkLogosComponents from "@/ui/molecules/LightAndDarkLogosComponents.vue";
import SocialButtonsComponent from "@/ui/molecules/SocialButtonsComponent.vue";
</script>
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
      <p>Mrittik Architects is a full-service design firm providing architecture architecture.</p>

      <div class="aside_info_inner_box">
        <h5>Contact Info</h5>
        <p>+123 456 789 33</p>
        <p>
          3 Madison Street, NY <br />
          United States of America
        </p>
        <p>mrittikarch@gmail.com</p>

        <h5>Office Address</h5>
        <p>
          +Time Square, New York <br />
          USA, 3454
        </p>
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
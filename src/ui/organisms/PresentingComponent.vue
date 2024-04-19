<template>
  <section class="mission">
    <div class="container">
      <div class="mission_top_part">
        <div class="section-header text-center">
          <h6 class="text-white text-uppercase">Our MISSION</h6>
          <p class="text-gray-600">{{ presenting.mission }}</p>
        </div>
        <div class="has_line"></div>
        <img src="/assets/img/3-Vue-33.jpg" alt="">
      </div>

      <div class="mission_bottom_part">
        <div class="row justify-content-center">
          <div class="col-lg-4 pe-lg-4">
            <div class="section-header">
              <h3 class="text-white text-uppercase border-line">ARCHITECTURE IS WHERE WE BELONG</h3>
            </div>
          </div>
          <div class="col-lg-6 ps-lg-4">
            <div class="mission_content">
              <StrapiBlocks :content=" presenting.content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  import type { Presenting } from "@/types/about";
  import { StrapiBlocks } from 'vue-strapi-blocks-renderer';

  defineProps<{
    presenting: Presenting
  }>()
</script>
<style>
  .bg_2 {
    background-position-y: 90px;
  }
</style>
<template>
  <MapsComponent class="video-block"/>
  <section class="funfacts pd-top-lg bg_2" id="funfacts">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="funfacts_inner">
            <div class="funfact2 d-flex align-items-center">
              <div class="fun_img">
                <img src="/assets/img/fact-1.png" alt="img">
              </div>
              <div class="funfact_content">
                <p>Design Drawing</p>
                <div class="d-flex align-items-center"><h2 class="fun-number">120</h2></div>
              </div>
            </div>
            <div class="funfact2 d-flex align-items-center">
              <div class="fun_img">
                <img src="/assets/img/fact-2.png" alt="img">
              </div>
              <div class="funfact_content">
                <p>Project Completed</p>
                <div class="d-flex align-items-center"><h2 class="fun-number">210</h2><span>+</span></div>
              </div>
            </div>
            <div class="funfact2 d-flex align-items-center">
              <div class="fun_img">
                <img src="/assets/img/fact-3.png" alt="img">
              </div>
              <div class="funfact_content">
                <p>Design Award</p>
                <div class="d-flex align-items-center"><h2 class="fun-number">15</h2></div>
              </div>
            </div>
            <div class="funfact2 d-flex align-items-center">
              <div class="fun_img">
                <img src="/assets/img/fact-4.png" alt="img">
              </div>
              <div class="funfact_content">
                <p>Project Running</p>
                <div class="d-flex align-items-center"><h2 class="fun-number">62</h2></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import MapsComponent from "@/ui/molecules/MapsComponent.vue";
</script>
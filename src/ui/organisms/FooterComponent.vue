<template>
  <footer class="footer bg-dark-200 box_padding">
    <div class="footer_inner bg-black" data-aos="zoom-in" data-aos-duration="1000">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-lg-4 col-md-2 col-sm-2">
            <div class="section-header" data-aos="fade-right" data-aos-duration="1000">
              <h2>Contact</h2>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-5">
            <div class="communication">
              <div class="info_body" data-aos="fade-up" data-aos-duration="500">
                <h6>Studio Website</h6>
                <h5>www.mrittikarchitects.com</h5>
              </div>
              <div class="info_body" data-aos="fade-up" data-aos-duration="700">
                <h6>Email Address</h6>
                <h5>mrittikarchitects@gmail.com</h5>
              </div>
              <div class="info_body" data-aos="fade-up" data-aos-duration="900">
                <h6>Phone No</h6>
                <h5>+123 (456789)</h5>
              </div>
              <div class="info_body" data-aos="fade-up" data-aos-duration="1100">
                <h6>Office Address</h6>
                <h5>3 Madison Street NY, USA</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-5">
            <div class="footer_elements d-flex align-items-center justify-content-end">
              <div class="footer_elements_inner">
                <div class="footer_logo" data-aos="fade-up" data-aos-duration="500">
                  <LogoComponent class="light_logo" />
                </div>
                <div class="footer_social">
                  <SocialButtonsComponent class="social_list" />
                </div>
                <CopyrightComponent class="text-start" data-aos="fade-up" data-aos-duration="2000" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Grid Lines -->
      <ul class="grid_lines d-none d-md-flex justify-content-between">
        <li class="grid_line"></li>
        <li class="grid_line"></li>
        <li class="grid_line"></li>
        <li class="grid_line"></li>
        <li class="grid_line"></li>
        <li class="grid_line"></li>
        <li class="grid_line"></li>
      </ul>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import CopyrightComponent from "@/ui/molecules/CopyrightComponent.vue";
import SocialButtonsComponent from "@/ui/molecules/SocialButtonsComponent.vue";
import LogoComponent from "@/ui/atoms/LogoComponent.vue";
</script>
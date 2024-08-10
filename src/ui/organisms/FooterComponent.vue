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
              <div class="info_body" data-aos="fade-up" data-aos-duration="700">
                <h6>Email</h6>
                <h5>{{contact.email}}</h5>
              </div>
              <div class="info_body" data-aos="fade-up" data-aos-duration="900">
                <h6>Téléphone</h6>
                <h5>{{contact.phone}}</h5>
              </div>
              <div class="info_body" data-aos="fade-up" data-aos-duration="1100">
                <h6>Adresse</h6>
                <h5>{{contact.address}}</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-sm-5">
            <div class="footer_elements d-flex align-items-center justify-content-end">
              <div class="footer_elements_inner">
                <div class="footer_logo" data-aos="fade-up" data-aos-duration="500">
                  <LogoComponent image="/assets/img/logo_white.png" class="light_logo" />
                </div>
                <div class="footer_social">
                  <SocialButtonsComponent class="social_list"
                    :socials="contact.social"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  />
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
import CopyrightComponent from "@/ui/molecules/CopyrightComponent.vue";
import SocialButtonsComponent from "@/ui/molecules/SocialButtonsComponent.vue";
import LogoComponent from "@/ui/atoms/LogoComponent.vue";
import { onMounted, ref } from "vue";

const contact = ref<{
  email: string,
  phone: string,
  address: string,
  social: {
    facebook: string,
    twitter: string,
    instagram: string,
    youtube: string,
    linkedin: string
  }
}>({} as any)

onMounted(async () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL + '/api'
  const response = await fetch(apiUrl + '/contact?populate[0]=social').then(res => res.json())
  contact.value = response.data.attributes
})

</script>
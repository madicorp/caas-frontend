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
        <p>{{contact.phone}}</p>
        <p>{{contact.address}}</p>
        <p>{{contact.email}}</p>
      </div>
      <div class="social_sites">
        <SocialButtonsComponent class="d-flex align-items-center justify-content-center"
                                :socials="contact.social"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toggle_aside } from "@/utils/theme";
import LightAndDarkLogosComponents from "@/ui/molecules/LightAndDarkLogosComponents.vue";
import SocialButtonsComponent from "@/ui/molecules/SocialButtonsComponent.vue";
import { onMounted, ref } from "vue";

const contact = ref({})

onMounted(async () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL + '/api'
  const response = await fetch(apiUrl + '/contact?populate[0]=social').then(res => res.json())
  contact.value = response.data.attributes
  console.log(contact.value.phone)
})
</script>
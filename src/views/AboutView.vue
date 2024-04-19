<style>
.service-section img.post-bg {
  width: 100%;
}
</style>
<template>
  <PageHeaderLayout title="A PROPOS">
    <!-- Our Mission -->
    <PresentingComponent
      v-if="pageData?.attributes?.presenting"
      :presenting="pageData.attributes.presenting"
    />

    <FunFactsComponents/>

    <ServicesComponent class="service-section"/>

    <section class="highlight_banner bg-dark-200">
      <div class="container">
        <div class="row justify-content-center" data-aos="flip-up" data-aos-duration="500">
          <div class="col-lg-11 p-lg-0">
            <p class="about_para text-center">
              we meet new people
              <span><a href="#">everyday</a></span> coming with
              <span><a href="#">new dreams & hope our effort is to make them true</a></span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <TeamComponent v-if="pageData?.attributes?.team" :team="pageData.attributes.team"/>

    <!-- Testimonial -->
    <TestimonialComponent/>

  </PageHeaderLayout>
</template>
<script setup lang="ts">
  import TeamComponent from "@/ui/organisms/TeamComponent.vue";
  import PageHeaderLayout from "@/ui/templates/PageLayout.vue";
  import FunFactsComponents from "@/ui/organisms/FunFactsComponent.vue";
  import ServicesComponent from "@/ui/organisms/ServicesComponent.vue";
  import TestimonialComponent from "@/ui/organisms/TestimonialComponent.vue";
  import PresentingComponent from "@/ui/organisms/PresentingComponent.vue";
  import { onMounted, ref } from "vue";
  import { loadScript } from "@/utils/theme";
  import { loadSitesMap } from "@/utils/map";
  import type { AboutPage } from "@/types/about";

  const apiUrl = import.meta.env.VITE_BACKEND_URL + '/api'

  const pageData = ref<AboutPage>({} as AboutPage)

  async function getPageData() {
    return fetch(`${apiUrl}/about-page?populate[0]=team.photo,presenting`)
      .then(response => response.json())
  }

  onMounted(async () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmY5gLZ--X_K1mRPNlxawEnjz_4Qs3fR0&v=3",
      "google-maps" , () => { loadSitesMap('/assets/img/homegardenbusiness.png')}
    )
    const response = await getPageData()
    pageData.value = response.data
    console.log({pageData: pageData.value})
  });
</script>

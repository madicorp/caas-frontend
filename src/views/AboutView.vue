<style>
.service-section img.post-bg {
  width: 100%;
}
</style>
<template>
  <PageHeaderLayout title="A PROPOS">
    <!-- Our Mission -->
    <PresentingComponent/>

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
    <TeamComponent/>

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
  import { onMounted } from "vue";
  import { loadScript } from "@/utils/theme";
  import { loadSitesMap } from "@/utils/map";

  onMounted(() => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmY5gLZ--X_K1mRPNlxawEnjz_4Qs3fR0&v=3",
      "google-maps" , () => { loadSitesMap('/assets/img/homegardenbusiness.png')}
    )
  });
</script>

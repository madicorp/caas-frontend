<style scoped>
.under-construction-content {
  margin-bottom: 20px;
}
</style>
<template>
  <MainLayout>
    <template v-slot:menu>
      <span></span>
    </template>
    <template v-slot:main>
      <section class="under-construction-page">
        <div class="container">
          <div class="row">
            <div class="col col-lg-10 offset-lg-1">
              <div class="under-construction-content text-center">
                <div class="row">
                  <div class="heading">Site Web en construction</div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-10 offset-1">
                  <div class="mission_content justify-content">
                    <p>Nous sommes actuellement en pleine refonte de notre site Web afin de vous proposer une expérience utilisateur plus fluide et enrichie.</p>
                    <p>Durant cette phase de transition, certaines fonctionnalités pourraient être temporairement indisponibles. Nous nous excusons pour tout inconvénient et vous remercions de votre patience.</p>
                    <p>Nous sommes impatients de vous dévoiler notre nouveau site prochainement. Restez à l'écoute pour les dernières actualités et mises à jour.</p>
                    <p>Merci pour votre fidélité et votre soutien.</p>
                    <p>L'équipe de CAAS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/ui/templates/MainLayout.vue";
</script>
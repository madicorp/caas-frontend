<template>
  <section class="testimonial box_padding">
    <div class="section-header text-center">
      <h6 class="text-white text-uppercase">Notre Approche</h6>
    </div>
    <div class="has_line_lg"></div>
    <div class="testimonial_inner bg-black" data-aos="zoom-in" data-aos-duration="500">
      <!-- Swiper Testimonial -->
      <swiper
      :slides-per-view="1"
      :centered-slides="true"
      :speed="1600"
      :space-between="50"
      :parallax="true"
      :auto-height="true"
      :effect="'slide'"
      :controller="{ inverse: true }"
      :slide-to-clicked-slide="true"
      :lazy-loading="true"
      :loop="true"
      :keyboard="{enabled: true}"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      }"
      :breakpoints="{
        768: {
          slidesPerView: 1.5,
          spaceBetween: 70,
        },
        1200: {
          slidesPerView: 1.5,
          spaceBetween: 120,
        },
        1400: {
          slidesPerView: 1.5,
          spaceBetween: 170,
        },
      }"
      >
        <swiper-slide v-for="(item, index) in testimonial" :key="index">
          <div class="testimonial-block text-center">
            <p>{{item.description}}</p>
            <h6 class="text-olive">{{item.title}}</h6>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </section>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from "swiper/modules";
const testimonial = [{
  title: 'Le client',
  description: 'Pour faire de votre rêve une réalité, C.A.A.S vous témoigne de sa disponibilité à travers une grande ' +
    'écoute et un accompagnement allant de la conception à la réalisation de vos projets. ' +
    'La rencontre entre notre expértise en la matière et votre imagination, permettra la conception de projets uniques ' +
    'de grandes qualité architecturale et artistique vous correspondant. ' +
    'En d\'autres termes, visualiser votre imagination pour donner forme à vos rêves.',
},{
  title: 'Le cabinet',
  description: 'Après une parfaite compréhension de vos idées, le C.A.A.S se lance à la conception.' +
    ' Les idées font ainsi l\'objet d\'un Avant-Projet Sommaire consitant à définir les enjeux du projet et d’en estimer' +
    ' le budget pour une prise de décision sur la suite. L\'avant-Projet sommaire est ainsi suivi des études' +
    ' d\'Avant-Projet détaillé permettant le lancement des études de détail et des activités d’approvisionnement.  ',
},{
  title: 'Le projet',
  description: 'Cette phase consiste à la préparation du dossier d\'exécution qui comprend tous les documents, ' +
    'graphiques, descriptifs et normatifs, permettant la réalisation du projet. Il permettra aux entreprises de ' +
    'chiffrer précisemment le coût des travaux. Dans ces documents, tous les matériaux, marques, normes, types de ' +
    'mise en oeuvre, sont explicitement mentionnés. Cela permet d\'avoir un comparatif précis de l\'ensemble des devis.',
},{
  title: 'Le suivi',
  description: 'Pendant la construction, nous assistons le Maitre d’Œuvre d’Exécution sur: la revue des plans d’exécution, ' +
    'les modifications éventuelles, les détails complémentaires ainsi que les visites de chantier. Cela permet d’assurer ' +
    'que la réalisation finale respectera l’esprit architectural fondamental du projet. Il s’agira de vérifier ' +
    'régulièrement la conformité du déroulement des travaux suivant les prévisions et, éventuellement, la sanctionde ' +
    'tout retard par une décision immédiate d’action corrective.  ',
}]
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation]
    }
  },
  data() {
    return {
      testimonial,
    }
  },
}
</script>
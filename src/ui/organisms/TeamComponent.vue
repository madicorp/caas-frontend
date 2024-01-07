<style scoped lang="scss">
.boss-member {
  justify-content: center;
  .team_inner {
    margin-bottom: 50px;
  }
}
</style>
<template>
  <section class="team">
    <div class="container">
      <div class="section-header text-center has_line">
        <h1 class="text-white">Our Team</h1>
      </div>
      <div class="row boss-member">
        <div class="col-4">
          <div class="team_inner">
            <TeamMemberComponent
              image="/assets/img/team/1.jpg" name="Michel Robertson" job="ARCHITECT"/>
          </div>
      </div>
        <!-- Swiper Team -->
        <swiper
          class="swiper_team"
          :modules="modules"
          :speed="1400"
          :slides-per-view="1"
          :centered-slides="false"
          :space-between="30"
          :parallax="true"
          :auto-height="true"
          :effect="'slide'"
          :controller="{ inverse: true }"
          :slide-to-clicked-slide="true"
          :loop="true"
          :keyboard="{enabled: true}"
          :breakpoints="{
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 65,
            },
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          }">
          <swiper-slide v-for="member in teamMembers" :key="member.name">
            <TeamMemberComponent :image="member.image" :name="member.name" :job="member.job"/>
            </swiper-slide>
          <!-- Add Buttons -->
          <div class="swiper-navigation">
            <div class="swiper-button-prev"><i class="bi bi-arrow-left"></i></div>
            <div class="swiper-button-next"><i class="bi bi-arrow-right"></i></div>
          </div>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from "swiper/modules";
import TeamMemberComponent from "@/ui/molecules/TeamMemberComponent.vue";

const teamMembers = [
  {
    image: "/assets/img/team/1.jpg",
    name: "Michel Robertson",
    job: "ARCHITECT"
  },
  {
    image: "/assets/img/team/2.jpg",
    name: "Mellisa Johansen",
    job: "ARCHITECT"
  },
  {
    image: "/assets/img/team/3.jpg",
    name: "Dave Crossby",
    job: "ARCHITECT"
  },
  {
    image: "/assets/img/team/4.jpg",
    name: "Hazel R. Grace",
    job: "ARCHITECT"
  },
  {
    image: "/assets/img/team/5.jpg",
    name: "Benjamin Brook",
    job: "ARCHITECT"
  },
]

export default {
  components: {
    TeamMemberComponent,
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
      teamMembers
    }
  }
}
</script>
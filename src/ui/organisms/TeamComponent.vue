<style scoped lang="scss">
.boss-member {
  justify-content: center;
  .team_inner {
    margin-bottom: 50px;
  }
}
body.bg-white {
  .swiper_team .swiper-navigation .swiper-button-next, .swiper_team .swiper-navigation .swiper-button-prev {
    color: var(--mrittik-gray-800);
  }
}
</style>
<template>
  <section class="team">
    <div class="container">
      <div class="section-header text-center has_line">
        <h1 class="text-white">Notre Equipe</h1>
      </div>
      <div class="row boss-member">
        <div class="col-4">
          <div class="team_inner">
            <TeamMemberComponent
              :image="ceo.photo.url" :name="ceo.name" :job="ceo.position"
            :phone="ceo.phone" :email="ceo.email"/>
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
            <div class="team_inner">

            <TeamMemberComponent :image="member.photo.url" :name="member.name"
                                 :job="member.position" :email="member.email" :phone="member.phone"/>
            </div>
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
import type { TeamMember } from "@/types/about";
import type { PropType } from "vue";
import { teamComponentMapper } from "@/mappers";

export default {
  props: {
    team: {
      type: Array,
      required: true
    }
  },
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
    const {team, ceo} = teamComponentMapper(this.team)
    return {
      teamMembers: team,
      ceo
    }
  }
}
</script>
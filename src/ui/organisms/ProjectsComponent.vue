<style scoped>
.swiper-slide {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(80vw,1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(80vw,1fr);
  overflow-x: auto;
}
.swiper-slide .slider:not(:first-child) {
  border-left: 5px solid var(--mrittik-gray-300);
}

.swiper-navigation {
  right: 40%;
  rotate: 90deg;
}
.bi::before {
  position: relative;
  top: 10px;
  left: 10px;
}

.infinite-loader {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
}
</style>
<template>
  <div class="theme_slider_2 p-0">
    <swiper
      class="swiper_theme_slider_2"
      :speed="1600"
      :mousewheel="{forceToAxis: true}"
      :modules="modules"
      :slidesPerView="1"
      :centered-slides="true"
      :direction="'vertical'"
      :autoplay="false"
      :spaceBetween="0"
      :parallax="true"
      :autHeight="true"
      :effect="'slide'"
      :controller="{ inverse: true }"
      :slide-to-clicked-slide="true"
      :loop="false"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      }">
      <swiper-slide v-for="element in elements" :key="element.key">
          <div class="slider" :style="{ backgroundImage: `url('${element.image}')` }" v-for="elem in elems" :key="elem.key">
              <div class="slide_content" v-if="elem.key === 0">
                <div class="slide_content_wrapper mb-0 h-100 bg-dark-100">
                  <div class="slide_content_inner">
                    <div class="meta m-0">
                      <div class="text-olive">Landscape Design</div>
                    </div>
                    <h4>
                      As Architects We Love to Add Beauty & Aesthetics To Your Space
                    </h4>
                  </div>
                </div>
              </div>
          </div>
        <infinite-loading class="infinite-loader" @infinite="load" />
      </swiper-slide>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>

      <!-- Add Buttons -->
      <div class="swiper-navigation">
        <div class="swiper-button-prev"><i class="bi bi-arrow-left"></i></div>
        <div class="swiper-button-next"><i class="bi bi-arrow-right"></i></div>
      </div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel, Navigation } from 'swiper/modules'
import { ref } from 'vue'
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
const elements = ref(
  Array.from({ length: 100 }, (_, i) => ({
    key: i,
    image: 'https://www.caas.sn/wp-content/uploads/2019/11/Vue-sur-Séjourpp-1.jpg',
    title: 'California young menz club',
    description: 'Club House.',
    explore: false
  }))
)

const elems = ref(
  Array.from({ length: 10 }, (_, i) => ({
    key: i,
    image: 'https://www.caas.sn/wp-content/uploads/2019/11/Vue-sur-Séjourpp-1.jpg',
    title: 'California young menz club',
    description: 'Club House.',
    explore: false
  }))
)
const load = async $state => {
  setTimeout(() => {
    //$state.loaded()
  }, 1000)
}

const pointerScroll = (elem) => {

  let isDrag = false;

  const dragStart = () => isDrag = true;
  const dragEnd = () => isDrag = false;
  const drag = (ev) => isDrag && (elem.scrollLeft -= ev.movementX);

  elem.addEventListener("pointerdown", dragStart);
  addEventListener("pointerup", dragEnd);
  addEventListener("pointermove", drag);
};

export default {
  mounted() {
    $(window)
      .on('resize', function () {
        const bodyheight = $(this).height()
        $('.swiper_theme_slider_2').height(bodyheight)
      })
      .resize()
    document.querySelectorAll(".swiper-slide").forEach(pointerScroll);
  },
  components: {
    Swiper,
    SwiperSlide,
    InfiniteLoading
  },
  setup() {
    return {
      modules: [Mousewheel, Navigation]
    }
  },
  data() {
    return {
      elements: elements,
      elems: elems
    }
  },
  methods: {
    load: load
  }
}
</script>
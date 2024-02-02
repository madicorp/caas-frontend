<style lang="scss" scoped>
  section.projects {
    margin-top: 10rem;
  }
  .grid-item > .thumb {
    width: 45%;
    margin: 0 auto;
  }
</style>
<template>
  <MainLayout>
    <template v-slot:main>
      <div class="theme_slider_5 p-0">
        <div class="slider">
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
      </div>
      <section class="projects bg-transparent effect-tilt p-0">
        <div class="container">
          <div class="grid gutter-40 clearfix">
            <div class="grid-sizer"></div>
            <ProjectsDetailsComponent  v-for="project  in projects" :key="project.key"
                                       :project="project"
                                       :data-aos="!project.opened ? 'fade-up' :  ''" :data-aos-duration="!project.opened ? 700 :  0" />
          </div>
          <div class="btn_group w-100 text-center">
            <button id="load-more" class="btn black w-100">Show More Project(s)</button>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>
<script setup lang="ts">
import ProjectsDetailsComponent from '@/ui/organisms/ProjectsDetailsComponent.vue'
import MainLayout from '@/ui/templates/MainLayout.vue'
import { ref } from "vue";
const projects = ref(
  Array.from({ length: 100 }, (_, i) => ({
    key: i,
    image: 'https://www.caas.sn/wp-content/uploads/2019/11/Vue-sur-Séjourpp-1.jpg',
    title: 'California young menz club',
    description: 'Club House.',
    opened: false
  }))
)

</script>

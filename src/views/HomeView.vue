<style lang="scss" scoped>
section.projects {
  margin-top: 10rem;
}
.grid-item > .thumb {
  width: 45%;
  margin: 0 auto;
}
.infinite-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.5rem;
  color: var(--mrittik-gray-300);
  padding: 1rem 0;
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
          <div class="grid gutter-20 clearfix">
            <div class="grid-sizer"></div>
            <ProjectsDetailsComponent
              v-for="project in projects"
              :key="project.id"
              :project="project"
              @explore-project="project.opened = true"
              :data-aos="!project.opened ? 'fade-up' : ''"
              :data-aos-duration="!project.opened ? 700 : 0"
            />
          </div>
          <infinite-loading class="infinite-loader btn_group w-100 text-center" @infinite="load" >
            <template v-slot:complete>
              <p></p>
            </template>
          </infinite-loading>
        </div>
      </section>
    </template>
    <template v-slot:footer>
      <FooterComponent />
    </template>
  </MainLayout>
</template>
<script setup lang="ts">
import ProjectsDetailsComponent from '@/ui/organisms/ProjectsDetailsComponent.vue'
import MainLayout from '@/ui/templates/MainLayout.vue'
import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'
import { onMounted, ref } from 'vue'
import type { Project, ProjectComponent } from 'src/types'
import { projectComponentMapper, projectMapper } from "@/mappers";
import FooterComponent from "@/ui/organisms/FooterComponent.vue";

const apiUrl = import.meta.env.VITE_BACKEND_URL + '/api'
const projects = ref<ProjectComponent[]>([])
const totalProjects = ref(0)
const currentPages = ref(1)

async function getProjects(params = { pageSizes: 10, page: 1 }) {
  const paramUrl = `sort[0]=information.date:desc&pagination[page]=${params.page}&pagination[pageSize]=${params.pageSizes}&pagination[withCount]=true`
  return fetch(`${apiUrl}/projects?populate[0]=information,gallery&${paramUrl}`).then((response) =>
    response.json()
  )
}
onMounted(async () => {
  const response = await getProjects({ pageSizes: 10, page: 1 })
  totalProjects.value = response.meta.pagination.total
  projects.value = response.data.map((project: Project) => projectComponentMapper(project))
})

const load = async ($state: any) => {
  if (projects.value.length >= totalProjects.value && totalProjects.value !== 0) {
    $state.complete()
    return
  }
  const response = await getProjects({ pageSizes: 10, page: currentPages.value + 1 })
  const newProjects = response.data.map((project: Project) => projectComponentMapper(project))
  projects.value = projects.value.concat(newProjects)
  currentPages.value += 1
  $state.loaded()
}
</script>

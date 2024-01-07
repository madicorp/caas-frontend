<template>
  <MainLayout>
    <template v-slot:main>
      <ProjectsComponent />
    </template>
  </MainLayout>
</template>
<script setup lang="ts">
import ProjectsComponent from '@/ui/organisms/ProjectsComponent.vue'
import MainLayout from '@/ui/templates/MainLayout.vue'
</script>

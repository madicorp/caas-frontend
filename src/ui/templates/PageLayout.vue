<template>
  <MainLayout>
    <template v-slot:header>
      <PageHeaderComponent :title="title"/>
    </template>
    <template v-slot:main>
      <slot></slot>
    </template>
    <template v-slot:footer>
      <FooterComponent />
    </template>
  </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from '@/ui/templates/MainLayout.vue'
import PageHeaderComponent from '@/ui/molecules/PageHeaderComponent.vue'
import FooterComponent from '@/ui/organisms/FooterComponent.vue'
defineProps<{
  title: string
}>()
</script>

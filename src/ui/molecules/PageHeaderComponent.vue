<style scoped>
  .page_header {
    background: url(https://www.caas.sn/wp-content/themes/caas/images/background/bg-subheader.jpg) no-repeat top center;
    background-size: cover;
    background-position-y: 10%;
  }
  .page_header .page_header_inner::before {
    background: none;
  }
</style>
<template>
  <!-- Page Header -->
  <div class="page_header in-service">
    <div class="page_header_inner">
      <div class="container">
        <div class="page_header_content d-flex align-items-center justify-content-between">
          <h2 class="heading">{{title}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { defineProps } from "vue";
  defineProps<{
    title: string
  }>()
</script>
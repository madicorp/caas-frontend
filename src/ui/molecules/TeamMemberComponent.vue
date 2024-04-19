<style lang="scss" scoped>
.team-block {
  text-align: center;
  img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  h5 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  h6 {
    font-size: 1rem;
    margin-bottom: 10px;
    &:before {
      position: absolute;
      content: "";
      background: #a6a182;
      width: 52px;
      height: 1px;
      left: -67px;
      top: 5px;
    }
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
}
</style>
<template>
  <div class="team-block">
    <img :src="image" alt="img" />
    <h5 class="text-white">{{ name }}</h5>
    <h6 class="text-uppercase text-olive">{{ job }}</h6>

    <p class="text-uppercase text-olive">{{ phone }}</p>
    <p class="text-uppercase text-olive">{{ email }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  image: string
  name: string
  job: string
  email: string
  phone: string
}>()
</script>
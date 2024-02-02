<style scoped lang="scss">
.grid-item {
  transition: width 3s ease-out;
  cursor: pointer;
}
.thumb {
  width: 45%;
  margin: 0 auto;
  transition:height 0.3s ease-out;
}
.explored-projects {
  height: 80vh;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: auto;
  cursor: initial;
  &::-webkit-scrollbar {
    display: none;
  }
  .thumb {
    flex-basis: 90%;
    flex-shrink: 0;
    &:not(:first-child) {
      border-left: 5px solid var(--mrittik-gray-300);
    }
  }
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
}
</style>
<template>
  <div :class="{'explored-projects': project.opened, 'grid-item': true }"  @click="explore()">
    <div class="thumb">
      <img class="item_image" :src="project.image" alt="">
      <div class="works-info" v-if="!project.opened">
        <div class="label-text">
          <h5>{{project.title}}</h5>
          <h6>{{project.description}}</h6>
        </div>
      </div>
    </div>
    <template v-if="project.opened">
      <div class="thumb" v-for="elem in elems" :key="elem.key">
        <img class="item_image" :src="elem.image" alt="">
      </div>
      <infinite-loading class="infinite-loader" @infinite="load" />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

const props  = defineProps<{
  project: {
    key: number
    image: string
    title: string
    description: string
    opened: boolean
  }
}>()

const elems = ref(
  Array.from({ length: 10 }, (_, i) => ({
    key: i,
    image: 'http://www.caas.sn/wp-content/uploads/2016/03/1-Masse.jpg',
    title: 'California young menz club',
    description: 'Club House.',
  }))
)
const load = async ($state: any) => {
  setTimeout(() => {
    elems.value.push(
      ...Array.from({ length: 3 }, (_, i) => ({
        key: i,
        image: 'http://www.caas.sn/wp-content/uploads/2015/10/2-Vue-2.jpg',
        title: 'California young menz club',
        description: 'Club House.',
      }))
    )
    $state.loaded()
  }, 2000)
}

const explore = () => {
  props.project.opened = true
}
</script>
<style scoped lang="scss">
@keyframes leaves {
  0% {
    transform: scale(.7);
  }
  100% {
    transform: scale(1);
  }
}
.grid-item {
  cursor: pointer;
  display: flex;
  img.item_image {
    height: 100%;
  }
}
.thumb {
  width: 60%;
  margin: 0 10px;
  flex: 3;
}
.works-info {
  text-align: end;
  flex: 1;
}
.explored-projects {
  height: 80vh;
  animation: leaves 1s ease-in-out;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: auto;
  cursor: initial;
  &::-webkit-scrollbar {
    display: none;
  }
  .thumb {
    flex: 1;
    flex-basis: 90%;
    flex-shrink: 0;
    margin: 0;
    &:not(:first-child) {
      border-left: 5px solid var(--mrittik-gray-300);
    }
  }

  .works-info {
    flex: 1;
    position: sticky;
    left: 0;
    z-index: 1;
    bottom: 0;
    background: rgba(0, 0, 0, .47);
    padding: 10px;
    height: fit-content;
    width: fit-content;
    .label-text {
      width: 10rem;
    }
  }
}

</style>
<template>
  <div :class="{'explored-projects': project.opened, 'grid-item': true }"  @click="explore()">
    <div class="works-info">
      <div class="label-text">
        <h5><a href="#">{{project.attributes.name}}</a></h5>
        <h6><a href="#">{{project.information.category}}</a></h6>
        <h6><a href="#">{{project.information.client}}</a></h6>
        <h6><a href="#">{{project.information.date}}</a></h6>
        <h6><a href="#">{{project.information.place}}</a></h6>
      </div>
    </div>
    <div class="thumb">
      <img class="item_image" :src="previewImage.url" :alt="previewImage.alt || ''">
    </div>
    <template  v-if="project.opened">
      <div class="thumb" v-for="image in images" :key="image.id">
        <img class="item_image" :src="image.url" :alt="image.alt || ''">
      </div>
      <div class="end-scroll">
        <h3>fin</h3>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import type { Media, ProjectComponent } from "src/types";
import { onMounted, ref } from "vue";
const emit = defineEmits(['exploreProject'])
const props  = defineProps<{project: ProjectComponent}>()
const images = ref<Media[]>([])
const previewImage = ref<Media>({} as Media)


onMounted(() => {
  previewImage.value = props.project.media[0]
  images.value = props.project.media.slice(1)
})
const explore = () => {
  emit('exploreProject')
}
</script>
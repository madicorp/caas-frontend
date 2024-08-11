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
    &.details {
      position: relative;
      bottom: auto;
      top: 0;
      background: rgba(0, 0, 0, .47);
      padding: 10px;
      height: fit-content;
      width: fit-content;
      .label-text {
        width: 13rem;
        text-align: start;
        p {
          margin: 0;
          padding: 0;
        }
        .desc {
          font-size: 0.65rem;
          margin-top: 1rem;
          text-align: justify;
        }
      }
    }
    .label-text {
      width: 20rem;
    }
  }
}

@media screen and (max-width: 1024px) {
  .grid-item {
    flex-direction: column;
    .thumb {
      width: 100%;
    }
    .works-info {
      text-align: center;
    }
  }
  .explored-projects {
    flex-direction: row;
    height: 60vh;
    .thumb {
      flex: 1;
      flex-basis: fit-content;
      flex-shrink: 0;
      margin: 0;
      &:not(:first-child) {
        border-left: 5px solid var(--mrittik-gray-300);
      }
    }
  }

}
@media screen and (max-width: 576px) {
  .explored-projects {
    height: 40vh;
    .works-info {
      position: relative;
    }
  }
}
</style>
<template>
  <div :class="{'explored-projects': project.opened && images.length > 0, 'grid-item': true }"  @click="images.length > 0 && explore()">
    <div class="works-info">
      <div class="label-text">
        <h5><a href="#">{{project.attributes.name}}</a></h5>
      </div>
    </div>
    <div class="thumb">
      <img class="item_image" :src="previewImage.url" :alt="previewImage.alt || ''">
    </div>
    <div v-if="project.opened" class="works-info details">
      <div class="label-text">
        <p><b>{{project.information.category}}</b></p>
        <p><b>{{project.information.client}}</b></p>
        <p><b>{{project.information.date}}</b></p>
        <p><b>{{project.information.place}}</b></p>
        <p class="desc">{{project.information.description}}</p>
      </div>
    </div>
    <template v-if="project.opened && images.length > 0">
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
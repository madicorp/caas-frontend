<style scoped lang="scss">
.mission {
  padding: 100px 0;
}

.trophy {
  padding: 15px 0 0 0;
  margin: auto;
  z-index: 100;
}

.shelf {
  border-bottom: 40px solid #262626;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  top: -30px;
  z-index: 0;
  position: relative;

  &:after {
  content: '';
  background: #a6a182;
  height: 5px;
  width: calc(100% + 40px); /*IE9+*/
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 1;
  margin: 0 -20px;
}
}
.award {
  z-index: 2;

  img:hover {
    filter: brightness(120%);
    cursor: pointer;
  }
}
</style>
<template>
  <PageHeaderLayout title="DISTINCTIONS">
    <section class="mission">
      <div class="section-header text-center">
        <h6 class="text-white text-uppercase">Prix et distinctions</h6>
      </div>
      <div class="has_line"></div>
      <div class="container">
        <div class="row">
          <div class="col-8">
           <AwardDetailComponent :title="selectedAward.title" :image="selectedAward.image" :description="selectedAward.description" />
          </div>
          <div class="col-4">
            <!-- START Trophy Case -->
            <div class="row">

              <!-- START Row 1 -->
              <template v-for="(item, index) in awards">
                <template v-if="true">
                  <div class="col-xs-6 col-md-6 award" :key="index">
                    <img
                      :src="item.image"
                      class="trophy"
                      :alt="item.title"
                      @click="showAwardDetail(item)"
                    />
                  </div>
                </template>
                <template v-if="index > 0 && (index + 1) % 2 === 0">
                  <div :key="index" class="col-xs-12 shelf hidden-md hidden-lg"></div>
                </template>
                <template v-if="(index + 1) === awards.length">
                  <div class="col-xs-12 shelf" :key="index"></div>
                </template>
              </template>
              <!-- END Row 1 -->
            </div>
            <!-- END Trophy Case -->
          </div>
        </div>
      </div>
    </section>
  </PageHeaderLayout>
</template>
<script setup lang="ts">
  import PageHeaderLayout from "@/ui/templates/PageLayout.vue";
  import AwardDetailComponent from "@/ui/molecules/AwardDetailComponent.vue";
  import { ref } from "vue";

  const awards = [
    {
      title: "Best Architectural Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      image: "/assets/img/Untitled-1.jpg",
    },
    {
      title: "Best Architectural Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      image: "/assets/img/Untitled-2.jpg",
    },
    {
      title: "Best Architectural Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      image: "/assets/img/Untitled-3.jpg",
    },
  ]

  const selectedAward = ref(awards[0]);

  const showAwardDetail = (award: any) => {
    selectedAward.value = award;
  };

</script>

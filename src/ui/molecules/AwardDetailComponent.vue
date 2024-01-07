<style>
.borderwrap {
  border: 2px solid #a6a182;
  padding: 10px;
  border-radius: 10px;
}

.m-t-1 {
  margin-top: 1rem !important;
}

.m-b-2 {
  margin-bottom: 1.5rem !important;
}
section.about {
  padding: 50px 0;
}
.about_image {
  margin: 50px 0;
}
</style>
<template>
  <!-- START Trophy Info -->
  <div class="col-xs-12 m-t-1 m-b-2 tcspacing">
    <div class="borderwrap">
      <section class="about">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-10 offset-1">
              <div class="row">
                <h3 class="text-white">{{title}}</h3>
              </div>
              <div class="row">
                <div class="about_image">
                  <img
                    :src="image"
                    alt="img"
                  />
                  <img
                    :src="image"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  />
                </div>
              </div>
              <div class="row">
                <div class="about_text_inner">
                  <div class="about_text">
                    <p>{{description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- END Trophy Info -->
</template>
<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>
```
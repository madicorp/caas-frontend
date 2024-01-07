<template>
  <section class="services inner pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="500">
          <ServiceComponent
            title="ARCHITECTURE"
            image="/assets/img/icon_box/bg-1.jpg"
            icon="/assets/img/icon_box/1.png"
            description="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design,
                interior architecture."
          />
        </div>
        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="700">
          <ServiceComponent
            title="URBANISME"
            image="/assets/img/icon_box/bg-2.jpg"
            icon="/assets/img/icon_box/2.png"
            description="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design,
                interior architecture."/>
        </div>
        <div class="col-lg-4" data-aos="fade-up" data-aos-duration="900">
          <ServiceComponent
            title="INGENIERIE"
            image="/assets/img/icon_box/bg-3.jpg"
            icon="/assets/img/icon_box/3.png"
            description="Mrittik Architects is a full-service design firm providing architecture, master planning, urban design,
                interior architecture."/>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import ServiceComponent from "@/ui/molecules/ServiceComponent.vue";
</script>
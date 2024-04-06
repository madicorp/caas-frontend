<style>
.btn.olive:before {
  background-image: url(/assets/img/btn-texture-olive.png);
}
</style>
<template>
  <PageHeaderLayout title="CONTACT">
    <MapsComponent/>

    <section class="contact_us bg-dark-200">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5" data-aos="fade-right" data-aos-duration="1000">
            <div class="section-header">
              <h1 class="text-white text-uppercase mb-4">LET’S DISCUSS NEXT PROJECTS</h1>
              <p class="$gray-600">The talent at Mrittik runs wide and deep. Across many markets, geographies and typologies, our team members are some of the finest professionals in the industry.. We’ve grouped our work into five categories: places, venues, spaces, experiences and events.</p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
            <div class="home_contact">
              <form action="contact.php" method="POST">
                <input class="form-control form-control-lg" name="name" id="name" type="text" placeholder="Your Name*" required aria-label=".form-control-lg example">
                <input class="form-control form-control-lg" name="phone" id="phone" type="number" placeholder="Your Phone No" aria-label=".form-control-lg example">
                <input class="form-control form-control-lg" name="email" id="email" type="email" placeholder="Your Email*" required aria-label=".form-control-lg example">
                <textarea class="form-control pt-4" name="message" id="message" placeholder="Your Message" rows="3"></textarea>
                <div class="btn_group">
                  <button type="submit" class="btn olive">Send Mail</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageHeaderLayout>
</template>
<script setup lang="ts">
  import PageHeaderLayout from "@/ui/templates/PageLayout.vue";
  import { onMounted } from "vue";
  import { loadScript } from "@/utils/theme";
  import { loadContactMap } from "@/utils/map";
  import MapsComponent from "@/ui/molecules/MapsComponent.vue";
  onMounted(() => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmY5gLZ--X_K1mRPNlxawEnjz_4Qs3fR0&v=3",
      "google-maps" , () => { loadContactMap('/assets/img/map-marker.png')}
    )
  });
</script>
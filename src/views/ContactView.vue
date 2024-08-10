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
          <div class="col-lg-4" data-aos="fade-right" data-aos-duration="1000">
            <div class="section-header">
              <h4 class="text-white text-uppercase mb-4">Envoyez Nous Un Message</h4>
            </div>
          </div>
          <div class="col-lg-8" data-aos="fade-left" data-aos-duration="1000">
            <div class="home_contact">
              <input class="form-control form-control-lg" v-model="nom" id="nom" type="text" placeholder="Nom*">
              <input class="form-control form-control-lg" v-model="telephone" id="telephone" type="text" placeholder="Téléphone*">
              <input class="form-control form-control-lg" v-model="email" id="email" type="email" placeholder="Email*">
              <textarea class="form-control pt-4" v-model="message" id="message" placeholder="Message*" rows="3"></textarea>
              <div class="btn_group">
                <button :disabled="loading" type="submit" class="btn olive" @click="submit">Envoyer</button>
                <div v-if="loading" class="preloader-inner">
                  <div class="spinner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageHeaderLayout>
</template>
<script setup lang="ts">
  import PageHeaderLayout from "@/ui/templates/PageLayout.vue";
  import { onMounted, ref } from "vue";
  import { loadScript } from "@/utils/theme";
  import { loadContactMap } from "@/utils/map";
  import MapsComponent from "@/ui/molecules/MapsComponent.vue";
  import { load } from "recaptcha-v3";
  import { toast } from "vue3-toastify";
  onMounted(() => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmY5gLZ--X_K1mRPNlxawEnjz_4Qs3fR0&v=3",
      "google-maps" , () => { loadContactMap('/assets/img/map-marker.png')}
    )
  });
  const nom = ref('')
  const email = ref('')
  const telephone = ref('')
  const message = ref('')
  const loading = ref(false)

  function verifyEmail(email: string) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  function validateFormData(formData: Record<string, string>) {
    let isValid = true
    const invalidFields: any = []
    Object.entries(formData).forEach(([key, value]) => {
      if (!value || value === '' || (key === 'email' && !verifyEmail(value))) {
        document.getElementById(key)?.style.setProperty('border-color', 'red')
        invalidFields.push(key)
        isValid = false
      }
      else {
        document.getElementById(key)?.style.setProperty('border-color', 'green')
      }
    })
    document.getElementById(invalidFields[0])?.focus()
    return isValid
  }

  async function verifyCaptcha() {
    const recaptcha = await load(import.meta.env.VITE_RECAPTCHA_SECRET_KEY)
    return  await recaptcha.execute('submit')
  }

  const submit = async () => {
    const formData = {
      nom: nom.value,
      email: email.value,
      telephone: telephone.value,
      message: message.value
    }
    if (!validateFormData(formData)) return
    loading.value = true
    const token = await verifyCaptcha()
    const data = JSON.stringify({
      token: token,
      formName: "contact",
      formData
    })
    const apiUrl = import.meta.env.VITE_BACKEND_URL + '/api'
    fetch(`${apiUrl}/ezforms/submit`, { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: data })
      .then(response => {
        loading.value = false
        if (!response.ok) {
          toast.error('Une erreur est survenue lors de l\'envoi de votre message')
          return
        }
        toast.success('Votre message a été envoyé avec succès')
        // Reset form fields
        nom.value = ''
        email.value = ''
        telephone.value = ''
        message.value = ''
      })
  }
</script>
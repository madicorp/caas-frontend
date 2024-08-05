<template>
  <PageHeaderLayout title="DEVIS">
    <section class="shopping_cart bg-dark-200">
      <div class="container">
        <div class="shipping_form">
            <div class="row">
              <div class="col-lg-7 pe-5">
                <h4 class="widget-title">
                  Information sur le demandeur <span class="title-line"></span>
                </h4>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="nom">Nom *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nom"
                        v-model="nom"
                        placeholder="Nom"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="prenom">Prénom *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="prenom"
                        v-model="prenom"
                        placeholder="Prénom"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="profession">Profession *</label>
                  <input
                    type="text"
                    class="form-control"
                    id="profession"
                    v-model="profession"
                    placeholder="Profession"
                  />
                </div>
                <div class="form-group">
                  <label for="adresse">Adresse *</label>
                  <input
                    type="text"
                    class="form-control"
                    id="adresse"
                    v-model="adresse"
                    placeholder="Les Almadies, Dakar, Ngor"
                  />
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="email">Email *</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="email"
                        placeholder="mail@domain.com"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label for="telephone">Téléphone *</label>
                      <input
                        type="text"
                        class="form-control"
                        id="telephone"
                        v-model="telephone"
                        placeholder="77 000 00 00"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="place_order">
                  <h4 class="widget-title">
                    Information sur le site <span class="title-line"></span>
                  </h4>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="zone">Zone/Localité *</label>
                        <input
                          type="text"
                          class="form-control"
                          id="zone"
                          v-model="zone"
                          placeholder="Thies Nord"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="surface">Surface *</label>
                        <input
                          type="text"
                          class="form-control"
                          id="surface"
                          v-model="surface"
                          placeholder="300m2"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <h4 class="widget-title">
                      Information sur le programme <span class="title-line"></span>
                    </h4>
                  </div>
                  <div class="form-group">
                    <label for="ouvrage">Type d'ouvrage *</label>
                    <select class="basic_select" id="ouvrage" v-model="ouvrage">
                      <option value="logement individuel">logement individuel</option>
                      <option value="immeuble d'habitation">immeuble d'habitation</option>
                      <option value="équipement commercial">équipement commercial</option>
                      <option value="autre">autre</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="niveau">Nombre de niveau *</label>
                    <select class="basic_select" id="niveau" v-model="niveau">
                      <option value="RDC">RDC</option>
                      <option value="RDC+1">RDC+1</option>
                      <option value="RDC+2">RDC+2</option>
                      <option value="RDC+3">RDC+3</option>
                      <option value="RDC+4 et plus">RDC+4 et plus</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="additional_info">
                  <div class="mt-5">
                    <h4 class="widget-title">Autres Informations <span class="title-line"></span></h4>
                  </div>
                  <div class="form-group">
                    <label for="precision">Quelques Précisions (Facultatif)</label>
                    <textarea id="precision" v-model="precision" class="form-control" placeholder="..."></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <div class="btn_group">
                <input class="btn white" type="submit" value="Envoyer" @click="submit" />
              </div>
            </div>
        </div>
      </div>
    </section>
  </PageHeaderLayout>
</template>
<script setup lang="ts">
import PageHeaderLayout from '@/ui/templates/PageLayout.vue'
import { load } from 'recaptcha-v3'
import { ref } from "vue";

const nom = ref('')
const prenom = ref('')
const profession = ref('')
const adresse = ref('')
const email = ref('')
const telephone = ref('')
const precision = ref('')
const zone = ref('')
const surface = ref('')
const ouvrage = ref('')
const niveau = ref('')

function verifyEmail(email: string) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

function validateFormData(formData: Record<string, string>) {
  let isValid = true
  const invalidFields: any = []
  Object.entries(formData).forEach(([key, value]) => {
    if (key === 'precision') return
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

  const fromData = {
    nom: nom.value,
    prenom: prenom.value,
    profession: profession.value,
    adresse: adresse.value,
    email: email.value,
    telephone: telephone.value,
    precision: precision.value,
    zone: zone.value,
    surface: surface.value,
    ouvrage: ouvrage.value,
    niveau: niveau.value
  }

  if (!validateFormData(fromData)) return


  const token = await verifyCaptcha()

  const data = JSON.stringify({
    token: token,
    formName: "devis",
    formData: fromData
  })

  /// const apiUrl = import.meta.env.VITE_BACKEND_URL + '/api'
  const apiUrl = 'http://localhost:1337/api'

  fetch(`${apiUrl}/ezforms/submit`, { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: data })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
}
</script>
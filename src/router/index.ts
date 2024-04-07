import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AwardsView from '../views/AwardsView.vue'
import QuoteView from '../views/QuoteView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: HomeView
    },
    {
      path: '/qui-sommes-nous',
      name: 'qui-sommes-nous',
      component: AboutView
    },
    {
      path: '/prix-et-distinctions',
      name: 'prix-et-distinctions',
      // Awards and Recognition
      component: AwardsView
    },
    {
      path: '/devis',
      name: 'devis',
      component: QuoteView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Accueil' }
    }
  ]
})

export default router

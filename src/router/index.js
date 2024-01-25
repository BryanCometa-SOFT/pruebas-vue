import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Acordation from '../views/Acordation.vue'
import Charts from '../views/Charts.vue'
import Animations from '../views/Animations.vue'
import ChartsComponent from '../views/ChartsComponent.vue'
import Primevue from '../views/Primevue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/acordation',
    name: 'acordation',
    component: Acordation
  },
  {
    path: '/grafic',
    name: 'graficos',
    component: Charts
  },
  {
    path: '/grafic2',
    name: 'graficos',
    component: ChartsComponent
  },
  {
    path: '/animations',
    name: 'animaciones',
    component: Animations
  },
  {
    path: '/primevue',
    name: 'primevue',
    component: Primevue
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router

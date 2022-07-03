import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Character from '@/views/Character.vue'
import Characters from '@/views/Characters.vue'
import Weapon from '@/views/Weapon.vue'
import Weapons from '@/views/Weapons.vue'
import Equipement from '@/views/Equipment.vue'
import Equipements from '@/views/Equipments.vue'
import Banner from '@/views/Banner.vue'
import Banners from '@/views/Banners.vue'
import Ability from '@/views/Ability.vue'
import Abilitys from '@/views/Abilitys.vue'
import Notfound from '@/views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/character/:id',
      name: 'character',
      component: Character,
      meta: {
        title: 'character'
      }
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
      meta: {
        title: 'characters'
      }
    },
    {
      path: '/weapon/:id',
      name: 'weapon',
      component: Weapon,
      meta: {
        title: 'weapon'
      }
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: Weapons,
      meta: {
        title: 'weapons'
      }
    },
    {
      path: '/equipement/:id',
      name: 'equipement',
      component: Equipement,
      meta: {
        title: 'equipement'
      }
    },
    {
      path: '/equipements',
      name: 'equipements',
      component: Equipements,
      meta: {
        title: 'equipements'
      }
    },
    {
      path: '/banner/:id',
      name: 'banner',
      component: Banner,
      meta: {
        title: 'Banner'
      }
    },
    {
      path: '/banners',
      name: 'banners',
      component: Banners,
      meta: {
        title: 'Banners'
      }
    },
    ,
    {
      path: '/ability/:id',
      name: 'ability',
      component: Ability,
      meta: {
        title: 'ability'
      }
    },
    ,
    {
      path: '/abilitys',
      name: 'abilitys',
      component: Abilitys,
      meta: {
        title: 'abilitys'
      }
    },
    {
      name: 'Notfound',
      path: '/404',
      component:Notfound,
      meta:{
        title: '404'
      }
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title;
}); 

export default router;

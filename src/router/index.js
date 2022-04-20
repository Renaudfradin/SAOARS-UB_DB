import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import CharactersView from '../views/CharactersView.vue'
import WeaponView from '../views/WeaponView.vue'
import WeaponsView from '../views/WeaponsView.vue'
import EquipementView from '../views/EquipmentView.vue'
import EquipementsView from '../views/EquipmentsView.vue'
import BannerView from '../views/BannerView.vue'
import BannersView from '../views/BannersView.vue'
import Notfound from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView,
      meta: {
        title: 'character'
      }
    },
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView,
      meta: {
        title: 'characters'
      }
    },
    {
      path: '/weapon',
      name: 'weapon',
      component: WeaponView,
      meta: {
        title: 'weapon'
      }
    },
    {
      path: '/weapons',
      name: 'weapons',
      component: WeaponsView,
      meta: {
        title: 'weapons'
      }
    },
    {
      path: '/equipement',
      name: 'equipement',
      component: EquipementView,
      meta: {
        title: 'equipement'
      }
    },
    {
      path: '/equipements',
      name: 'equipements',
      component: EquipementsView,
      meta: {
        title: 'equipements'
      }
    },
    {
      path: '/banner',
      name: 'banner',
      component: BannerView,
      meta: {
        title: 'Banner'
      }
    },
    {
      path: '/banners',
      name: 'banners',
      component: BannersView,
      meta: {
        title: 'Banners'
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
  //console.log(from);
  document.title = to.meta.title;
}); 

export default router;

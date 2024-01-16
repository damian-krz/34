import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
      meta: {
        title: "HOMMIE"
      }
    }

  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} || 34VIDEOS`;
  next();
});

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Kontak from '../views/Kontak.vue'
import Menu from '../views/Menu.vue'
import Users from '../components/layout/Users.vue'
import Soal from '../components/layout/Soal.vue'
import AdminVue from '../components/layout/Admin.vue'

import store from '@/store'

const routes =  [
    {
      path: '/',
      name: 'home',
      component: Home,
      
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        requireGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{
        requireGuest: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        requiresLogin: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminVue,
      meta: {role: 'admin', requiresAdmin: true}
    },
    {
      path: '/users',
      name: 'tabelUsers',
      component: Users,
      meta: {role: 'admin', requiresAdmin: true}
    },
    {
      path: '/soal',
      name: 'Soal',
      component: Soal,
      meta: {role: 'admin', requiresAdmin: true}
    },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: Profile,
    //   meta:{
    //     requireGuest: true
    //   }
    // },
    {
      path: '/kontak',
      name: 'kontak',
      component: Kontak,
      meta:{
        requiresLogin: true
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta:{
        requiresLogin: true
      }
    },
   
  ]
  


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
      next("/");
  } else {
      next();
  }
})
router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const role = localStorage.getItem("role");

  if (to.meta.requiresLogin && !isAuthenticated) {
    // Redirect ke halaman login jika diperlukan login dan pengguna tidak terautentikasi
    next("/login");
  } else if (to.meta.requiresAdmin && role !== "admin") {
    // Redirect ke halaman dashboard admin jika diperlukan admin dan pengguna bukan admin
    next("/admin");
  } else if (to.meta.requiresUser && role !== "user") {
    // Redirect ke halaman home jika diperlukan user dan pengguna bukan user
    next("/");
  } else {
    // Continue with navigation
    next();
  }
});



export default router

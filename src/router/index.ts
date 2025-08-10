import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Register.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: { layout: 'main', title: '首页', icon: 'i-carbon-home' },
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/User.vue'),
      meta: { layout: 'main', title: '用户管理', icon: 'i-carbon-user' },
    },
    {
      path: '/role',
      name: 'Role',
      component: () => import('@/pages/Role.vue'),
      meta: { layout: 'main', title: '角色管理', icon: 'i-carbon-user-role' },
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('@/pages/Menu.vue'),
      meta: { layout: 'main', title: '菜单管理', icon: 'i-carbon-menu' },
    },

  // ...other routes, all with meta: { layout: 'main' }
  ],
})

export default router

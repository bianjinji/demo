import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/login/Login.vue';
import Main from '../views/main/Main.vue';
import notFound from '../views/notFound/not-found.vue';
import overview from '../views/main/analysis/overview/overview.vue';
import dashboard from '../views/main/analysis/dashboard/dashboard.vue';
import userManagement from '../views/main/system/user-management/user-management.vue';
import departmentManagement from '../views/main/system/department-management/department-management.vue';
import menuManagement from '../views/main/system/menu-management/menu-management.vue';
import roleManagement from '../views/main/system/role-management/role-management.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
    },
    {
      name: 'main',
      path: '/main',
      component: Main,
      children: [
        {
          name: 'overview',
          path: 'analysis/overview',
          component: overview,
        },
        {
          name: 'dashboard',
          path: 'analysis/dashboard',
          component: dashboard,
        },
        {
          name: 'user-management',
          path: 'analysis/user-management',
          component: userManagement,
        },
        {
          name: 'department-management',
          path: 'analysis/department-management',
          component: departmentManagement,
        },
        {
          name: 'menu-management',
          path: 'analysis/menu-management',
          component: menuManagement,
        },
        {
          name: 'role-management',
          path: 'analysis/role-management',
          component: roleManagement,
        },
      ],
    },
    {
      path: '/:patchMatch(.*)',
      component: notFound,
    },
  ],
});

export default router;
import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/table',
      component: 'Table',
    },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: 'home', component: '@/pages/Home' },
        { path: 'access', component: '@/pages/Access' },
      ],
    },
  ],
  npmClient: 'pnpm',
});

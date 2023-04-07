import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: (_routes) => [
    ..._routes,
    {
      name: 'xxx',
      path: '/xxx',
      component: () => import('~/pages/users/index.vue').then(r => r.default || r)

    },
    {
      name: 'yyy',
      path: '/yyy',
      component: () => import('~/pages/users/create-or-edit.vue').then(r => r.default || r)
    },
    {
      name: 'zzz',
      path: '/zzz',
      redirect: '/users'
    }
  ]
}
import { createRouter, createWebHashHistory } from 'vue-router'
const Blog = () => import(/* webpackChunkName: "Blog" */ '@/components/Blog/Blog')
const routes = [{
  path: '/',
  name: 'feed',
  component: Blog
}, {
  path: '/by/:author',
  name: 'author',
  props: true,
  component: Blog
}, {
  path: '/read/:post',
  name: 'post',
  props: true,
  component: Blog
}]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes // short for `routes: routes`
})

export default router

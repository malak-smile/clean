import Vue from 'vue';
import VueRouter from 'vue-router';

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
const Index = () => import('@/views/index.vue')
const Data = () => import('@/views/data.vue')
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    title: '首页',
    component: Index
  },
  {
    path: '/data',
    name: 'data',
    title: '首页',
    component: Data
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* 404 */ '../views/404'),
  },
]
const linkVersion = window.location.pathname.match(/^\/(v\d{6}(-\d)?)/)
const testVersion = window.location.pathname.match(/^\/(f-\w+)/)
const rootPath = linkVersion ? linkVersion[1] : (testVersion ? testVersion[1] : '/')
console.log(rootPath);
const router = new VueRouter({
  el: '#app',
  mode: 'history',
  base: '/',
  routes
})
export default router

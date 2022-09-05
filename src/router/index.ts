import { def } from "@vue/shared";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"


const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('../Views/Home/Home.vue') },
  { path: '/my', component: () => import('../Views/MyMinuse/MyMinuse.vue') },
  { path: '/friend', component: () => import('../Views/Friend/Friend.vue') },
  { path: '/download', component: () => import('../Views/DownLoad/DownLoad.vue') }
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
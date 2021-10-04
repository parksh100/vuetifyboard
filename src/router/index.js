import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Grid from '../views/Grid.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/grid', name: 'Grid', component: Grid },
];

const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`
});

export default router;

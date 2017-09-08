// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import sellers from 'components/sellers/sellers';
import ratings from 'components/ratings/ratings';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/', component: goods},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/sellers', component: sellers}
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

// export default router;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Team from './views/Team.vue';
import Aktuelles from './views/Aktuelles.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/unternehmen/team',
      name: 'team',
      component: Team
    },
    {
      path: '/unternehmen/aktuelles',
      name: 'aktuelles',
      component: Aktuelles
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Team from './views/Team.vue';
import Aktuelles from './views/Aktuelles.vue';
import Projekte from './views/Projekte.vue';
import Fertiggestellte_projekte from './views/Fertiggestellte_projekte.vue'
import Projekte_in_bau from './views/Projekte_in_bau.vue'
import Projekte_in_planung from './views/Projekte_in_planung.vue'
import Referenzen from './views/Referenzen.vue'
import Investments from './views/Investments.vue'
import Partners from './views/Partners.vue'

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
    },
    {
      path: '/projekte',
      name: 'projekte',
      component: Projekte
    },
    {
      path: '/projekte/fertiggestellte-projekte',
      name: 'fertiggestellte-projekte',
      component: Fertiggestellte_projekte
    },
    {
      path: '/projekte/projekte-in-bau',
      name: 'projekte-in-bau',
      component: Projekte_in_bau
    },
    {
      path: '/projekte/projekte-in-planung',
      name: 'projekte-in-planung',
      component: Projekte_in_planung
    },
    {
      path: '/projekte/referenzen',
      name: 'referenzen',
      component: Referenzen
    },
    {
      path: '/investments',
      name: 'investments',
      component: Investments
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    }
  ]
})

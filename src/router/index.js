import Vue from 'vue'
import Router from 'vue-router'
import LaboratoryPage from '../components/Laboratory/LaboratoryPage'
import CollectionPage from '../components/Collection/CollectionPage'
import HistoryPage from "../components/Laboratory/HistoryPage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'laboratory',
      path: '/',
      component: LaboratoryPage,
    },
    {
      name: 'collection',
      path: '/collection',
      component: CollectionPage
    },
    {
      name: 'history',
      path: '/history/:id',
      component: HistoryPage,
      props: true
    }
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuex from 'vuex'
import {config} from "shelljs";


Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
// Vue.prototype.host = 'https://popular-yak-41.serverless.social/api/v1/images/'
// Vue.prototype.host = process.end.VUE_APP_API_URL

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activePhoto: null,
    activeFilter: null,
    // apiUrl: process.env.VUE_APP_API_URL
  },
  mutations: {
    filter (state, filterId) {
      state.activeFilter = filterId
    },
    photo (state, photoId) {
      state.activePhoto = photoId
    }
  }
})

async function getUrlConfig () {
  const tempP = await axios.get(location.origin + '/static/public/config.json')
  // Vue.prototype.$config = tempP.data
  return tempP.data
}

async function initApplication() {
  try {
    const config = await getUrlConfig()
    Vue.prototype.$config = config
  } catch (error) {
    console.log(error)
  }
  new Vue({
    el: '#app',
    store: store,
    router,
    components: { App },
    template: '<App/>'
  })
}

initApplication()

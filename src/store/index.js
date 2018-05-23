'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import register from './register'
import common from './common'
import login from './login'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    register: register,
    common:common,
    login:login
  }
})
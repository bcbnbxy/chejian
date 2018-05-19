'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import register from './register'
import common from './common'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    register: register,
    common:common
  }
})
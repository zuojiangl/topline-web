import Vue from 'vue'
import Vuex from 'vuex'
import * as storageTools from '@/utils/localStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 项目运行时，先去本地储存中获取登录状态
    user: storageTools.getItem('user')
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {

  }
})

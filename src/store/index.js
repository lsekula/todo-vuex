import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './modules/tasks'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    tasks
  },
  strict: debug
})

import Vue from 'vue'
import Vuex from 'vuex'
import slides from '../slides'

Vue.use(Vuex)

const state = {
  slides,
  currentIndex: 0,
  windowSize: {
    height: window.innerHeight,
    width: window.innerWidth
  }
}

const mutations = {
  NEXT (state) {
    const max_idx = state.slides.length - 1
    const current = state.currentIndex
    if (current < max_idx) {
      state.currentIndex = current + 1
    }
  },
  PREVIOUS (state) {
    const current = state.currentIndex
    if (current > 0) {
      state.currentIndex = current - 1
    }
  },
  RESIZE (state) {
    state.windowSize = {
      height: window.innerHeight,
      width: window.innerWidth
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})

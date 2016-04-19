<template>
  <div v-bind:style="scene" id="impress">
    <slide 
      v-for="slide in slides" 
      :conf = "slide.style"
      :content = "slide.content"
    ></slide>
  </div>
</template>

<style>
body {
  font-family: Helvetica, sans-serif;
  overflow: hidden;
  background-color: #e0e0e0
}

#impress {
  position:absolute;
  box-sizing:border-box;
  transition: all 1s ease-in-out;
}
</style>

<script>
import slide from './slide.vue'
import store from './vuex/store'
import {slides, scene} from './vuex/getters'
import {nextSlide, prevSlide, resize} from './vuex/actions'

export default {
  vuex: {
    getters: {
      slides,
      scene
    },
    actions: {
      next: nextSlide,
      prev: prevSlide,
      resize: resize
    }
  },
  components: {
    slide
  },
  store,
  created() {
    const vm = this;
    window.addEventListener('resize', () => vm.resize())
    document.addEventListener('keydown', (e) => {
      switch(e.keyCode){
        case 37:
            vm.prev()
            e.preventDefault()
            break
        case 39:
            vm.next()
            e.preventDefault()
            break
        default:
            console.log('other keys: ' + e.keyCode)
            return
      }
    })
  }
}
</script>


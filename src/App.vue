<template>
  <div v-bind:style="scene" id="impress">
    <slide 
      v-for="slide in slides" 
      :conf = "slide.style"
      :content = "slide.content"
    ></slide>
  </div>
  <div id="prompt" v-show="prompt">
    <p>Use Arrow keys to navigate</p>
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

a:link{
  color: black;
  text-decoration: none;
  background-color: whitesmoke;
  border-radius: 5px;
}

a:visited{
  color: black;
}

#prompt{
  font-size: 48px;
  text-align: center;
  background-color: rgba(0,0,0,0.15)
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
  data() {
    return {
      prompt: true
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
      if (this.prompt) {
        this.prompt = false
      }
      switch(e.keyCode){
        case 37:
        case 38:
            vm.prev()
            e.preventDefault()
            break
        case 39:
        case 40:
            vm.next()
            e.preventDefault()
            break
        default:
            return
      }
    })
  }
}
</script>


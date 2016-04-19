export const nextSlide = function ({dispatch}) {
  dispatch('NEXT')
}

export const prevSlide = function ({dispatch}) {
  dispatch('PREVIOUS')
}

export const resize = function ({dispatch}) {
  dispatch('RESIZE')
}

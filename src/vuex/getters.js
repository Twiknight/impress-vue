const emptyStr = ''

export function slides (state) {
  return state.slides.map((s, idx) => {
    // tranlate
    const x = s.x || 0
    const y = s.y || 0
    const _location = x || y ? `translate(${x}px,${y}px)` : emptyStr

    // rotate
    const deg = s.rotate || 0
    const _rotate = deg !== 0 ? `rotate(${deg}deg)` : emptyStr

    // scale
    const size = s.scale || 1
    const _scale = size !== 1 ? `scale(${size})` : emptyStr

    let opacity = 1
    if (state.currentIndex !== state.slides.length - 1) {
      opacity = state.currentIndex === idx ? '1' : '0.3'
    }

    return {
      style: Object.assign({
        transform: ['translateZ(0)', _location, _rotate, _scale].join(' '),
        opacity: opacity
      }, s.style),
      content: s.content || ''
    }
  })
}

export function scene (state) {
  const active = state.slides[state.currentIndex]

  const windowWidth = state.windowSize.width
  const windowHeight = state.windowSize.height
  const slideWidth = active.style._width
  const slideHeight = active.style._height

  // tranlate
  const x = active.x || 0
  const y = active.y || 0
  const _x = windowWidth * 0.5 - (x + slideWidth * 0.5)
  const _y = windowHeight * 0.5 - (y + slideHeight * 0.5)
  const _location = `translate(${_x}px,${_y}px)`

  // rotate
  const deg = active.rotate || 0
  const _rotate = deg !== 0 ? `rotate(${-deg}deg)` : emptyStr

  // scale
  const size = active.scale || 1
  const compensation = Math.min(windowWidth / slideWidth,
                          windowHeight / slideHeight)
  const _size = 1 / size * compensation * 0.8
  const _scale = _size !== 1 ? `scale(${_size})` : emptyStr

  return {
    transform: [_location, _rotate, _scale].join(' '),
    transformOrigin: `${x + slideWidth * 0.5}px ${y + slideHeight * 0.5}px`
  }
}

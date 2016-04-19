import bored from './bored.md'
import stereotype from './stereotype.md'
import vue from './vue.md'
import limits from './limits.md'
import stun from './stun.md'

const overviewConfig = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  style: {
    _width: 6000,
    _height: 3000,
    get width () {
      return this._width
    },
    get height () {
      return this._height
    }
  }
}

const classicConfig = {
  style: {
    _width: 900,
    _height: 700,
    get width () { return this._width + 'px' },
    get height () { return this._height + 'px' },
    padding: '40px 60px',
    fontSize: '50px',
    lineHeight: '72px',
    letterSpacing: '-1px',
    border: '1px solid rgba(0,0,0.0.3)',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,.1)',
    backgroundColor: 'white',
    transitionDelay: '0.5s'
  }
}

const overViewScene = Object.assign({content: ''}, overviewConfig)

const boredSlide = Object.assign({content: bored},
  {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 0.5
  }, classicConfig)

const limitsSlide = Object.assign({content: limits},
  {
    x: 485,
    y: 0,
    rotate: 0,
    scale: 0.5
  }, classicConfig
)

const stunSlide = Object.assign({content: stun},
  {
    x: 970,
    y: 0,
    rotate: 0,
    scale: 0.5
  }, classicConfig
)

export default [
  boredSlide,
  limitsSlide,
  stunSlide,
  overViewScene
]

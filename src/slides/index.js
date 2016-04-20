import bored from './bored.md'
import limits from './limits.md'
import stun from './stun.md'
import impress from './impress.md'
import description from './description.md'
import but from './but.md'
import easy from './easy.md'
import vue from './vue.md'
import knowMore from './know_more.md'

const overviewConfig = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  style: {
    _width: 6000,
    _height: 3000,
    get width () {
      return `${this._width}px`
    },
    get height () {
      return `${this._height}px`
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

const modernConfig = {
  style: {
    _width: 900,
    get width () {
      return `${this._width}px`
    },
    _height: 700,
    get height () {
      return `${this._height}px`
    },
    fontSize: '48px',
    lineHeight: '1.5'
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
  }, classicConfig)

const stunSlide = Object.assign({content: stun},
  {
    x: 970,
    y: 0,
    rotate: 0,
    scale: 0.5
  }, classicConfig)

const impressScene = Object.assign({content: impress},
  {
    x: 485,
    y: 700,
    rotate: 0,
    scale: 1.5
  }, modernConfig)

const descriptionScene = Object.assign({content: description},
  {
    x: 550,
    y: 1500,
    rotate: 90,
    scale: 1.5
  }, modernConfig)

const butScene = Object.assign({content: but},
  {
    x: 1600,
    y: 0,
    rotate: -90,
    scale: 1
  }, modernConfig)

const easyScene = Object.assign({content: easy},
  {
    x: 2000,
    y: 900,
    rotate: 180,
    scale: 2
  }, modernConfig)

const vueScene = Object.assign({content: vue},
  {
    x: 2500,
    y: 0,
    rotate: -45,
    scale: 1
  }, modernConfig)

const knowMoreScene = Object.assign({content: knowMore},
  {
    x: 3300,
    y: 800,
    rotate: 45,
    scale: 2
  }, modernConfig)

export default [
  boredSlide,
  limitsSlide,
  stunSlide,
  impressScene,
  descriptionScene,
  butScene,
  easyScene,
  vueScene,
  knowMoreScene,
  overViewScene
]

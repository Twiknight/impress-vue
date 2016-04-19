import bored from './bored.md'
import stereotype from './stereotype.md'
import vue from './vue.md'

const defaultConfig = {
  style: {
    _width: 600,
    _height: 400,
    get width () { return this._width + 'px' },
    get height () { return this._height + 'px' },
    padding: '40px 60px',
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-1px',
    opacity: '.7',
    textAlign: 'center'
  }
}

export default [
  Object.assign({
    content: bored
  }, {
    x: 0,
    y: 0,
    rotate: 90,
    scale: 1
  }, defaultConfig),
  Object.assign({
    content: stereotype
  }, {
    x: 800,
    y: 400,
    rotate: 0,
    scale: 1
  }, defaultConfig),
  Object.assign({
    content: vue
  }, {
    x: 800,
    y: 400,
    rotate: 60,
    scale: 0.01
  }, defaultConfig)
]

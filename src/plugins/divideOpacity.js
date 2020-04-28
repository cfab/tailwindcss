import createUtilityPlugin from '../util/createUtilityPlugin'

export default function() {
  return function({ target, ...args }) {
    if (target('divideOpacity') === 'ie11') {
      return
    }

    createUtilityPlugin('divideOpacity', [['divide-opacity', ['--divide-opacity']]])({
      target,
      ...args,
    })
  }
}

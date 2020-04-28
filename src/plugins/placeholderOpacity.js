import createUtilityPlugin from '../util/createUtilityPlugin'

export default function() {
  return function({ target, ...args }) {
    if (target('placeholderOpacity') === 'ie11') {
      return
    }

    createUtilityPlugin('placeholderOpacity', [
      ['placeholder-opacity', ['--placeholder-opacity']],
    ])({ target, ...args })
  }
}

import trap from 'mousetrap'

export default function shortcut(keys, fn) {
  trap.bind(keys, function(e) {
    return fn(), false
  })
}
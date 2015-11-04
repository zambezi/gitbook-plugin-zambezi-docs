export default { get, set }

export function set(key, value) {
  try {
    localStorage[ns(key)] = JSON.stringify(value)
  } catch(e) {}
}

export function get(key, def) {
  var val = localStorage[ns(key)]

  if (val === undefined) return def

  try {
    var parsed = JSON.parse(val)
    return parsed == null? def : parsed
  } catch(e) {
    return val || def
  }
}

function ns(key) {
  return 'zambezi-docs:' + key
}
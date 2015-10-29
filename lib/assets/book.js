;(function(localStorage) {
  toggleSummary(get('with-summary', true))

  d3.select('.summary-toggle')
    .on('click', function(e) {
      d3.event.preventDefault()
      toggleSummary()
    })

  function toggleSummary(value) {
    var book = d3.select('.book')

    if (value === undefined) {
      value = !get('with-summary', true)
    } else {
      value = !!value
    }

    book.classed('with-summary', value)
    set('with-summary', value)
  }

  function set(key, value) {
    try {
      localStorage[ns(key)] = JSON.stringify(value)
    } catch(e) {}
  }

  function get(key, def) {
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
})(localStorage || {})
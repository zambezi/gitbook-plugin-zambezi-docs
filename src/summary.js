import { get, set } from './settings'
import shortcut from './shortcut'
import d3 from 'd3'

toggleSummary(get('with-summary', true))

shortcut(['s'], toggleSummary)

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
import { get, set } from './settings'
import d3 from 'd3'

d3.select('.summary-toggle')
  .on('click', function(e) {
    d3.event.preventDefault()
    toggle()
  })

export function toggle(value) {
  var book = d3.select('.book')

  if (value === undefined) {
    value = !get('with-summary', true)
  } else {
    value = !!value
  }

  book.classed('with-summary', value)
  set('with-summary', value)
}
import { toggle as toggleSummary } from './summary'
import shortcut from './shortcut'
import { get } from './settings'
import d3 from 'd3'

toggleSummary(get('with-summary', true))

shortcut(['s'], toggleSummary)

registerNav('left', 'prev')
registerNav('right', 'next')

function registerNav(key, rel) {
  d3.select(`[rel=${rel}]`).call(sel => {
    if (sel.empty()) return

    let a = sel.node()
    shortcut([key], () => a.click())
  })
}
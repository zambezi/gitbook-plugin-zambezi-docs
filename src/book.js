import { toggle as toggleSummary } from './summary'
import { get } from './settings'

toggleSummary(get('with-summary', true))
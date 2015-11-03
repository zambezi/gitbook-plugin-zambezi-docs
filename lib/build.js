module.exports = build

function build() {
  var debug = process.env.DEBUG === '1'
    , timer = stopwatch(this, 'total')

  debug && timer.start()
  var build = Promise.all(seq([js, css], this, !!debug))
  debug && build.then(timer.end)
}

const js   = require('./build/js')
    , css  = require('./build/css')

function seq(tasks, book, debug) {
  return tasks.map(function(task) {
    var timer = stopwatch(book, task.name)
    debug && timer.start()
    var proc = Promise.resolve(task(book, debug))
    debug && proc.then(timer.end)

    return proc
  })
}

function stopwatch(book, id) {
  var past

  return { start: start, end: end }

  function start() {
    return (past = process.hrtime())
  }

  function end() {
    var diff = process.hrtime(past)
      , ms   = (diff[0] + diff[1] / 1e9).toPrecision(3)

    return book.log.info.ok(id + ': ' + ms + 's')
  }
}

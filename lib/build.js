module.exports = build

function build() {
  var debug = process.env.DEBUG === '1'
    , timer = stopwatch(this, 'total')

  debug && timer.start()

  this.options = Object.assign(this.options, config(this))

  return Promise.all(seq([gh, css], this, !!debug))
    .then(function() {
      debug && timer.end()
    })
    .catch(this.log.error.fail)
}

const gh   = require('./build/github')
    , css  = require('./build/css')

function seq(tasks, book, debug) {
  return tasks.map(function(task) {
    var timer = stopwatch(book, task.name)
    debug && timer.start()
    var proc = Promise.resolve(task(book, debug)).catch(book.log.debug)
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

function config(book) {
  var config = book.config.get('pluginsConfig.zambezi-docs') || {}

  config.logo = require('fs').readdirSync(book.root)
    .filter(function(file) {
      var ext   = require('path').extname
        , base  = require('path').basename
        , name  = base(file, ext(file)).toLowerCase()
        , isImg = require('is-image')

      return name === 'logo' && isImg(file)
    })[0]

  return Object.assign(defaults, config)
}

const defaults = (function(pkg) {
  var logo  = pkg.gitbook.properties.logo.default
    , color = pkg.gitbook.properties.color.default

  return { logo: logo, color: color }
})(require('../package.json'))
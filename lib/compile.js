module.exports = compile

function compile(book) {
  var debug = process.env.DEBUG === '1'

  js(book, debug)
  css(book, debug)
}

function css(book, debug) {
  var cc      = require('cssnext')
    , dump    = require('fs').writeFileSync
    , slurp   = require('fs').readFileSync
    , config  = require('./config')(book)

  var source = resolve('../src/styles.css')
    , target = resolve('../lib/assets/styles.css')

  var input  = slurp(source, 'utf8').replace('${color}', config.color)
    , output = cc(input, { sourcemap: debug, from: source })

  dump(target, output, 'utf8')
}

function js(book, debug) {
  var cc  = require('browserify')
    , es6 = require('babelify')

  cc(resolve('../src/book.js'), { debug: debug })
    .transform(es6)
    .bundle()
    .pipe(file('./assets/book.js'))
}

function resolve(path) {
  return require('path').resolve(__dirname, path)
}

function file(path) {
  var write = require('fs').createWriteStream
  return write(resolve(path))
}
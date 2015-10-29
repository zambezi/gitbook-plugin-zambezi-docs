module.exports = compile

function compile(book) {
  js(book)
  css(book)
}

function css(book) {
  var dump    = require('fs').writeFileSync
    , slurp   = require('fs').readFileSync
    , config  = require('./config')(book)
    , compile = require('cssnext')

  var source = resolve('../src/styles.css')
    , target = resolve('../lib/assets/styles.css')

  var input  = slurp(source, 'utf8').replace('${color}', config.color)
    , output = compile(input, { from: source })

  dump(target, output, 'utf8')
}

function js(book) {
  var cc  = require('browserify')
    , es6 = require('babelify')

  cc(resolve('../src/book.js'), { debug: process.env.DEBUG === '1' })
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
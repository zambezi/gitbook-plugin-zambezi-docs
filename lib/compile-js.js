module.exports = compile

function compile(book) {
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
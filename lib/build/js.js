module.exports = js

function js(book, debug) {
  var cc  = require('browserify')
    , es6 = require('babelify')

  return new Promise(function(ok, err) {
    var target = file('../assets/book.js')

    target.once('finish', ok)
    target.once('error', err)
    
    cc(resolve('../../src/book.js'), { debug: !!debug })
      .transform(es6)
      .bundle()
      .pipe(target)
  })
}

function resolve(path) {
  return require('path').resolve(__dirname, path)
}

function file(path) {
  var write = require('fs').createWriteStream
  return write(resolve(path))
}
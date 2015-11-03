module.exports = css

function css(book, debug) {
  var dump    = require('fs').writeFileSync
    , slurp   = require('fs').readFileSync

  var source = resolve('../../src/styles.css')
    , target = resolve('../assets/styles.css')

  return cc.process(
    slurp(source, 'utf8')
      .replace('${color}', book.options.color)
      .replace('${logo}', book.options.logo),
    { from  : source
    , to    : target
    , map   : !!debug
    , async : true
    }).then(function(output) {
      dump(target, output.css, 'utf8')
    })
}


function resolve(path) {
  return require('path').resolve(__dirname, path)
}

function file(path) {
  var write = require('fs').createWriteStream
  return write(resolve(path))
}

const cc = require('postcss')(
  [ require('postcss-import')({ async: true })
  , require('postcss-cssnext')()
  ]
)
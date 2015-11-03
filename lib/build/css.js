module.exports = css

function css(book, debug) {
  var dump    = require('fs').writeFileSync
    , slurp   = require('fs').readFileSync
    , config  = require('./config')(book)

  var source = resolve('../../src/styles.css')
    , target = resolve('../assets/styles.css')

  var input  = slurp(source, 'utf8').replace('${color}', config.color)

  return cc.process(input,
    { from  : source
    , to    : target
    , map   : !!debug
    , async : true
    }).then(function(output) {
      dump(target, output.css, 'utf8')
    }).catch(console.error.bind(console))
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
  , require('autoprefixer')()
  , require('postcss-custom-properties')()
  , require('postcss-calc')()
  , require('postcss-pseudoelements')()
  , require('pixrem')
  ]
)
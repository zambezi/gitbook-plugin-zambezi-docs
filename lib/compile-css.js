module.exports = compile

function compile(book) {
  var dump    = require('fs').writeFileSync
    , slurp   = require('fs').readFileSync
    , config  = require('./config')(book)
    , resolve = require('path').resolve
    , compile = require('cssnext')

  var source = resolve(__dirname, '../src/styles.css')
    , target = resolve(__dirname, '../lib/assets/styles.css')

  var input  = slurp(source, 'utf8').replace('${color}', config.color)
    , output = compile(input, { from: source })

  dump(target, output, 'utf8')
}
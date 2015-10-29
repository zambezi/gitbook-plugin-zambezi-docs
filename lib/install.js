module.exports = install

function install(dependency) {
  var name    = require('path').basename
    , dump    = require('fs').writeFileSync
    , slurp   = require('fs').readFileSync
    , resolve = require.resolve
    , baseDir = __dirname + '/../node_modules/'


  var source = resolve(baseDir + dependency)
    , target = __dirname + '/assets/' + name(dependency)

  dump(target, slurp(source, 'utf8'), 'utf8')
}
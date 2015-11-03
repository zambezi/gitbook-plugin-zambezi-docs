module.exports = config

var defaults = (function(pkg) {
  var logo  = pkg.gitbook.properties.logo.default
    , color = pkg.gitbook.properties.color.default

  return { logo: logo, color: color }
})(require('../../package.json'))

function config(book) {
  var config = book.config.get('pluginsConfig.zambezi-docs')
  return Object.assign(defaults, config || {})
}
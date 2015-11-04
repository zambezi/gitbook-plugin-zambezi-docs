module.exports = logo

function logo(page) {
  var logo = this.options.logo

  if (!logo) return page

  if (page.path.toLowerCase() === 'readme.md') {
    var img = RegExp('^!\\[.+?\\]\\((' + logo + '.*?)\\)', 'i')

    page.content = page.content.split('\n').reduce(function(content, line) {
      if (img.exec(line)) {
        return content
      }

      return content + line + '\n'
    }, '')
  }

  return page
}

const $ = require('../promify')

function empty(x) { return !!x }
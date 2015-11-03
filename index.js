exports.website =
  { assets : "./lib/assets"
  , css    : [ "styles.css" ]
  , js     : [ "book.js"    ]
  }

exports.hooks =
  { init: require('./lib/build')
  }

exports.templates =
  { "site:page"     : "./src/page.html"
  , "site:langs"    : "./src/langs.html"
  , "site:glossary" : "./src/glossary.html"
  }
module.exports = {
  // Extend website resources and html
  website: {
    assets: "./lib/assets",

    css: [
      "styles.css"
    ],

    js: [
      "d3.min.js",
      "book.js"
    ]
  },

  hooks: {
    init: function() {
      require('./lib/github')(this)
      require('./lib/install')('d3/d3.min.js')
      require('./lib/compile-css')(this)
    }
  },

  templates: {
    "site:page" : "./src/page.html",
    "site:glossary" : "./src/glossary.html",
    "site:langs" : "./src/langs.html"
  }
}
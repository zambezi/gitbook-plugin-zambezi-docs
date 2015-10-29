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
    ],

    html: {
      "html:start": function() {
          return "<!-- Start book "+this.options.title+" -->"
      },
      "html:end": function() {
          return "<!-- End of book "+this.options.title+" -->"
      },

      "head:start": "<!-- head:start -->",
      "head:end": "<!-- head:end -->",

      "body:start": "<!-- body:start -->",
      "body:end": "<!-- body:end -->"
    },
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
module.exports = {
  // Extend website resources and html
  website: {
    assets: "./lib/assets",

    css: [
      "style.css"
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

  templates: {
    "site:page" : "./src/templates/page.html",
    "site:glossary" : "./src/templates/glossary.html",
    "site:langs" : "./src/templates/langs.html"
  }
}
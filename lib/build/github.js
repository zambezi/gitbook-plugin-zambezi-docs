module.exports = github

function github(book) {
  return Promise.all(
    [ $(require('parse-git-config'))()
    , $(require('git-branch'))()
    ,]
  ).then(function(info) {
    var config = info[0]
      , branch = info[1]
      , origin = config['remote "origin"']
      , github = require('parse-github-url')(origin.url)

    if (github) {
      github.branch = branch
      book.options.github = github
    }
  })
}

const $ = require('../promify')
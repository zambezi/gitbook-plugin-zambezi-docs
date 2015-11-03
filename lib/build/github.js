module.exports = github

function github(book) {
  var parse = require('parse-github-url')

  try {
    var github = parse(getRemoteURL(book))

    if (github) {
      github.branch = getBranch(book)
      book.options.github = github
    }
  } catch (e) {}
}

function getRemoteURL(book) {
  return sh(book, 'git config --get remote.origin.url')
}

function getBranch(book) {
  return sh(book, 'git rev-parse --abbrev-ref HEAD').slice(0, -1)
}

function sh(book, cmd) {
  var exec = require('child_process').execSync
  return exec(cmd, { cwd: book.root, encoding: 'utf8' })
}
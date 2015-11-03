module.exports = promify

function promify(fn) {
  return function() {
    var args = [].slice.call(arguments, 1)
    return new Promise(function(ok, fail) {
      fn.apply(null, args.concat(function(err, res) {
        if (err) {
          return fail(err)
        } else {
          return ok(res)
        }
      }))
    })
  }
}
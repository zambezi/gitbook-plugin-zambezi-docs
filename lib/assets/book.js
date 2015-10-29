d3.select('.summary-toggle')
  .on('click', function(e) {
    d3.event.preventDefault()
    var book = d3.select('.book')
    book.classed('with-summary', !book.classed('with-summary'))
  })

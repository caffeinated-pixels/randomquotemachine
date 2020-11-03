$(document).ready(function() {
  console.log('Hello World!')

  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => console.log(data))

  function genQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/', // base url
      jsonp: 'jsonp', // sets the callback name for jsonp datatype (below)
      dataType: 'jsonp', // adds jsonp=? instead of callback=?
      data: {
        // these get added to the end of the URL as parameters
        method: 'getQuote', // adds method=getQuote
        lang: 'en', // adds lang=en
        format: 'jsonp' // add format=jsonp
      }
      // so full URL = https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?
    })
      .done(function(data) {
        quote = data.quoteText
        console.log(data)
        quoteUrl = data.quoteLink
        if (!data.quoteAuthor) {
          // in case no author is named (emtpy string is falsy value)
          author = 'Anonymous'
        } else {
          author = data.quoteAuthor
        }
        $('.quote').html(data.quoteText)
        $('.author').html('&#8212\xa0\xa0' + author)
      })
      .fail(function(err) {
        console.log('Error: ' + err.status)
        $('.quote').html('Whoops... try again!') // in case json doesn't load
      })
  }

  // genQuote()
})

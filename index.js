$(document).ready(function() {
  const newQuote = () => {
    fetch('https://api.quotable.io/random')
      // only a successful request will supply a response.ok
      .then(response => (response.ok ? response.json() : console.log('balls')))
      .then(data => {
        $('#text').html(data.content)
        $('#author').html(`&#8212\xa0\xa0${data.author}`)
      })
      .catch(error => console.log(error)) // only rejects on network errors (see above)
  }

  newQuote() // automatically retrieves first random quote from API

  $('#new-quote').on('click', () => newQuote()) // get new quote from api
  $('#tweet-quote').on('click', () => {
    const quote = $('#text').text()
    const author = $('#author').text()

    const twtLink =
      'http://twitter.com/intent/tweet?text=' +
      encodeURIComponent(`"${quote}"  ${author}`)
    // encodeURIComponent('alan')
    window.open(twtLink, '_blank')
  })
})

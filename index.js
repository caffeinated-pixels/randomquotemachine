$(document).ready(function() {
  const newQuote = () => {
    fetch('https://api.quotable.io/random')
      // only a successful request will supply a response.ok
      .then(response => (response.ok ? response.json() : console.log('balls')))
      .then(data => {
        // display quote and author on page

        $('#text').fadeOut(750, () => {
          $('#text').html(data.content)
          $('#text').fadeIn(1000)
        }) // need to use callback so it waits for fadeOut to finish!

        $('#author').fadeOut(750, () => {
          $('#author').html(`&#8212\xa0\xa0${data.author}`)
          $('#author').fadeIn(4000)
        })

        // $('#text').html(data.content)

        // $('#author').html(`&#8212\xa0\xa0${data.author}`)

        // update href of tweet button
        $('#tweet-quote').attr(
          'href',
          'http://twitter.com/intent/tweet?text=' +
            encodeURIComponent(`"${data.content}" — ${data.author}`)
        )
      })
      .catch(error => console.log(error)) // only rejects on network errors (see above)
  }

  newQuote() // automatically retrieves first random quote from API

  $('#new-quote').on('click', () => newQuote()) // get new quote from api
  // $('#tweet-quote').on('click', () => {
  //   const quote = $('#text').text()
  //   const author = $('#author').text()
  //
  //   const twtLink =
  //     'http://twitter.com/intent/tweet?text=' +
  //     encodeURIComponent(`"${quote}"  ${author}`)
  //   // encodeURIComponent('alan')
  //   window.open(twtLink, '_blank')
  // })
})

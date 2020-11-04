$(document).ready(function() {
  const colors = [
    // for changing text color; jQuery converts colors to RGB (see below)
    'rgb(22, 160, 133)',
    'rgb(39, 174, 96)',
    'rgb(109, 217, 33)',
    'rgb(255, 153, 0)',
    'rgb(231, 76, 60)',
    'rgb(155, 89, 182)',
    'rgb(251, 105, 100)',
    'rgb(115, 0, 224)',
    'rgb(0, 153, 255)',
    'rgb(153, 0, 0)',
    'rgb(252, 0, 100)',
    'rgb(44, 19, 255)'
  ]

  const newQuote = () => {
    fetch('https://api.quotable.io/random')
      // only a successful request will supply a response.ok
      .then(response => (response.ok ? response.json() : console.log('balls')))
      .then(data => {
        //select random color without repeating previous color
        const oldColor = $('#text').css('color') // get prev color (always returns RGB)
        const updatedColors = [...colors].filter(item => item !== oldColor) // remove prev col
        console.log(oldColor, updatedColors.length)
        const color = Math.floor(Math.random() * updatedColors.length) // random color

        // display quote and author on page using fade animations
        $('#text').fadeOut(750, () => {
          $('#text')
            .html(data.content)
            .css('color', updatedColors[color]) // change color
          $('#text').fadeIn(1000)
        }) // need to use callback so it waits for fadeOut to finish!

        $('#author').fadeOut(750, () => {
          $('#author').html(`&#8212\xa0\xa0${data.author}`)
          $('#author').fadeIn(3000)
        }) // need to use callback so it waits for fadeOut to finish!

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

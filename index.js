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

  const getQuote = () => {
    const errorMsg = updateText('Opps something went wrong')

    fetch('https://api.quotable.io/random')
      // response.ok = true if response successful
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.log(`Response error is: ${response.status}`)
          return errorMsg
        }
      })
      .then(data => (data ? updateText(data.content, data.author) : null))
      .catch(error => {
        console.log(`Caught error is: ${error}`)
        return errorMsg
      }) // Promise is only rejected for network errors (eg host not found), not client client errors (eg 4xx, 5xx)
  }

  const updateText = (text, author) => {
    //select random color without repeating previous color
    const oldColor = $('#text').css('color')
    const updatedColors = [...colors].filter(item => item !== oldColor)
    const color = Math.floor(Math.random() * updatedColors.length)

    // display quote and author on page using fade animations
    $('.text-wrapper').fadeOut(750, () => {
      $('#text')
        .html(text)
        .css('color', updatedColors[color]) // change color
      if (author) {
        $('#author').html(`&#8212\xa0\xa0${author}`)
      } else {
        $('#author').html('')
      }

      $('.text-wrapper').fadeIn(1000)
    }) // we use callback so it waits for fadeOut to finish!

    // update href of tweet button
    $('#tweet-quote').attr(
      'href',
      'http://twitter.com/intent/tweet?text=' +
        encodeURIComponent(`"${text}" — ${author}`)
    )
  }

  getQuote() // automatically retrieves first random quote from API

  $('#new-quote').on('click', getQuote) // event listener for quote button
})

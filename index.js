$(document).ready(function() {
  const newQuote = () => {
    let quote // data.content
    let author // data.author

    console.log('Hello World!')
    fetch('https://api.quotable.io/random')
      // only a successful request will supply a response.ok
      .then(response => (response.ok ? response.json() : console.log('balls')))
      .then(data => {
        console.log(data.content)
        $('#text').html(data.content)
        $('#author').html('&#8212\xa0\xa0' + data.author)
      })
      .catch(error => console.log(error)) // only rejects on network errors (see above)
  }

  newQuote()
})

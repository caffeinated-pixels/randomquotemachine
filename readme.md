# Random Quote Machine

This is the app I created for the [Random Quote Machine freeCodeCamp challenge](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine). It's actually a 2020 remake of a version [I created back in 2017](https://codepen.io/cakeisaliegaming/pen/MOvWdg). How time flies!

My aim was to reacquaint myself with Bootstrap and jQuery, and to try out using Sass and Git/GitHub for the first time. That said, the layout is very simple so doesn't make much use of either Bootstrap or Sass!

This project was also my first time using Git and GitHub!

## API notes

I also wanted to use the Fetch API instead of jQuery.ajax. However, I originally used the [forismatic API](http://api.forismatic.com/api/1.0/), which does not support CORS and so fetch will throw a CORS error. And using the option {mode: 'no-cors'} returns an opaque body (i.e. you can't access it!).

I originally got round this in jQuery.ajax() by sending a jsonp request, but this is not natively supported by fetch().

Fortunately, I discovered the free [Quotable API](https://github.com/lukePeavey/quotable) by Luke Peavey, which includes over 2000 quotes by 900 authors and was built as part of a freeCodeCamp project. To get a random quote we simply use the URL https://api.quotable.io/random. Nice!

## Fetch notes

I decided that it would be a useful exercise to include some error catching with my fetch request.
Fetch uses Promises, which only get rejected on network errors. This means that 4xx and 5xx type client errors still return a fulfilled promise, and so bypass .catch() and do not return a TypeError.

However, response.ok will be set to false if the response was unsuccessful, and so we can use it in conditional statements to handle situations where no data is returned from the request.

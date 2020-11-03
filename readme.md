# Random Quote Machine

This is for the Random Quote Machine [freeCodeCamp challenge](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine):

This is a remake of the Random Quote Machine [I created back in 2017](https://codepen.io/cakeisaliegaming/pen/MOvWdg). How time flies!

My aim was to refresh my knowledge of using Bootstrap and jQuery, and to try out Sass and Git/GitHub for the first time.

## API notes

I also wanted to use the Fetch API instead of jQuery.ajax. However, I originally used the [forismatic API](http://api.forismatic.com/api/1.0/), which does not support CORS and so fetch will throw a CORS error. And using the option {mode: 'no-cors'} returns an opaque body (i.e. you can't access it!).

I originally got round this in jQuery.ajax() by sending a jsonp request, but this is not natively supported by fetch().

Fortunately, I discovered the free [Quotable API](https://github.com/lukePeavey/quotable) by Luke Peavey, which includes over 2000 quotes by 900 authors and was built as part of a freeCodeCamp project. To get a random quote we simply use the URL https://api.quotable.io/random. Nice!

https://dev.to/asaoluelijah/understanding-fetch-2-building-a-random-quote-generator-app-25nj

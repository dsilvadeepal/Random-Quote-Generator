//you can add a span tag to just firstletter of quote using some JS String/Array [like Capitalise string exercise in FCC JS Challenges] functions and append quote to html.

var quote, author;
var quoteURL = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

//Generate a new quote
function newQuote() {
  $.getJSON(quoteURL, function(data) {
    quote = $(".quote").text(data.quoteText);
    author = $(".author").text(data.quoteAuthor);
  });
}

//Tweeting the quote
function sendTweet() {
  window.open('http://twitter.com/intent/tweet?text=' + quote.text() + " " + author.text());
}

function addBtn(){
  $(".quote-container").append("<button type='button' id='tweetBtn' class='btn btn-default'>Tweet</button>");
}

$(document).ready(function() {

  $("#newQuoteBtn").on("click", newQuote);
  $("#newQuoteBtn").on("click", addBtn);
  $(".quote-container").on("click", "#tweetBtn", sendTweet);
});


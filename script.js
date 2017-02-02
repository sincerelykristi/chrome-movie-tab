(function(){

  var images = [
  "images/squad.jpg",
  "images/fight.jpg",
  "images/sunshine",
  ];

  var quotes = [
  "'I'm known to be quite vexing. I'm just forewarning you.'",
  "'We're the middle children of history, man. No purpose or place. We have no Great War. No Great Depression. Our great war is a spiritual war... Our great depression is our lives.'",
  "'My embarrassing admission is I really like that you're nice, right now.'",
  ];

  var character = [
  "- Harley Quinn",
  "- Tyler Durden",
  "- Clementine Kruczynski",
  ];

  var movie = [
  "Suicide Squad (2016)",
  "Fight Club (1999)",
  "Eternal Sunshine (2004)",
  ];

var chooseAQuote = function(q) {
  return q[Math.floor(Math.random() * q.length)];
}

window.onload = function() {
  var randomImage = chooseAQuote(images);
  var randomQuote = chooseAQuote(quotes);
  var randomCharacter = chooseAQuote(character);
  var randomMovie = chooseAQuote(movie);
}




//closing
})

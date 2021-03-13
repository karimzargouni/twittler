
function display() {
  var $body = $('#tweets');
  $('.bg').css("background-image", "url('https://www.pixelstalk.net/wp-content/uploads/2016/06/Twitter-Photos-HD.jpg')");
  $("h1").css("text-align", "center")
  $("div").css("font-size", "50px")
  $("#upper").css("font-family", "Fantasy")
  $("#upper").css("font-size", "80px")
  $("#upper").css("color", "Peru")
  $('div').css('color', 'white')
  $body.html('');
  var index = streams.home.length - 1;
  while (index >= 0) {
    var tweet = streams.home[index];
    var $tweet = $('<div class = "tweet"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + ' published:' + tweet.created_at.getMinutes() + ' minutes');
    $tweet.appendTo($body);
    index -= 1;

  }

}
$(document).ready(display);

var writeTweet = function () {
  var message = $("#newtweet").val();
  var tweet = {};
  tweet.user = "me";
  tweet.message = message;
  tweet.created_at = new Date();
  streams.home.push(tweet)
};
function add() {
  writeTweet()
  display()
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


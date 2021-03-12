
function display() {
    var $body = $('#tweets');
    $(document).ready(function(){
    $('.bg').css("background-image","url('https://www.pixelstalk.net/wp-content/uploads/2016/06/Twitter-Photos-HD.jpg')");
    });
    
    $("h1").css("text-align", "center")
    $("div").css("font-size", "50px")
    $("#upper").css("font-family","Fantasy")
    $("#upper").css("font-size","80px")
    $("#upper").css("color","Peru")
    $('div').css('color','white')
    $('.w3-bar-item w3-button').css('coor','black')
    
    
    $body.html('');

    var index = streams.home.length - 1;
    while (index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class = "tweet"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + ' published:' + ' ' + tweet.created_at.getMinutes() + " minutes ago");
      $tweet.appendTo($body);
      index -= 1;

    }

    $(":button").css("background-color", "peru");
    $('button').css('padding','40px'); 
    $('button').css('cursor','pointer');
    
  }
  $(document).ready(display);


  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
var gamePattern=[];
//gamePattern.push(randomChosenColour);
var buttonColours=["red", "blue", "green", "yellow"];
var userClickedPattern=[];

var randomChosenColour=buttonColours[nextSequence()];


function nextSequence(){
  var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  //var audio= new Audio("sounds/crash.mp3");
  //audio.play();


}

function playSound(name){

  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

});

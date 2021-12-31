var noButtons = document.querySelectorAll("button").length;

for (var i = 0; i < noButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",
    function() {

      var sound= new Audio("sounds/crash.mp3");
      sound.play();


    });
}

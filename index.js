
//Detecting button press
noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < noOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", soundTrack);
}
function soundTrack(){
  console.log(this.style.color = "yellow");
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

    }
//Detecting key board press

document.addEventListener("keydown",pressKey);
function pressKey(event){
  makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;

    case "s":
      var snares = new Audio('sounds/snare.mp3');
      snares.play();
    break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    default: console.log(buttonInnerHTML);


  }

}
function buttonAnimation(currKey){
    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);

}

/*function handleClick(){
  alert("I have been clicked!");
}
*/

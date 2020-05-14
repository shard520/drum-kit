// Establish Array of drum buttons
var drumArray = document.querySelectorAll(".drum");

// Loop through Array, adding event listeners for each button.
// When clicked, access text and pass it as argument to function call.
for (i = 0; i < drumArray.length; i++){
    drumArray[i].addEventListener("click", function(){
		
		trigger = this.innerHTML;

		whichKey(trigger);
		buttonAnimation(trigger);
		});
}

// Event Listeners for keydown, when pressed pass key value to function.
document.addEventListener("keydown", function(event){
	whichKey(event.key);
	buttonAnimation(event.key);
})

// Takes argument from click or keydown event listeners and uses switch to trigger relevant drum.
function whichKey(trigger){

    switch (trigger) {
		case "a":
			var kick = new Audio("sounds/kick.mp3");
			kick.play();
			break;
		case "d":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;
		case "g":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "q":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "w":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "e":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "r":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		default:
			console.log(event.key);
			break;
	}
}

// Flash button on selection
function buttonAnimation(trigger) {

	var activeButton = document.querySelector("." + trigger);
	activeButton.classList.add("pressed");

	setTimeout(function(){
		activeButton.classList.remove("pressed");
	}, 100);
}
var colors = [
	
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"

]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[4];
var colorDisplay = document.getElementById('discolor');
var tryAgainMsg = document.getElementById("tryagain");
colorDisplay.textContent= pickedColor;

for (var i =0;  i< squares.length; i++) {
	// add initial colors to each square
	squares[i].style.background=colors[i];
	//add listeners to the square



squares[i].addEventListener("click", function(){
	// determine the color rgb on each clicked square
var clickedColor = this.style.background;
// compare clicked color with picked color
if (clickedColor === pickedColor)
{
	tryAgainMsg.textContent = "Correct!";
	for (var i =0;  i< squares.length; i++) {
	squares[i].style.background=pickedColor;}
	
}else
	{ this.style.background = "#232323";
		tryAgainMsg.textContent = "Try Again";
}

	});
}




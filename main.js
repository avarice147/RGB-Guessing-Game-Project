//need array to store all colors
var colors = generateRandomColors(6); //random function for colors in our squares 
										//argument is how many colors/squares we want


// var colors = [
// 	"rgb(255, 0, 0)",	//red
// 	"rgb(255, 255, 0)", //yellow
// 	"rgb(0, 255, 0)", 	//green
// 	"rgb(0, 255, 255)",	//cian
// 	"rgb(0, 0, 255)",	//blue
// 	"rgb(255, 0, 255)",	//magenta
// ];


//select all the "squares"
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //function for random color
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;
//go through each square 
for(var i = 0; i < squares.length; i++) {
	//assign each square a color from array
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor
		//compare color of pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = 'Try again!';
		}
	});

};

//FUNCTIONS

//change all squares to correct color
function changeColors(color) {
	//loop thru all squares
	for(var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	};
};

//pick random number aka coolor function
function pickColor() {
	//Math.floor is rounding off number
	//Math.random is random # from 0 to 1
	// multiply to the length of colors array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
};


//goes thru 6 times aka num pushing random colors into array
function generateRandomColors(num) {
	//make empty array
	arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
		//return array
		return arr
};

//random RGBcolor 
function randomColor() {
	//red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//must make this = "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
};
// tictacboom.js

var turn = true;
var emptySpaces = 9;

function imageAppear(e) {

	element = e.target;
	console.log(element);

	image = document.createElement("img");
	image.height="175";
	image.width="175";

	if (turn) {
		//X goes first
		image.src = "x.png";
		turn = false;
	}
	else {
		//O's turn
		image.src = "o.png";
		turn = true;
	}

	element.appendChild(image);
	emptySpaces--;
	if (emptySpaces == 0) {
	alert("This game is a draw!");
	}
};

//<img src="x.png" height="175" width="175">
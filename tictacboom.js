// tictacboom.js

var turn = true;
var emptySpaces = 9;

function imageAppear(e) {

	element = e.target;
	console.log(element);

	if(element.tagName =="DIV" && element.children.length == 1) {

		image = document.createElement("img");
		image.height="175";
		image.width="175";

		para = element.children[0];

		if (turn) {
			//X goes first
			image.src = "x.png";
			para.innerText = "x";
			turn = false;
		}
		else {
			//O's turn
			image.src = "o.png";
			para.innerText = "o";
			turn = true;
		}

		//add image if there are no images already
		element.appendChild(image);

		//check if anyone won
		grid = document.getElementsByTagName("P");
		//there are 8 grid ways to win
		//0,1,2 ; 3,4,5; 6,7,8; 0,3,6; 1,4,7; 2,5,9; 0,4,8; 2,4,6
		if (grid[0].innerText===grid[1].innerText && grid[0].innerText===grid[2].innerText)
			alert(grid[0].innerText + " wins!");

		emptySpaces--;
		if (emptySpaces == 0) {
		alert("This game is a draw!");
		}
	}
};

//<img src="x.png" height="175" width="175">
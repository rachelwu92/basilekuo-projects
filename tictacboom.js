// tictacboom.js

var turn = true;
var emptySpaces = 9;

function checkWin(a, b, c) {
	//make sure the square isn't empty first
	if (grid[a].innerText !== "") {
		if (grid[b].innerText !== "") {
			if (grid[c].innerText !== "") {
				if (grid[a].innerText===grid[b].innerText) {
					if (grid[b].innerText===grid[c].innerText) {
					alert(grid[a].innerText + " wins!");
					return true;
					}
				}
			}
		}
	}
}

function imageAppear(e) {

	element = e.target;
	console.log(element);

	if(element.tagName =="DIV" && element.children.length == 1) {

		//create the image
		image = document.createElement("img");
		image.height="175";
		image.width="175";

		//paragraph child of the div
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
		// //0,1,2 ; 3,4,5; 6,7,8; 0,3,6; 1,4,7; 2,5,8; 0,4,8; 2,4,6
		if (checkWin(0,1,2)) {
		}
		else if (checkWin(3,4,5)) {
		}
		else if (checkWin(6,7,8)) {
		}
		else if (checkWin(0,3,6)) {
		}
		else if (checkWin(1,4,7)) {
		}
		else if (checkWin(2,5,8)) {
		}
		else if (checkWin(0,4,8)) {
		}
		else if (checkWin(2,4,6)) {
		}
		else {
			emptySpaces--;
			if (emptySpaces == 0) {
			alert("This game is a draw!");
			}
		}
	}
};

//<img src="x.png" height="175" width="175">
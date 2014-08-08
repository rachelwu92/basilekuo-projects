// tictacboom.js

var turn = true;
var emptySpaces = 9;

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
		// //0,1,2 ; 3,4,5; 6,7,8; 0,3,6; 1,4,7; 2,5,9; 0,4,8; 2,4,6
		// if (grid[0].innerText===grid[1].innerText && grid[0].innerText===grid[2].innerText)
		// 	alert(grid[0].innerText + " wins!");
		// for (var i = 0; i < grid.length; i++) {
		// 	if (grid[i] !== "") {
				
		// 	}
		// };

		function checkWin(a, b, c) {
			//make sure the square isn't empty first
			if (grid[a].innerText !== "") {
				if (grid[b].innerText !== "") {
					if (grid[c].innerText !== "") {
						if (grid[a].innerText===grid[b].innerText===grid[c].innerText) {
							alert(grid[a].innerText + " wins!");
							return true;
						}
					}
				}
			}
		}

		// if (checkWin(0,1,2)) {
		// 	continue;
		// }
		// else if (checkWin(3,4,5)) {
		// 	continue;
		// }
		// else if (checkWin(6,7,8)) {
		// 	continue;
		// }
		// else if (checkWin(0,3,6)) {
		// 	continue;
		// }
		// else if (checkWin(1,4,7)) {
		// 	continue;
		// }
		// else if (checkWin(2,5,9)) {
		// 	continue;
		// }
		// else if (checkWin(0,4,8)) {
		// 	continue;
		// }
		// else if (checkWin(2,4,6)) {
		// 	continue;
		// }
		// else {
		
		// }

		emptySpaces--;
		if (emptySpaces == 0) {
		alert("This game is a draw!");
		}
	}
};

//<img src="x.png" height="175" width="175">
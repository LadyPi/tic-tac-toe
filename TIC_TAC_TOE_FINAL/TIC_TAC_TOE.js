window.onload = startGame();

// var playerA, playerB, message, reset, winner;


var cells = document.querySelectorAll("td");

function startGame() {
    xoListener();
}

// // test

// function startGame() {
// var cells = document.getElementsById("id");
// console.log(cells);
// for (var i = 0; i < cells.length; i++) {
// // console.log(cells);
// }
// };

function xoListener(){
 for (var i = cells.length - 1; i >= 0; i--) {
   cells[i].addEventListener("click", console.log("playXorO"));
 }
};


var turn = "X"

function playXorO(){
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X";
    };

};


//////////////////////////////////////////////////

// 2nd draft code

// this has to do with the moves that are made, SEPARATE from board functions.
// function playerMove(player) {
// 	// player makes move
// 	//set board to that LETTER

// 	if (playerA = "X") {
// 		//state which player should go next
// 		// allow for toggle between letters
// 	}
// 	result answer;
// };


// function winningCombo (playerMove){
// 	var result = false;
// 	// win combinations
// 	// #s refer to squares 
// 	if (row(1, 2, 3, playerMove) ||  
// 	   (row(4, 5, 6, playerMove) ||
// 	   (row(7, 8, 9, playerMove) ||
//        (column(1, 4, 7, playerMove) ||
//        (column(2, 5, 8, playerMove) ||
// 	   (column(3, 6, 9, playerMove) ||
// 	   (diagnonal(1, 5, 9, playerMove) ||
//        (diagnonal(3, 5, 7, playerMove)) {
       
//        result = true
// }
// 	return result;
// };


//////////////////////////////////////////////////////////////////////

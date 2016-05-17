console.log("hello world");
$(document).ready(function() {
startGame();

});

//board combos to win the game
var winningCombos = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//how many times they've won
// playerX = []; 
// playerO = [];
var ids = this.id;

function startGame() {
	$("#reset").on("click", function() {
	$("#ui_message").text("Player X, you're up!");
	// reset when boxes are full and clicked on again, :reset
	// playerBoard();
	test();
	// playerMove();
   });
}

// Start over and separate functions
	// First is to build an event listener specific to clicks of a player.
	// add Annabelle's suggestions.



















 
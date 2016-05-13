console.log("hello world");
// window.onload = startGame();
$(document).ready(function() {
console.log('onready');
startGame();

// var xMove;
// var oMove;

});

function startGame() {
	$("#reset").on("click", function() {
	// alert("working!");
	$("#ui_message").text("Player X, you're up!");
	// and reset
	playerBoardMove();
	});
}


function playerBoardMove() {
	if $(".cell").on("click", function(e) {

		console.log("clicked", e.target);
	// if ($("td.cell") === "X") {
	// 	($("td.cell").html("O");
	// 	// ($("td.cell") = "O");
	// } else {
	// 	($("td.cell") = "X");
 //  }
  });
}


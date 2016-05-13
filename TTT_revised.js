console.log("hello world");
window.onload = startGame();


// var xMove;
// var oMove;


function startGame() {
	$("#reset").on("click", function() {
	// alert("working!");
	$("#ui_message").text("Player X, you're up!");
	// and reset
	// playerBoardMove();
	});
}
function playerBoardMove() {
	// if a cell is clicked, 
	// 	toggle between x and O 
	// when the next player goes, don't allow them to change board
	// if x is chosen or === x
	// 	then change to = o
	// then vice versa
	$("td.cell").each("click", function() {
	// identify all the cells
	if ($("td.cell")) === "X" {
		($("td.cell")) = "O";
	} else {
		($("td.cell")) = "X";
	// $("td#c1.cell").on("click", function() {
	// identify all the cells
	// $("td#c1.cell").text("X");
	// $(this).toggleClass("cell"), make this a global perhaps? or just for cells
	// console.log("I worked!");
  }
  });
}


function playerBoardMove() {
	$("td.cell").on("click", function() {
	if ($("td.cell") === "X") {
		($("td.cell") = "O");
	} else {
		($("td.cell") = "X");
  }
  });
}
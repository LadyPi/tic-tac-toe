console.log("hello world");
$(document).ready(function() {
startGame();
// playerX = "X";
// playerO = "O";

});

function startGame() {
	$("#reset").on("click", function() {
	$("#ui_message").text("Player X, you're up!");
	// reset
   });
}
function playerBoard() {
	$(".cell").on("click", function(e) {
	// console.log("clicked", e.target);
	// console.log("I'm coming from playerBoard.");
});
}
$(function() {
	$("td").each(function playerMove() {
		var ids = this.id;
		$(this).on("click", function(e) {
		if($(this).is(":empty"));
			$(this).on("click", function(e) {
				$(this).text("X");
		if ($(this).is("O"));
  			alert("This square is already being used.");
		// if$(this).dblclick(function() {
  // 			$(this).text("O");
		// alert("I am a test.");
});
});
});
});
 
		
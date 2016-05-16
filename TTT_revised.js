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
	// reset when boxes are empty and clicked on again
	// playerBoard();
	test();
	// playerMove();
   });
}
// function playerBoard() {
// 	$(".cell").on("click", function(e) {
// // 	// console.log("clicked", e.target);
// // 	// console.log("I'm coming from playerBoard.");
// 	startGame();
// 	test();
// });
// }

// var currIndex = 0;?

function test() {
	startGame();

	$("td").each(function () {
		if ($("td:odd").is(":empty")) {
			$(this).on("click", function() {
			$(this).text("X").css( "background-color", "#006bb6" );
			// $( "td" ).filter( ":even" ).text("X").css( "background-color", "gray" );
			$("#ui_message").text("Player O, you're up!");
			 
				($("td:even").is(":empty")); 
				$(this).on("click", function() {
				$(this).text("O").css( "background-color", "#b163a3" );
				// $( "td" ).filter( ":odd" ).text("O").css( "background-color", "gray" );
				$("#ui_message").text("Player X, you're up!");
			 		
			 		$(($(this) === "")); //maybe add if statement in front
			 		$(this).on("click", function() { 
					// $(this).on("click", function(e) {
					($("#ui_message").text("This box is already being used."));


});
// }
});
// }
});
}
});
}


// function test() {
// 	// startGame();
// 	$.each($("td:gt()"), function(index, square) {
// 		//change td:get() and you can go one by one but takes element.
//    // As a side note, this === el.
//    	if ([index] % 2 === 0) {
//    		$(this).on("click", function() { 
//    		$(this).text("X").css( "background-color", "green" ); 
//    		$("#ui_message").text("Player O, you're up!");
//    	}); 
// 	} else if ([index] % 2 === 1) {
//    		$(this).on("click", function() {
//    		$(this).text("O").css( "background-color", "gray" ); 
//    		$("#ui_message").text("Player X, you're up!");
   
//    }); 
//    } else {
//    		// $(this).is(!":empty");
//    		$("#ui_message").text("This box is already being used.");
// }
// });
// }


// winningCombos 
// listed at top
//should post a message to UI when there is a win

//scoreboard
//-css scoreboard







// Adjustments to be made:
//-make it so not allowed to click over chosen X or O
//-create scoreboard
//-if there is time add educational component on left side
//-test with another user.